import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem('usuarios')) || [];
        const user = users.find(u => u.usuario === username && u.password === password);

        if (user) {
            alert('Inicio de sesión exitoso');
            window.location.href = '/';
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input 
                type="text" 
                placeholder="Usuario" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Contraseña" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleLogin}>Iniciar Sesión</button>
        </div>
    );
}

export default Login;
