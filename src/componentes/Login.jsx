import React, { useState } from 'react';
import { loginUser } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(formData);
            localStorage.setItem('token', response.data.token);
            navigate('/catalogo');
        } catch (err) {
            setError('Credenciales inválidas');
        }
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Usuario"
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    onChange={handleInputChange}
                />
                <button type="submit">Ingresar</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Login;
