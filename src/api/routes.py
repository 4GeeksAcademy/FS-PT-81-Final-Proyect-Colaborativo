"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Users, Empresa, GestorCitas, Servicio
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)


# Allow CORS requests to this API
CORS(api, origins="*", methods=["GET", "POST", "PUT", "DELETE"], allow_headers=["Content-Type"])


@api.route('/users', methods=['GET'])
def get_users():
   data = Users.query.all()
   users = [users.serialize() for users in data]
   return jsonify ({"msg":"Ok", "data":users}), 200

@api.route('/users/<int:id>', methods=['GET'])
def one_user(id):
   user = Users.query.get(id)
   if user is None:
        return jsonify({"msg": "No user found with id {id}, the data base might be empty"}), 404
   print(user)
   return jsonify({"msg": "one user with id:" + str(id), "user":user.serialize()}), 200

@api.route('/users', methods=['POST'])
def create_user():
   email = request.json.get('email', None)
   password = request.json.get('password', None)
   if not email or not password:
      return jsonify ({"msg":"All fields is required"}), 400
   check = Users.query.filter_by(email=email).first()
   if check:
      return jsonify ({"msg":"User already exist, please login"}), 400
   new_user = Users(email=email, password=password, is_active=True)
   db.session.add(new_user)
   db.session.commit()
   return jsonify({"msg": "OK", "data": new_user.serialize()}), 201

@api.route('/users/<int:id>', methods=['DELETE'])
def delete_user(id):
   user = Users.query.get(id)
   if not user:
      return jsonify({"msg":"No user found with id:" + str(id)}), 404
   db.session.delete(user)
   db.session.commit()
   return jsonify({"msg": "deleted user with id:" + str(id)}), 200

@api.route('/users/<int:id>', methods=['PUT'])
def update_user(id):
   user = Users.query.get(id)
   if user is None:
    return jsonify ({"msg":"no user found with id:" + str(id)}), 404
   data = request.json
   email = data.get('email')
   password  =data.get('password')
   if not email and not password:
      return jsonify({"msg": "at least one field ( email or password ) must be provided"}), 400
   if email:
      user.email = email
   if password:
      user.password = password
      db.session.commit()
      return jsonify ({"msg": "User with id {id} updated successfully", "user": user.serialize()}), 200
   
@api.route('/company', methods=['GET'])
def get_company():
   data = Empresa.query.all()
   empresas = [empresas.serialize() for empresas in data]
   return jsonify({"msg":"Ok", "data":empresas}), 200

@api.route('/company/<int:id>', methods=['GET'])
def one_company(id):
   company = Empresa.query.get(id)
   if company is None:
        return jsonify({"msg": "No company found with id {id}, the data base might be empty"}), 404
   print(company)
   return jsonify({"msg": "one company with id:" + str(id), "user":company.serialize()}), 200

@api.route('/company', methods=['POST'])
def create_company():
   address = request.json.get('address', None)
   city = request.json.get('city', None)
   email = request.json.get('email', None)
   
   if not address or not city or not email :
      return jsonify ({"msg":"All the fields are required"}), 400
   check = Empresa.query.filter_by(email=email).first()
   if check:
      return jsonify ({"msg":"company already exists, please login"}), 400
   new_company = Empresa(address=address, city=city, email=email)
   db.session.add(new_company)
   db.session.commit()
   return jsonify ({"msg":"OK", "data": new_company.serialize()})

@api.route('/company/<int:id>', methods=['DELETE'])
def delete_company(id):
   empresa = Empresa.query.get(id)
   if not empresa:
      return jsonify({"msg":"No company found with id:" + str(id)}), 404
   db.session.delete(empresa)
   db.session.commit()
   return jsonify({"msg": "deleted with id:" + str(id)}), 200

@api.route('/company/<int:id>', methods=['PUT'])
def update_company(id):
   company = Empresa.query.get(id)
   if company is None:
    return jsonify ({"msg":"no company found with id:" + str(id)}), 404
   data = request.json
   email = data.get('email')
   address = data.get('address')
   city = data.get('city')
   if not email:
      return jsonify({"msg": "at least one field must be provided"}), 400
   if email:
      company.email = email
   if address:
      company.address = address
   if city:
      company.city = city
      db.session.commit()
      return jsonify ({"msg": "company with id updated successfully", "company": company.serialize()}), 200

@api.route('/service', methods=['GET'])
def get_services():
   data = Servicio.query.all()
   servicio = [servicio.serialize() for servicio in data]
   return jsonify({"msg":"Ok", "data":servicio}), 200

@api.route('/service/<int:id>', methods=['GET'])
def one_servicio(id):
   servicio = Servicio.query.get(id)
   if servicio is None:
        return jsonify({"msg": "No service found with id, the data base might be empty"}), 404
   print(servicio)
   return jsonify({"msg": "one user with id:" + str(id), "servicio":servicio.serialize()}), 200

@api.route('/service', methods=['POST'])
def create_service():
   servicio = request.json.get('servicio', None)
   descripcion = request.json.get('descripcion', None)
   precio = request.json.get('precio', None)
   if not servicio or not descripcion or not precio:
      return jsonify ({"msg":"All fields is required"}), 400
   check = Servicio.query.filter_by(servicio=servicio).first()
   if check:
      return jsonify ({"msg":"Service already exist, please login"}), 400
   new_service = Servicio(servicio=servicio, descripcion=descripcion, precio=precio)
   db.session.add(new_service)
   db.session.commit()
   return jsonify({"msg": "OK", "data": new_service.serialize()}), 201

@api.route('/service/<int:id>', methods=['DELETE'])
def delete_service(id):
   servicio = Servicio.query.get(id)
   if not servicio:
      return jsonify({"msg":"No service found with id:" + str(id)}), 404
   db.session.delete(servicio)
   db.session.commit()
   return jsonify({"msg": "deleted with id:" + str(id)}), 200

@api.route('/service/<int:id>', methods=['PUT'])
def update_service(id):
   servicio = Servicio.query.get(id)
   if servicio is None:
    return jsonify ({"msg":"no company found with id:" + str(id)}), 404
   data = request.json
   nombre_servicio = data.get('nombre_servicio')
   descripcion = data.get('descripcion')
   precio = data.get('precio')
   if not servicio:
      return jsonify({"msg": "at least one field must be provided"}), 400
   if servicio:
      servicio.nombre_servicio = nombre_servicio
   if descripcion:
      servicio.descripcion = descripcion
   if precio:
      servicio.precio = precio
      db.session.commit()
      return jsonify ({"msg": "company with id updated successfully", "company": servicio.serialize()}), 200


@api.route('/citas', methods=['GET'])
def get_cita():
   data = GestorCitas.query.all()
   citas = [citas.serialize() for citas in data]
   return jsonify ({"msg":"Ok", "data":citas}), 200

@api.route('/citas/<int:id>', methods=['GET'])
def one_cita(id):
   citas = GestorCitas.query.get(id)
   if citas is None:
        return jsonify({"msg": "No user found with id {id}, the data base might be empty"}), 404
   print(citas)
   return jsonify({"msg": "one user with id:" + str(id), "user":citas.serialize()}), 200

@api.route('/citas', methods=['POST'])
def create_cita():
   fecha = request.json.get('fecha', None)
   users = request.json.get('users', None)
   if not fecha or not users:
      return jsonify ({"msg":"All fields is required"}), 400
   check = GestorCitas.query.filter_by(fecha=fecha).first()
   if check:
      return jsonify ({"msg":"User already exist, please login"}), 400
   new_cita = GestorCitas(fecha=fecha, users=users, is_active=True)
   db.session.add(new_cita)
   db.session.commit()
   return jsonify({"msg": "OK", "data": new_cita.serialize()}), 201

@api.route('/citas/<int:id>', methods=['DELETE'])
def delete_cita(id):
   cita = GestorCitas.query.get(id)
   if not cita:
      return jsonify({"msg":"No company found with id:" + str(id)}), 404
   db.session.delete(cita)
   db.session.commit()
   return jsonify({"msg": "deleted with id:" + str(id)}), 200

@api.route('/citas/<int:id>', methods=['PUT'])
def update_cita(id):
   cita = GestorCitas.query.get(id)
   if cita is None:
    return jsonify ({"msg":"no date found with id:" + str(id)}), 404
   data = request.json
   fecha = data.get('fecha')
   if not fecha:
      return jsonify({"msg": "at least one field ( email or password ) must be provided"}), 400
   if fecha:
      cita.fecha = fecha

      db.session.commit()
      return jsonify ({"msg": "company with id {id} updated successfully", "company": cita.serialize()}), 200



@api.route('/register', methods=['POST'])
def register():
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    if not email or not password:
        return jsonify({"msg": "missing data"}), 400
    exist = Users.query.filter_by(email=email).first()
    if exist:
        return jsonify({"msg": "email taken"}), 400
    hashed_password = generate_password_hash(password)
    new_user = Users(email=email, password=hashed_password, is_active=True)
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
    exist = Users.query.filter_by(email=email).first()
    if not exist:
        return jsonify({"msg": "user doesnt exist"}), 400
    
    if check_password_hash(exist.password, password):
        token = create_access_token(identity=exist.id)
        return jsonify({"msg": 'ok', 'token': token, "user":exist.serialize()})
    else:
   
        return jsonify({"msg":"email/password wrong"})

@api.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    identity = get_jwt_identity()
    print('user identity->', identity)
    user = Users.query.get(id)
    return jsonify({"msg":"OK", "user": user.serialize()})