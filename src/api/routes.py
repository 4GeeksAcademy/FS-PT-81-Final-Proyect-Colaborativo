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
CORS(api)


@api.route('/users', methods=['GET'])
def get_users():
   data = Users.query.all()
   users = [users.serialize() for users in data]
   return jsonify ({"msg":"Ok", "data":users}), 200

@api.route('/user', methods=['GET'])
@jwt_required()
def one_user():
   email = get_jwt_identity()
   exist = Users.query.filter_by(email=email).first()
   if exist is None:
        return jsonify({"msg": f"No user found with email {exist.email}, the database might be empty"}), 404
   return jsonify({"msg": "one user with email:" + str(email), "user": exist.serialize()}), 200

@api.route('/users', methods=['POST'])
def create_user():
   email = request.json.get('email', None)
   password = request.json.get('password', None)
   if not email or not password:
      return jsonify ({"msg":"All fields is required"}), 400
   check = Users.query.filter_by(email=email).first()
   if check:
      return jsonify ({"msg":"User already exist"}), 400
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

@api.route('/user/<int:id>', methods=['PUT'])
def update_user(id):
   user = Users.query.get(id)
   if user is None:
    return jsonify ({"msg":"no user found with id:" + str(id)}), 404
   data = request.json
   email = data.get('email')
   password  =data.get('password')
   name = data.get('name')
   if not email and not password and not name:
      return jsonify({"msg": "at least one field ( email or password ) must be provided"}), 400
   if email:
      user.email = email
   if password:
      user.password = password
   if name:
      user.name = name


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
      return jsonify ({"msg":"company already exists"}), 400
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
    # Obtener datos del JSON
    nombre_servicio = request.json.get('nombre_servicio', None)
    descripcion = request.json.get('descripcion', None)  # Opcional

    # Validar campo obligatorio
    if not nombre_servicio:
        return jsonify({"msg": "El campo 'nombre_servicio' es obligatorio"}), 400

    # Verificar si el servicio ya existe
    check = Servicio.query.filter_by(nombre_servicio=nombre_servicio).first()
    if check:
        return jsonify({"msg": "El servicio ya existe"}), 400

    # Crear el nuevo servicio
    new_service = Servicio(
        nombre_servicio=nombre_servicio,
        descripcion=descripcion  # Puede ser None
    )

    # Guardar en la base de datos
    db.session.add(new_service)
    db.session.commit()

    # Retornar respuesta
    return jsonify({"msg": "Servicio creado exitosamente", "data": new_service.serialize()}), 201

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
def one_cita(user_id):
   try:
        citas = GestorCitas.query.filter_by(user_id=user_id).all()
        if not citas:
            return jsonify({"msg": f"No se encontraron citas para el usuario con ID {user_id}"}), 404
        citas_serializadas = [cita.serialize() for cita in citas]
        return jsonify({"msg": "OK", "data": citas_serializadas}), 200
   except Exception as e:
        # Manejar errores inesperados
        return jsonify({"msg": "Error al obtener las citas", "error": str(e)}), 500


@api.route('/citas', methods=['POST'])
def create_cita():
    fecha = request.json.get('fecha', None)
    user_id = request.json.get('user_id', None)
    nombre_servicio = request.json.get('nombre_servicio', None)
    servicio_id = request.json.get('servicio_id', None)

    if not fecha or not user_id or not nombre_servicio or not servicio_id:
        return jsonify({"msg": "All fields are required"}), 400

    new_cita = GestorCitas(
        fecha=fecha,
        user_id=user_id,
        nombre_servicio=nombre_servicio,
        servicio_id=servicio_id
    )

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
    name = request.json.get('name', None)
    is_active = request.json.get('is_active', None)
    if not email or not password or not name:
        return jsonify({"msg": "missing data"}), 400
    exist = Users.query.filter_by(email=email).first()
    if exist:
        return jsonify({"msg": "email taken"}), 400
    hashed_password = generate_password_hash(password)
    new_user = Users(email=email, password=hashed_password, name=name, is_active=is_active)

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
    check_password_hash(exist.password, password)
    if not check_password_hash:
        return jsonify({"msg": "Incorrect password"}), 400
    token = create_access_token(identity=exist.email)
    return jsonify({"msg": 'ok', 'token': token, "user": exist.serialize()})

@api.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    identity = get_jwt_identity()
    print('user identity->', identity)
    user = Users.query.get(id)
    return jsonify({"msg":"OK", "user": user.serialize()})