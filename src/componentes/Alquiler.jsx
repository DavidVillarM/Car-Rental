import React, { useState } from 'react';
import { registerRental } from '../utils/api';

const Alquiler = () => {
    const [formData, setFormData] = useState({ clientId: '', autoId: '', dias: 0 });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerRental(formData);
            alert('Alquiler registrado exitosamente');
        } catch (err) {
            console.error(err);
            alert('Error al registrar el alquiler');
        }
    };

    return (
        <div>
            <h2>Registrar Alquiler</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="clientId"
                    placeholder="ID del Cliente"
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="autoId"
                    placeholder="ID del Auto"
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="dias"
                    placeholder="Días"
                    onChange={handleInputChange}
                />
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default Alquiler;
