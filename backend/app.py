import os
import sys
from flask import Flask, send_from_directory
from flask_cors import CORS

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

basedir = os.path.abspath(os.path.dirname(__file__))
frontend_build_dir = os.path.join(basedir, '..', 'frontend', 'build')

app = Flask(__name__, static_folder=frontend_build_dir, static_url_path='/')
CORS(app)

# Import routes
from routes.upload_plantuml import upload_plantuml
from routes.upload_productspec import upload_productspec
from routes.generate_threats import generate_threats

# Register Blueprints
app.register_blueprint(upload_plantuml)
app.register_blueprint(upload_productspec)
app.register_blueprint(generate_threats)

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    os.makedirs(os.path.join(basedir, 'uploads', 'plantuml'), exist_ok=True)
    os.makedirs(os.path.join(basedir, 'uploads', 'productspec'), exist_ok=True)
    app.run(host='0.0.0.0', port=5000, debug=True)
