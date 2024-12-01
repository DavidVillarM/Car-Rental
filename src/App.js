import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './componentes/Login';
import Catalogo from './componentes/Catalogo';
import Alquiler from './componentes/Alquiler';
import Devolucion from './componentes/Devolucion';
import Usuarios from './componentes/Usuarios';
import Clientes from './componentes/Clientes';
import InformeVehiculos from './componentes/InformeVehiculos';
import InformeVencidos from './componentes/InformeVencidos';
import Layout from './componentes/Layout';
import { saveToLocalStorage, getFromLocalStorage } from './utils/localStorage';
import { filterByBrand } from './utils/filter';





/*const nuevoVehiculo = { id: 3, marca: 'Ford', modelo: 'Focus' };

// Initialize vehicles properly
let vehicles = getFromLocalStorage('vehiculos') || []; // Ensure vehicles is an array
vehicles = [...vehicles, nuevoVehiculo];

// Save updated vehicles back to localStorage
saveToLocalStorage('vehiculos', vehicles);

const filteredVehicles = filterByBrand(vehicles, 'Toyota');
*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Catalogo />} />
          <Route path="alquiler" element={<Alquiler />} />
          <Route path="devolucion" element={<Devolucion />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="informes/vehiculos" element={<InformeVehiculos />} />
          <Route path="informes/vencidos" element={<InformeVencidos />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

