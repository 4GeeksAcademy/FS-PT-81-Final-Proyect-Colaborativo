"""empty message

Revision ID: 38e356a84db2
Revises: 1ef3a28b8866
Create Date: 2025-01-08 19:33:23.105464

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '38e356a84db2'
down_revision = '1ef3a28b8866'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('empresas', schema=None) as batch_op:
        batch_op.add_column(sa.Column('servicio_id', sa.Integer(), nullable=True))
        batch_op.add_column(sa.Column('address', sa.String(length=200), nullable=True))
        batch_op.add_column(sa.Column('city', sa.String(length=200), nullable=True))
        batch_op.add_column(sa.Column('contact', sa.String(length=120), nullable=True))
        batch_op.drop_constraint('empresas_email_key', type_='unique')
        batch_op.create_foreign_key(None, 'servicios', ['servicio_id'], ['id'])
        batch_op.drop_column('password')
        batch_op.drop_column('email')

    with op.batch_alter_table('gestor_citas', schema=None) as batch_op:
        batch_op.add_column(sa.Column('empresa_id', sa.Integer(), nullable=True))
        batch_op.alter_column('fecha',
               existing_type=postgresql.TIMESTAMP(),
               nullable=True)
        batch_op.create_foreign_key(None, 'empresas', ['empresa_id'], ['id'])

    with op.batch_alter_table('servicios', schema=None) as batch_op:
        batch_op.add_column(sa.Column('descripcion', sa.String(length=250), nullable=True))
        batch_op.add_column(sa.Column('precio', sa.Integer(), nullable=True))
        batch_op.alter_column('servicio',
               existing_type=sa.VARCHAR(length=100),
               nullable=True)
        batch_op.drop_constraint('servicios_empresa_id_fkey', type_='foreignkey')
        batch_op.drop_column('empresa_id')

    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('empresa_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(None, 'empresas', ['empresa_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_column('empresa_id')

    with op.batch_alter_table('servicios', schema=None) as batch_op:
        batch_op.add_column(sa.Column('empresa_id', sa.INTEGER(), autoincrement=False, nullable=True))
        batch_op.create_foreign_key('servicios_empresa_id_fkey', 'empresas', ['empresa_id'], ['id'])
        batch_op.alter_column('servicio',
               existing_type=sa.VARCHAR(length=100),
               nullable=False)
        batch_op.drop_column('precio')
        batch_op.drop_column('descripcion')

    with op.batch_alter_table('gestor_citas', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.alter_column('fecha',
               existing_type=postgresql.TIMESTAMP(),
               nullable=False)
        batch_op.drop_column('empresa_id')

    with op.batch_alter_table('empresas', schema=None) as batch_op:
        batch_op.add_column(sa.Column('email', sa.VARCHAR(length=120), autoincrement=False, nullable=False))
        batch_op.add_column(sa.Column('password', sa.VARCHAR(length=80), autoincrement=False, nullable=False))
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.create_unique_constraint('empresas_email_key', ['email'])
        batch_op.drop_column('contact')
        batch_op.drop_column('city')
        batch_op.drop_column('address')
        batch_op.drop_column('servicio_id')

    # ### end Alembic commands ###
