import os
from flask import Blueprint, request, jsonify

upload_plantuml = Blueprint('upload_plantuml', __name__)
basedir = os.path.abspath(os.path.dirname(__file__))

@upload_plantuml.route('/upload-plantuml', methods=['POST'])
def upload_plantuml_file():
    if 'file' not in request.files:
        return jsonify({'message': 'No file part in the request'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'message': 'No file selected'}), 400

    upload_folder = os.path.join(basedir, '..', 'uploads', 'plantuml')
    os.makedirs(upload_folder, exist_ok=True)
    file_path = os.path.join(upload_folder, 'input.puml')  # Saving as input.puml
    file.save(file_path)

    return jsonify({'message': f'PlantUML file {file.filename} uploaded successfully!'}), 200
