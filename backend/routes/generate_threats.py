from flask import Blueprint, request, jsonify
from services.augur_service import augur

generate_threats = Blueprint('generate_threats', __name__)

@generate_threats.route("/generate_threats", methods=["POST"])
def generate_threats_route():
    if 'prodspecdoc' not in request.files or 'plantumlfile' not in request.files:
        return jsonify({'error': 'Both files are required'}), 400

    prodspecdoc = request.files['prodspecdoc']
    plantumlfile = request.files['plantumlfile']

    try:
        product_specification_doc = prodspecdoc.read().decode('utf-8')
        plantuml_file = plantumlfile.read().decode('utf-8')
        prompts_file = 'prompts.txt'
        context, aithreats = augur(product_specification_doc, plantuml_file, prompts_file)
        return jsonify({'context': context, 'aithreats': aithreats})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
