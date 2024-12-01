import api from "../utils/api";

// Servicios de Alquileres
export const registerRental = (data) => api.post("/alquileres", data);
export const returnRental = (id, data) => api.put(`/alquileres/${id}/devolver`, data);
export const getRentalReports = (params) =>
    api.get("/alquileres/informes", { params });

export default {
    registerRental,
    returnRental,
    getRentalReports,
};
