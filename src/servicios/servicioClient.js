import api from "../utils/api";

// Servicios de Clientes
export const getClients = () => api.get("/clientes");
export const createClient = (data) => api.post("/clientes", data);

export default {
    getClients,
    createClient,
};
