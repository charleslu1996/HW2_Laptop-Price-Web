import os
import json
from flask import Flask, render_template, request, jsonify

app = Flask(__name__, template_folder="templates", static_folder="static")

# Load precomputed model registry
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_DATA_PATH = os.path.join(BASE_DIR, "model_data.json")

try:
    with open(MODEL_DATA_PATH, "r", encoding="utf-8") as f:
        MODEL_DATA = json.load(f)
except Exception as e:
    print(f"Warning: Could not load model_data.json: {e}")
    MODEL_DATA = {}


@app.route("/")
def index():
    """Render the main StatsUnlock-inspired regression explorer dashboard."""
    return render_template("index.html", initial_algo="Lasso", initial_k=5)


@app.route("/api/models", methods=["GET"])
def get_models():
    """Return the complete 5-algorithm feature selection evaluation data."""
    algo = request.args.get("algo")
    if algo and algo in MODEL_DATA:
        return jsonify({algo: MODEL_DATA[algo]})
    return jsonify(MODEL_DATA)


@app.route("/api/predict", methods=["POST", "GET"])
def predict():
    """
    Live prediction endpoint: Calculates laptop retail price based on user inputs
    and the selected algorithm/k-feature subset.
    """
    try:
        if request.method == "POST":
            data = request.get_json(silent=True) or request.form.to_dict() or {}
        else:
            data = request.args.to_dict()

        algo = data.get("algo", "Lasso")
        k = int(data.get("k", 5))
        ram = float(data.get("ram", 16))
        ssd = float(data.get("ssd", 512))
        cpu_val = str(data.get("cpu_tier", "i7")).lower()
        is_i7 = 1.0 if "i7" in cpu_val or "core i7" in cpu_val else 0.0
        gpu_val = str(data.get("gpu_brand", "nvidia")).lower()
        is_nvidia = 1.0 if "nvidia" in gpu_val or "geforce" in gpu_val else 0.0
        ppi = float(data.get("ppi", 141.2))
        is_gaming = 1.0 if str(data.get("typename", "")).lower() == "gaming" else 0.0

        if algo not in MODEL_DATA or k < 1 or k > len(MODEL_DATA[algo]):
            algo = "Lasso"
            k = 5

        model_spec = MODEL_DATA[algo][k - 1]
        coefficients = model_spec["coefficients"]
        active_features = model_spec["features"]

        predicted_price = 0.0
        breakdown = []

        for c in coefficients:
            feat_name = c["feature"]
            coef_val = c["coef"]

            if "Intercept" in feat_name:
                predicted_price += coef_val
                breakdown.append({
                    "feature": "Intercept",
                    "value": 1.0,
                    "coef": coef_val,
                    "contribution": coef_val
                })
            elif "Ram" in feat_name:
                contrib = coef_val * ram
                predicted_price += contrib
                breakdown.append({
                    "feature": "Ram",
                    "value": ram,
                    "coef": coef_val,
                    "contribution": contrib
                })
            elif "SSD" in feat_name:
                contrib = coef_val * ssd
                predicted_price += contrib
                breakdown.append({
                    "feature": "SSD",
                    "value": ssd,
                    "coef": coef_val,
                    "contribution": contrib
                })
            elif "Intel Core i7" in feat_name:
                contrib = coef_val * is_i7
                predicted_price += contrib
                breakdown.append({
                    "feature": "Intel Core i7",
                    "value": is_i7,
                    "coef": coef_val,
                    "contribution": contrib
                })
            elif "Nvidia Dedicated" in feat_name:
                contrib = coef_val * is_nvidia
                predicted_price += contrib
                breakdown.append({
                    "feature": "Nvidia Dedicated",
                    "value": is_nvidia,
                    "coef": coef_val,
                    "contribution": contrib
                })
            elif "Display PPI" in feat_name:
                contrib = coef_val * ppi
                predicted_price += contrib
                breakdown.append({
                    "feature": "Display PPI",
                    "value": ppi,
                    "coef": coef_val,
                    "contribution": contrib
                })
            elif "Gaming Type" in feat_name:
                contrib = coef_val * is_gaming
                predicted_price += contrib
                breakdown.append({
                    "feature": "Gaming Type",
                    "value": is_gaming,
                    "coef": coef_val,
                    "contribution": contrib
                })

        # Floor at reasonable entry price
        predicted_price = max(12000.0, predicted_price)

        return jsonify({
            "status": "success",
            "algorithm": algo,
            "k": k,
            "active_features": active_features,
            "predicted_price_inr": round(predicted_price, 2),
            "predicted_price_usd": round(predicted_price * 0.012, 2),
            "predicted_price_twd": round(predicted_price * 0.384),
            "rmse": model_spec["rmse"],
            "r2": model_spec["r2"],
            "breakdown": breakdown
        })

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500


@app.route("/api/summary", methods=["GET"])
def summary():
    """Return key comparison metrics across all 5 algorithms."""
    summary_data = []
    for algo, subsets in MODEL_DATA.items():
        for item in subsets:
            summary_data.append({
                "algorithm": algo,
                "k": item["k"],
                "features": item["features"],
                "rmse": item["rmse"],
                "r2": item["r2"],
                "mae": item["mae"]
            })
    return jsonify(summary_data)


@app.route("/api/health", methods=["GET"])
def health():
    """Health check endpoint."""
    return jsonify({
        "status": "healthy",
        "dataset": "Kaggle Laptop Price",
        "algorithms_loaded": list(MODEL_DATA.keys()),
        "optimal_sweet_spot": "k=5 (RMSE: ₹16,350.20, R²: 0.7834)"
    })


# Local development server entrypoint
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    print(f" * Starting Laptop Price Flask Server on http://localhost:{port}")
    app.run(host="0.0.0.0", port=port, debug=True)
