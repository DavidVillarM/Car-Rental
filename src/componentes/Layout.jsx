import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../styles/layout.css'; 

function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Catálogo</Link></li>
                    <li><Link to="/alquiler">Alquiler</Link></li>
                    <li><Link to="/devolucion">Devolución</Link></li>
                    <li><Link to="/usuarios">Usuarios</Link></li>
                    <li><Link to="/clientes">Clientes</Link></li>
                    <li><Link to="/informes/vehiculos">Informe Vehículos</Link></li>
                    <li><Link to="/informes/vencidos">Informe Vencidos</Link></li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
