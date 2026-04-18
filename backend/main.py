import os
import pickle
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# ✅ Safe path handling for deployment
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Load model and scaler
with open(os.path.join(BASE_DIR, "model.pkl"), "rb") as f:
    model = pickle.load(f)

with open(os.path.join(BASE_DIR, "scaler.pkl"), "rb") as f:
    scaler = pickle.load(f)

# All 16 features the model was trained on, in exact order
FULL_FEATURES = [
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

# Map frontend field names → model feature names
FRONTEND_TO_MODEL = {
    "Maintenance_Hours": "MaintenanceHours",
    "Defect_Rate": "DefectRate",
    "Quality_Score": "QualityScore",
    "Production_Volume": "ProductionVolume",
    "Material_Cost": "ProductionCost",
    "Stockout_Rate": "StockoutRate",
    "Energy_Efficiency": "EnergyEfficiency",
}

REQUIRED_FRONTEND_FIELDS = list(FRONTEND_TO_MODEL.keys())

# Default values for missing features (using scaler means)
FEATURE_DEFAULTS = dict(zip(FULL_FEATURES, scaler.mean_))


@app.route("/")
def home():
    return jsonify({"message": "DefectDetector API is running 🚀"})


@app.route("/health", methods=["GET"])
def health():
    return jsonify({
        "status": "ok",
        "model": type(model).__name__,
        "features": len(FULL_FEATURES)
    })


@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json(force=True)

        if not data:
            return jsonify({"error": "No JSON body received"}), 400

        # Validate required fields
        missing = [f for f in REQUIRED_FRONTEND_FIELDS if f not in data]
        if missing:
            return jsonify({"error": f"Missing required fields: {missing}"}), 400

        # Validate numeric input
        invalid = []
        for f in REQUIRED_FRONTEND_FIELDS:
            try:
                float(data[f])
            except (TypeError, ValueError):
                invalid.append(f)

        if invalid:
            return jsonify({"error": f"Non-numeric values for: {invalid}"}), 400

        # Build full feature set
        feature_values = dict(FEATURE_DEFAULTS)

        for frontend_key, model_key in FRONTEND_TO_MODEL.items():
            feature_values[model_key] = float(data[frontend_key])

        # Convert to ordered array
        feature_array = np.array([[feature_values[f] for f in FULL_FEATURES]])

        # Scale + Predict
        scaled = scaler.transform(feature_array)
        prediction = model.predict(scaled)
        probability = model.predict_proba(scaled)[0].tolist()

        return jsonify({
            "prediction": int(prediction[0]),
            "label": "Defect Likely" if prediction[0] == 1 else "No Defect",
            "confidence": round(max(probability) * 100, 2),
        })

    except ValueError as e:
        return jsonify({"error": f"Invalid input: {str(e)}"}), 400

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# ✅ Production-safe run block
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)