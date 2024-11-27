// filters.js

export const filterByAvailability = (vehicles, available) => {
    return vehicles.filter(vehicle => vehicle.disponible === available);
};

export const filterByModel = (vehicles, model) => {
    return vehicles.filter(vehicle => vehicle.modelo.toLowerCase().includes(model.toLowerCase()));
};

export const filterByYear = (vehicles, year) => {
    return vehicles.filter(vehicle => vehicle.año === year);
};

export const filterByBrand = (vehicles, brand) => {
    return vehicles.filter(vehicle => vehicle.marca.toLowerCase().includes(brand.toLowerCase()));
};

export const filterByCustomCriteria = (vehicles, criteria) => {
    // Ejemplo de múltiples criterios
    return vehicles.filter(vehicle => {
        return (
            (criteria.marca ? vehicle.marca.toLowerCase().includes(criteria.marca.toLowerCase()) : true) &&
            (criteria.año ? vehicle.año === criteria.año : true) &&
            (criteria.disponible !== undefined ? vehicle.disponible === criteria.disponible : true)
        );
    });
};
