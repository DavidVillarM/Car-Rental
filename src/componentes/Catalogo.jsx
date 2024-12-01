import React, { useState, useEffect } from 'react';
import { getAutos } from '../utils/api';

const Catalogo = () => {
    const [autos, setAutos] = useState([]);

    useEffect(() => {
        const fetchAutos = async () => {
            try {
                const response = await getAutos();
                setAutos(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchAutos();
    }, []);

    return (
        <div>
            <h2>Catálogo de Vehículos</h2>
            <div>
                {autos.map((auto) => (
                    <div key={auto.id}>
                        <h3>{auto.marca} {auto.modelo}</h3>
                        <p>Año: {auto.anio}</p>
                        <p>Color: {auto.color}</p>
                        <p>Costo por día: ${auto.costoPorDia}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalogo;

