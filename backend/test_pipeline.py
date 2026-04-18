import pickle
import numpy as np

model = pickle.load(open("model.pkl", "rb"))
scaler = pickle.load(open("scaler.pkl", "rb"))

print("Model:", type(model).__name__, "| n_features:", model.n_features_in_)
print("Scaler:", type(scaler).__name__, "| mean shape:", scaler.mean_.shape)

FULL_FEATURES = [
    "ProductionVolume", "ProductionCost", "SupplierQuality", "DeliveryDelay",
    "DefectRate", "QualityScore", "MaintenanceHours", "DowntimePercentage",
    "InventoryTurnover", "StockoutRate", "WorkerProductivity", "SafetyIncidents",
    "EnergyConsumption", "EnergyEfficiency", "AdditiveProcessTime", "AdditiveMaterialCost",
]

defaults = dict(zip(FULL_FEATURES, scaler.mean_))
defaults.update({
    "MaintenanceHours": 45.0,
    "DefectRate": 0.2,
    "QualityScore": 65.0,
    "ProductionVolume": 1200.0,
    "ProductionCost": 8000.0,
    "StockoutRate": 0.05,
    "EnergyEfficiency": 0.85,
})

arr = np.array([[defaults[f] for f in FULL_FEATURES]])
scaled = scaler.transform(arr)
pred = model.predict(scaled)
proba = model.predict_proba(scaled)[0]

print("Prediction:", pred[0], "->", "Defect Likely" if pred[0] == 1 else "No Defect")
print("Confidence:", round(max(proba) * 100, 2), "%")
print("Pipeline OK")
