import os
from flask import Blueprint, request, jsonify

upload_productspec = Blueprint('upload_productspec', __name__)
basedir = os.path.abspath(os.path.dirname(__file__))

@upload_productspec.route('/upload-productspec', methods=['POST'])
def upload_spec_file():
    if 'file' not in request.files:
        return jsonify({'message': 'No file part in the request'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'message': 'No file selected'}), 400

    upload_folder = os.path.join(basedir, '..', 'uploads', 'productspec')
    os.makedirs(upload_folder, exist_ok=True)
    file_path = os.path.join(upload_folder, 'input.docx')  # Saving as input.docx
    file.save(file_path)

    return jsonify({'message': f'ProductSpec file {file.filename} uploaded successfully!'}), 200
