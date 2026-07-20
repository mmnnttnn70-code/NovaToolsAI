from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai

app = Flask(__name__)
CORS(app)

# ضع مفتاح Gemini API هنا
genai.configure(api_key="ضع مفتاح API هنا")

# إنشاء نموذج Gemini
model = genai.GenerativeModel("gemini-2.5-flash")


@app.route("/")
def home():
    return "Aivora AI Server is Running"


@app.route("/chat", methods=["POST", "OPTIONS"])
def chat():

    if request.method == "OPTIONS":
        return "", 200

    try:
        data = request.get_json(force=True)
        message = data.get("message", "").strip()

        if not message:
            return jsonify({
                "reply": "Please enter a message."
            })

        response = model.generate_content(message)

        return jsonify({
            "reply": response.text
        })

    except Exception as e:
        return jsonify({
            "reply": f"Server Error: {str(e)}"
        }), 500


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )