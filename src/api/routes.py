"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/register', methods=['POST'])
def register():
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    if not email or not password:
        return jsonify({"msg": "missing data"}), 400
    exist = User.query.filter_by(email=email).first()
    if exist:
        return jsonify({"msg": "email taken"}), 400
    hashed_password = generate_password_hash(password)
    new_user = User(email=email, password=hashed_password, is_active=True)
    db.session.add(new_user)
    db.session.commit()
    token = create_access_token(identity=str(new_user.id))
    return jsonify({"msg": 'ok', 'token': token})

@api.route('/login', methods=['POST'])
def login():
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    if not email or not password:
        return jsonify({"msg": "missing data"}), 400
    exist = User.query.filter_by(email=email).first()
    if exist:
        return jsonify({"msg": "no user found"}), 404
    

    hashed_password = generate_password_hash(password)
    if check_password_hash(exist.password, password):
        return jsonify({"msg":"email/password wrong"})

    token = create_access_token(identity=exist.id)
    return jsonify({"msg": 'ok', 'token': token})

@api.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    identity = get_jwt_identity()
    print('user identity->', identity)
    user = User.query.get(id)
    return jsonify({"msg":"OK", "user": user.serialize()})