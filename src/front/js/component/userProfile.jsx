import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';  // Ajusta la ruta según tu estructura de archivos

const UserProfile = () => {
    const { store, actions } = useContext(Context);  // Accede al store y las acciones desde el contexto

    // Obtén los datos del usuario desde el store
    const user = store.user;

    // Dispara la acción para obtener los datos del usuario al montar el componente
    useEffect(() => {
        actions.getUserData();  // Llama a la acción que obtiene los datos del usuario
    }, []);

    // Muestra un mensaje de carga mientras se obtienen los datos
    if (!user) return <div>Loading...</div>;

    // Muestra los datos del usuario si todo está correcto
    return (
        <div>
            <h1>User Profile</h1>
            {user && (
                <div>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    
                </div>
            )}
        </div>
    );
};

export default UserProfile;