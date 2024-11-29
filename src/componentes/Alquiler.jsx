import React, { useState, useEffect } from 'react';
import { getVehicles, getClients, registerRental } from './api';

function Alquiler() {
    const [autos, setVehiculos] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [seleccion, setSeleccion] = useState({ vehiculo: '', cliente: '', dias: 1 });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const vehiclesResponse = await getVehicles();
                const clientsResponse = await getClients();
                setVehiculos(vehiclesResponse.data);
                setClientes(clientsResponse.data);
            } catch (error) {
                console.error('Error al cargar datos:', error);
            }
        };

        fetchData();
    }, []);

    const handleAlquilar = async () => {
        try {
            await registerRental({
                vehiculoId: seleccion.vehiculo,
                clienteId: seleccion.cliente,
                dias: seleccion.dias,
            });
            alert('Alquiler registrado con éxito');
        } catch (error) {
            console.error('Error al registrar alquiler:', error);
            alert('Ocurrió un error, intente nuevamente');
        }
    };

    return (
        <div>
            <h1>Alquiler de Vehículos</h1>
            <select onChange={(e) => setSeleccion({ ...seleccion, vehiculo: e.target.value })}>
                <option value="">Seleccione un vehículo</option>
                {vehiculos.filter(v => v.disponible).map((vehiculo, index) => (
                    <option key={index} value={vehiculo.id}>
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
