import api from "../utils/api";

// Servicios de Usuarios
export const loginUser = (data) => api.post("/usuarios/login", data);
export const getUsers = () => api.get("/usuarios");
export const createUser = (data) => api.post("/usuarios", data);

export default {
    loginUser,
    getUsers,
    createUser,
};
