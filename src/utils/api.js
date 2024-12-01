import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5087/api', // Cambiar si el puerto es diferente
    headers: {
        'Content-Type': 'application/json',
    },
});

// Usuarios
export const loginUser = (data) => api.post('/usuarios/login', data);
export const getUsers = () => api.get('/usuarios');
export const createUser = (data) => api.post('/usuarios', data);

// Vehículos
export const getAutos = () => api.get('/autos');
export const createAuto = (data) => api.post('/autos', data);
export const updateAuto = (id, data) => api.put(`/autos/${id}`, data);

// Clientes
export const getClients = () => api.get('/clientes');
export const createClient = (data) => api.post('/clientes', data);

// Alquileres
export const registerRental = (data) => api.post('/alquileres', data);
export const returnRental = (id, data) => api.put(`/alquileres/${id}/devolver`, data);
export const getRentalReports = (params) => api.get('/alquileres/informes', { params });


