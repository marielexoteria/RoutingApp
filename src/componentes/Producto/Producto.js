import React from 'react';
import {Link} from 'react-router-dom';

const Producto = (props) => {
    //destructuring del prop informacion, que se manda desde el componente padre Productos.js
    const {imagen, nombre, precio, id} = props.informacion;

    return ( 
        <li>
            <img src={`img/${imagen}.png`} alt={nombre} />
            <p>{nombre} <span>$ {precio}</span></p>
            <Link to={`/producto/${id}`}>Más Info</Link>

        </li>
     );
     //Link funciona como a href pero es más rápido y se usa importándolo desde React Router Dom. Al inspeccionar el código en el browser se compila como un a href, pero con el id en el URL. Para agregar alguna class o algún ID para darle estilo con css, se agrega className ="" y el nombre de la clase, o id="" y el nombre del ID
}
 
export default Producto;