import api from "../utils/api";

// Servicios de Vehículos
export const getAutos = () => api.get("/autos");
export const createAuto = (data) => api.post("/autos", data);
export const updateAuto = (id, data) => api.put(`/autos/${id}`, data);

export default {
    getAutos,
    createAuto,
    updateAuto,
};
