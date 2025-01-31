import React from "react";
import { useState, useEffect } from "react";

export const ProfileClient  = ({userId}) =>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    if (loading) return <p>Cargando perfil...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!user) return <p>No se encontró el usuario.</p>;

    return (
        <div>
            <h2>Perfil del Cliente</h2>
            <p><strong>Nombre:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Teléfono:</strong> {user.phone}</p>
        </div>
    );

}