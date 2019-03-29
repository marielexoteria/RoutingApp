import React, { Component } from 'react';
import './SingleProducto.css'; //best practice: tener el css de cada módulo (en vez de un css general para toda la página), así se carga solamente lo que se necesita y más rápidamente

const SingleProducto = (props) => {
    if (!props) return null; //en caso de que alguien manualmente escriba un product ID que no exista, no habrá info para mandar en el prop porque el key/ID no existe
    //destructuring del prop producto (enviado desde el componente padre Router.js) para desplegar la info correspondiente
    const {imagen, nombre, precio, descripcion} = props.producto;

    

    return (  
        <div className="info-producto">
            <div className="imagen">
                <img src={`/img/${imagen}.png`} alt={nombre} />
            </div>

            <div className="info">
                <h2>{nombre}</h2>
                <p className="precio">$ {precio}</p>
                <p>{descripcion}</p>
            </div>
        
        </div>
    );
}
 
export default SingleProducto;