"""empty message

Revision ID: 7a8c2ee6bb47
Revises: 
Create Date: 2025-02-05 10:55:30.664524

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7a8c2ee6bb47'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('servicios',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre_servicio', sa.String(length=100), nullable=True),
    sa.Column('descripcion', sa.String(length=250), nullable=True),
    sa.Column('precio', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('empresas',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('servicio_id', sa.Integer(), nullable=True),
    sa.Column('address', sa.String(length=200), nullable=True),
    sa.Column('city', sa.String(length=200), nullable=True),
    sa.Column('email', sa.String(length=120), nullable=True),
    sa.ForeignKeyConstraint(['servicio_id'], ['servicios.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=250), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('empresa_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['empresa_id'], ['empresas.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('gestor_citas',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('empresa_id', sa.Integer(), nullable=True),
    sa.Column('servicio_id', sa.Integer(), nullable=True),
    sa.Column('fecha', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['empresa_id'], ['empresas.id'], ),
    sa.ForeignKeyConstraint(['servicio_id'], ['servicios.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('gestor_citas')
    op.drop_table('users')
    op.drop_table('empresas')
    op.drop_table('servicios')
    # ### end Alembic commands ###
