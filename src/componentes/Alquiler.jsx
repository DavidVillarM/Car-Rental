import React, { useState, useEffect } from 'react';

function Alquiler() {
    const [vehiculos, setVehiculos] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [seleccion, setSeleccion] = useState({ vehiculo: '', cliente: '', dias: 1 });

    useEffect(() => {
        setVehiculos(JSON.parse(localStorage.getItem('vehiculos')) || []);
        setClientes(JSON.parse(localStorage.getItem('clientes')) || []);
    }, []);

    const handleAlquilar = () => {
        alert('Alquiler registrado con éxito');
        // Actualizar datos en localStorage
    };

    return (
        <div>
            <h1>Alquiler de Vehículos</h1>
            <select onChange={(e) => setSeleccion({ ...seleccion, vehiculo: e.target.value })}>
                <option value="">Seleccione un vehículo</option>
                {vehiculos.filter(v => v.disponible).map((vehiculo, index) => (
                    <option key={index} value={vehiculo.chapa}>
                        {vehiculo.marca} {vehiculo.modelo}
                    </option>
                ))}
            </select>
            <select onChange={(e) => setSeleccion({ ...seleccion, cliente: e.target.value })}>
                <option value="">Seleccione un cliente</option>
                {clientes.map((cliente, index) => (
                    <option key={index} value={cliente.id}>{cliente.nombre}</option>
                ))}
            </select>
            <input 
                type="number" 
                min="1" 
                value={seleccion.dias} 
                onChange={(e) => setSeleccion({ ...seleccion, dias: e.target.value })} 
            />
            <button onClick={handleAlquilar}>Registrar Alquiler</button>
        </div>
    );
}

export default Alquiler;
