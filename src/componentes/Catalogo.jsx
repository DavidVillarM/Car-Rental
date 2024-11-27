import React, { useState, useEffect } from 'react';

function Catalogo() {
    const [vehiculos, setVehiculos] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('vehiculos')) || [];
        setVehiculos(data);
    }, []);

    return (
        <div>
            <h1>Catálogo de Vehículos</h1>
            <div>
                {vehiculos.map((vehiculo, index) => (
                    <div key={index}>
                        <img src={vehiculo.imagen} alt={vehiculo.modelo} width="150" />
                        <p>{vehiculo.marca} {vehiculo.modelo} - {vehiculo.color}</p>
                        <p>Año: {vehiculo.año}</p>
                        <p>Costo por día: ${vehiculo.costoDia}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Catalogo;
