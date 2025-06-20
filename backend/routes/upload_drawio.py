from flask import Blueprint, json, request, jsonify
import xmltodict
import drawio

upload_drawio = Blueprint('upload-drawio', __name__)

@upload_drawio.route("/upload-drawio", methods=["POST"])
def upload_drawio_route():
    if 'drawio_file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['drawio_file']  # matches React key now

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    try:
        drawio_content = file.read().decode('utf-8')
        json_data = xmltodict.parse(drawio_content)
        architecture_data = drawio.extract_components_and_connections(json_data)
        return jsonify(architecture_data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
