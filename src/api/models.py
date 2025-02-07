from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Users(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(250), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    is_active = db.Column(db.Boolean(), nullable=False)
    empresa_id = db.Column(db.Integer, db.ForeignKey('empresas.id')) 
    

    def __repr__(self):
        return f'<Users {self.email}>'
            

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name":self.name
            # do not serialize the password, it's a security breach
        }

class Empresa(db.Model):
    __tablename__ = 'empresas'
    id = db.Column(db.Integer, primary_key=True)
    servicio_id = db.Column(db.Integer, db.ForeignKey('servicios.id'))
    address = db.Column(db.String(200))
    city = db.Column(db.String(200))
    email = db.Column(db.String(120))
    

    def __repr__(self):
        return f'<Empresa {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "address": self.address,
            "city": self.city,
            "email": self.email,
        }

class Servicio(db.Model):
    __tablename__ = 'servicios'
    id = db.Column(db.Integer, primary_key=True)
    nombre_servicio = db.Column(db.String(100), nullable=False)  # Nombre es obligatorio
    descripcion = db.Column(db.String(250), nullable=True)  # Descripción es opcional

    def __repr__(self):
        return f'<Servicio {self.nombre_servicio}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre_servicio": self.nombre_servicio,
            "descripcion": self.descripcion,  # Incluir descripción solo si existe
        }

class GestorCitas(db.Model):
    __tablename__ = 'gestor_citas'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    servicio_id = db.Column(db.Integer, db.ForeignKey('servicios.id'))
    nombre_servicio = db.Column(db.String(120))
    fecha = db.Column(db.DateTime)

    # Relaciones
    user = db.relationship('Users', backref='gestor_citas', lazy=True)
    servicio = db.relationship('Servicio', backref='gestor_citas', lazy=True)

    def __repr__(self):
        return f'<GestorCitas {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "servicio_id": self.servicio_id,
            "nombre_servicio": self.nombre_servicio,
            "fecha": self.fecha.isoformat()
        }

        