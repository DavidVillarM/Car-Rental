import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Catalogo = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
    // Hacer una solicitud GET a la API de CarRentalAPI
        axios.get('http://localhost:5000/api/vehicles')  // Asegúrate de que esta URL sea correcta
        .then(response => {
            setVehicles(response.data);
        })
        .catch(error => {
            console.error('Hubo un error al obtener los vehículos:', error);
        });
    }, []);

    return (
    <div>
        <h1>Catálogo de Vehículos</h1>
        <div>
        {vehicles.map((vehicle) => (
            <div key={vehicle.id}>
                <img src={vehicle.imageUrl} alt={vehicle.modelo} />
                <p>{vehicle.marca} {vehicle.modelo}</p>
                <p>{vehicle.color}</p>
                <p>{vehicle.year}</p>
                <p>{vehicle.pricePerDay}</p>
            </div>
            ))}
        </div>
    </div>
    );
};

export default Catalogo;
