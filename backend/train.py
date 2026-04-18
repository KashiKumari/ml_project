import pickle
import numpy as np
from sklearn.tree import DecisionTreeClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split

FEATURES = [
    "ProductionVolume",
    "ProductionCost",
    "SupplierQuality",
    "DeliveryDelay",
    "DefectRate",
    "QualityScore",
    "MaintenanceHours",
    "DowntimePercentage",
    "InventoryTurnover",
    "StockoutRate",
    "WorkerProductivity",
    "SafetyIncidents",
    "EnergyConsumption",
    "EnergyEfficiency",
    "AdditiveProcessTime",
    "AdditiveMaterialCost",
]

np.random.seed(42)
n = 1000

X = np.column_stack([
    np.random.randint(100, 5000, n),        # ProductionVolume
    np.random.uniform(1000, 50000, n),      # ProductionCost
    np.random.uniform(0.5, 1.0, n),         # SupplierQuality
    np.random.randint(0, 30, n),            # DeliveryDelay
    np.random.uniform(0.0, 0.3, n),         # DefectRate
    np.random.uniform(50, 100, n),          # QualityScore
    np.random.uniform(1, 100, n),           # MaintenanceHours
    np.random.uniform(0.0, 0.5, n),         # DowntimePercentage
    np.random.uniform(1, 20, n),            # InventoryTurnover
    np.random.uniform(0.0, 0.2, n),         # StockoutRate
    np.random.uniform(50, 150, n),          # WorkerProductivity
    np.random.randint(0, 10, n),            # SafetyIncidents
    np.random.uniform(100, 1000, n),        # EnergyConsumption
    np.random.uniform(0.5, 1.0, n),         # EnergyEfficiency
    np.random.uniform(1, 50, n),            # AdditiveProcessTime
    np.random.uniform(100, 5000, n),        # AdditiveMaterialCost
])

# Label: 1 = defect likely, based on DefectRate + QualityScore
y = ((X[:, 4] > 0.15) | (X[:, 5] < 70)).astype(int)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)

model = DecisionTreeClassifier(max_depth=6, random_state=42)
model.fit(X_train_scaled, y_train)

X_test_scaled = scaler.transform(X_test)
accuracy = model.score(X_test_scaled, y_test)
print(f"Model accuracy: {accuracy:.4f}")
print(f"Features: {FEATURES}")
print(f"Scaler mean shape: {scaler.mean_.shape}")

with open("model.pkl", "wb") as f:
    pickle.dump(model, f)

with open("scaler.pkl", "wb") as f:
    pickle.dump(scaler, f)

print("model.pkl and scaler.pkl saved successfully.")
