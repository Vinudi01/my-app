from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/api/message")
def message():
    return {
        "message": "Hello From Docker + Github Actions + Kubernetes! Berhasil!!!"
    }


@app.route("/")
def hello():
    return "Flask backend is running!"


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
