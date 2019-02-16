import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return ( 
        <header>
            <Link to={'/'}>
                <img src="/img/logo.png" alt="Logo" />
            </Link> 
        </header>
     );
     //Link funciona como a href pero es más rápido y se usa importándolo desde React Router Dom. Al inspeccionar el código en el browser se ve como un a href
}
 
export default Header;