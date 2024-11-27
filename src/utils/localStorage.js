// localStorage.js

// Guardar datos en localStorage
export const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

// Recuperar datos de localStorage
export const getFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};

// Eliminar un elemento del localStorage
export const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
};

// Inicializar datos en localStorage si no existen
export const initializeLocalStorage = (key, defaultValue) => {
    if (!localStorage.getItem(key)) {
        saveToLocalStorage(key, defaultValue);
    }
};
