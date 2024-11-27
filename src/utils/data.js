// data.js

export const initialVehicles = [
    {
        id: 1,
        imagen: 'https://via.placeholder.com/150',
        marca: 'Toyota',
        modelo: 'Corolla',
        año: 2020,
        color: 'Rojo',
        cantAsientos: 5,
        chapa: 'ABC-123',
        costoDia: 50,
        disponible: true,
    },
    {
        id: 2,
        imagen: 'https://via.placeholder.com/150',
        marca: 'Honda',
        modelo: 'Civic',
        año: 2019,
        color: 'Azul',
        cantAsientos: 5,
        chapa: 'DEF-456',
        costoDia: 45,
        disponible: true,
    },
];

export const initialUsers = [
    { id: 1, usuario: 'admin', password: '1234', rol: 'admin' },
    { id: 2, usuario: 'user', password: 'abcd', rol: 'user' },
];

export const initialClients = [
    { id: 1, nombre: 'Juan Pérez', telefono: '123456789', email: 'juan@example.com' },
    { id: 2, nombre: 'María Gómez', telefono: '987654321', email: 'maria@example.com' },
];
