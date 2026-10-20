# ==============================================================================
# Laptop Price Predictor - Flask Web Application Backend
# Architecture Reference: L5-1 Flask Project Pattern
# Endpoints:
#   - GET  /             : Web Simulator Frontend (templates/index.html)
#   - POST /api/predict  : Inference API (supports JSON and HTML Form)
#   - GET  /api/predict  : Inference API (supports URL Query Parameters)
#   - GET  /api/health   : Health check & model status monitor
# ==============================================================================

import os
import math
import pickle
from flask import Flask, request, jsonify, render_template, send_from_directory

# Optional ML libraries with graceful fallback
try:
    import numpy as np
    import pandas as pd
    import sklearn
    HAS_ML_DEPS = True
except ImportError:
    HAS_ML_DEPS = False
    np = None
    pd = None
    sklearn = None

# Directory paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
TEMPLATES_DIR = os.path.join(BASE_DIR, "templates")
MODEL_PATH = os.path.join(BASE_DIR, "laptop_price_model.pkl")

# Initialize Flask application
app = Flask(
    __name__,
    template_folder=TEMPLATES_DIR,
    static_folder=BASE_DIR,
    static_url_path=""
)
handler = app  # WSGI compatibility alias

# Calibrated regression parameters for fallback when .pkl or ML deps are unavailable
FALLBACK_INTERCEPT = 12500.0
FALLBACK_COEFS = {
    "Ram": 1850.0,
    "SSD": 48.5,
    "HDD": 12.0,
    "Ppi": 165.0,
    "Touchscreen": 4200.0,
    "Ips": 5800.0,
    "Weight": -2800.0,
    "Company": {
        "Apple": 34000.0,
        "Dell": 6500.0,
        "HP": 5200.0,
        "Lenovo": 4800.0,
        "Asus": 4100.0,
        "MSI": 12500.0,
        "Toshiba": 7500.0,
        "Microsoft": 15000.0,
        "Acer": -3500.0,
        "Chuwi": -8000.0,
        "Other": 0.0
    },
    "TypeName": {
        "Ultrabook": 14000.0,
        "Gaming": 22000.0,
        "Workstation": 38000.0,
        "2 in 1 Convertible": 8500.0,
        "Notebook": 0.0,
        "Netbook": -6000.0
    },
    "Cpu_brand": {
        "Intel Core i7": 19500.0,
        "Intel Core i5": 9200.0,
        "Intel Core i3": 0.0,
        "AMD Processor": -2500.0,
        "Other Intel Processor": -6500.0,
        "Other Processor": -4000.0
    },
    "Gpu_brand": {
        "Nvidia": 16800.0,
        "AMD": 3200.0,
        "Intel": 0.0,
        "Other": 0.0
    },
    "OpSys": {
        "Mac": 22000.0,
        "Windows": 4500.0,
        "Others/No OS/Linux": 0.0
    }
}

# Attempt to load the trained Scikit-Learn Pipeline (.pkl)
model = None
if HAS_ML_DEPS and os.path.exists(MODEL_PATH):
    try:
        with open(MODEL_PATH, "rb") as f:
            model = pickle.load(f)
        print(f"Loaded Scikit-Learn model pipeline from: {MODEL_PATH}")
    except Exception as e:
        print(f"Warning: Failed to load model ({e}). Using calibrated regression fallback.")
else:
    print(f"Info: {MODEL_PATH} not found or ML deps missing. Using calibrated fallback.")


def calculate_ppi(inches: float, resolution_str: str) -> float:
    """Helper function to calculate PPI from resolution and screen size."""
    try:
        inches = float(inches)
        if "x" in str(resolution_str).lower():
            parts = str(resolution_str).lower().split("x")
            width = float(parts[0].strip())
            height = float(parts[1].strip())
            if inches > 0:
                return round(math.sqrt(width ** 2 + height ** 2) / inches, 2)
    except Exception:
        pass
    return 141.21  # Default standard 15.6" FHD PPI


def predict_price(specs: dict) -> dict:
    """Predict laptop price using loaded .pkl pipeline or calibrated regression."""
    global model

    company = str(specs.get("Company") or "Dell")
    typename = str(specs.get("TypeName") or "Notebook")
    ram = int(specs.get("Ram") or 8)
    weight = float(specs.get("Weight") or 1.85)
    touchscreen = int(specs.get("Touchscreen") or 0)
    ips = int(specs.get("Ips") or 0)
    ppi = float(specs.get("Ppi") or 141.21)
    cpu_brand = str(specs.get("Cpu_brand") or "Intel Core i5")
    hdd = int(specs.get("HDD") or 0)
    ssd = int(specs.get("SSD") or 256)
    gpu_brand = str(specs.get("Gpu_brand") or "Intel")
    opsys = str(specs.get("OpSys") or "Windows")

    # If inches and resolution were provided, dynamically compute PPI
    inches = specs.get("Inches")
    resolution = specs.get("Resolution")
    if inches and resolution:
        ppi = calculate_ppi(float(inches), str(resolution))

    # 1. Primary: Use trained Scikit-Learn Pipeline
    if model is not None and HAS_ML_DEPS and pd is not None:
        try:
            df_input = pd.DataFrame([{
                "Company": company,
                "TypeName": typename,
                "Ram": ram,
                "Weight": weight,
                "Touchscreen": touchscreen,
                "Ips": ips,
                "Ppi": ppi,
                "Cpu_brand": cpu_brand,
                "HDD": hdd,
                "SSD": ssd,
                "Gpu_brand": gpu_brand,
                "OpSys": opsys
            }])
            raw_prediction = float(model.predict(df_input)[0])
            # Bound prediction to reasonable retail minimum
            price = max(raw_prediction, 12000.0)

            return {
                "source": "scikit-learn pipeline (.pkl)",
                "predicted_price": round(price, 2),
                "inputs": {
                    "Company": company,
                    "TypeName": typename,
                    "Ram": ram,
                    "Weight": weight,
                    "Touchscreen": touchscreen,
                    "Ips": ips,
                    "Ppi": ppi,
                    "Cpu_brand": cpu_brand,
                    "HDD": hdd,
                    "SSD": ssd,
                    "Gpu_brand": gpu_brand,
                    "OpSys": opsys
                }
            }
        except Exception as e:
            print(f"Pipeline prediction error ({e}), switching to calibrated fallback.")

    # 2. Secondary: Calibrated regression formula fallback
    comp_val = FALLBACK_COEFS["Company"].get(company, FALLBACK_COEFS["Company"]["Other"])
    type_val = FALLBACK_COEFS["TypeName"].get(typename, 0.0)
    cpu_val = FALLBACK_COEFS["Cpu_brand"].get(cpu_brand, 0.0)
    gpu_val = FALLBACK_COEFS["Gpu_brand"].get(gpu_brand, 0.0)
    os_val = FALLBACK_COEFS["OpSys"].get(opsys, 0.0)

    price = (
        FALLBACK_INTERCEPT
        + (FALLBACK_COEFS["Ram"] * ram)
        + (FALLBACK_COEFS["SSD"] * ssd)
        + (FALLBACK_COEFS["HDD"] * hdd)
        + (FALLBACK_COEFS["Ppi"] * ppi)
        + (FALLBACK_COEFS["Touchscreen"] * touchscreen)
        + (FALLBACK_COEFS["Ips"] * ips)
        + (FALLBACK_COEFS["Weight"] * weight)
        + comp_val
        + type_val
        + cpu_val
        + gpu_val
        + os_val
    )
    price = max(price, 12000.0)

    return {
        "source": "calibrated formula fallback",
        "predicted_price": round(price, 2),
        "inputs": {
            "Company": company,
            "TypeName": typename,
            "Ram": ram,
            "Weight": weight,
            "Touchscreen": touchscreen,
            "Ips": ips,
            "Ppi": ppi,
            "Cpu_brand": cpu_brand,
            "HDD": hdd,
            "SSD": ssd,
            "Gpu_brand": gpu_brand,
            "OpSys": opsys
        }
    }


# ==============================================================================
# WEB & API ROUTES
# ==============================================================================

@app.route("/", methods=["GET"])
def home():
    """Serve the interactive web simulator frontend."""
    template_index = os.path.join(TEMPLATES_DIR, "index.html")
    if os.path.exists(template_index):
        return render_template("index.html")

    root_index = os.path.join(BASE_DIR, "index.html")
    if os.path.exists(root_index):
        return send_from_directory(BASE_DIR, "index.html")

    return jsonify({
        "message": "Laptop Price Predictor API is running.",
        "endpoints": {
            "predict": "/api/predict (POST / GET)",
            "health": "/api/health (GET)"
        }
    })


@app.route("/api/health", methods=["GET"])
def health_check():
    """Health check endpoint for deployment monitoring."""
    return jsonify({
        "status": "healthy",
        "model_loaded": model is not None,
        "model_file_exists": os.path.exists(MODEL_PATH),
        "ml_dependencies_ready": HAS_ML_DEPS
    })


@app.route("/api/predict", methods=["GET", "POST"])
@app.route("/predict", methods=["GET", "POST"])
def predict():
    """
    Predict laptop price based on specifications.
    Accepts JSON body (POST), Form Data (POST), or Query Params (GET).
    """
    if request.method == "POST":
        data = request.get_json(silent=True) or request.form.to_dict() or {}
    else:
        data = request.args.to_dict()

    try:
        # Normalize and extract input attributes
        result = predict_price(data)
        inr_price = result["predicted_price"]

        # Approximate conversions for international buyers
        usd_price = round(inr_price / 83.0, 2)   # 1 USD ≈ 83 INR
        twd_price = round(inr_price * 0.38, 2)   # 1 INR ≈ 0.38 TWD

        return jsonify({
            "status": "success",
            "source": result["source"],
            "predicted_price_inr": inr_price,
            "predicted_price_usd": usd_price,
            "predicted_price_twd": twd_price,
            "predicted_price_formatted": f"₹ {inr_price:,.2f}",
            "inputs": result["inputs"]
        })
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        }), 400


@app.route("/<path:filename>", methods=["GET"])
def serve_static(filename):
    """Serve static assets (e.g. actual_vs_predicted.png)."""
    file_path = os.path.join(BASE_DIR, filename)
    if os.path.exists(file_path) and os.path.isfile(file_path):
        return send_from_directory(BASE_DIR, filename)
    return jsonify({"error": f"File '{filename}' not found"}), 404


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    print(f"Starting Laptop Price Predictor server on port {port}...")
    print(f"Open http://localhost:{port} in your browser.")
    app.run(host="0.0.0.0", port=port, debug=True)
