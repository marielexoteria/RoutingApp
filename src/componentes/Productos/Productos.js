import React, { Component } from 'react';
import Producto from '../Producto/Producto';
import Buscador from '../Buscador/Buscador';
import '../Productos/Productos.css'; //best practice: tener el css de cada módulo (en vez de un css general para toda la página), así se carga solamente lo que se necesita y más rápidamente

class Productos extends Component {

    render() { 
        return (  
            <div className="productos">
                <h2>Nuestros Productos</h2>
                <Buscador 
                    busqueda={this.props.busquedaProducto}
                />

                <ul className="lista-productos">
                    {Object.keys(this.props.productos).map(producto => (
                        <Producto
                            informacion={this.props.productos[producto]}
                            key={producto}
                        />
                    ))}

                </ul>
            </div>

        );
    }
}
 
export default Productos;