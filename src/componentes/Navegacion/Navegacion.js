import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navegacion.css'; //best practice: tener el css de cada módulo (en vez de un css general para toda la página), así se carga solamente lo que se necesita y más rápidamente

const Navegacion = () => {
    return ( 
        <nav className="navegacion">
            <NavLink to={'/nosotros'} activeClassName="activo">Nosotros</NavLink>
            <NavLink to={'/productos'} activeClassName="activo">Productos</NavLink>
            <NavLink to={'/contacto'} activeClassName="activo">Contacto</NavLink>
        </nav>
     );
}
 
export default Navegacion;