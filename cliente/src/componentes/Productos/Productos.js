import React, { Component } from 'react';
import Producto from '../Producto/Producto';
import Buscador from '../Buscador/Buscador';
import '../Productos/Productos.css'; //best practice: tener el css de cada módulo (en vez de un css general para toda la página), así se carga solamente lo que se necesita y más rápidamente

import axios from 'axios';

class Productos extends Component {
    state = {
        productos: [],
        terminoBusqueda: ''
    }

    componentWillMount() {
        this.queryAPI();
    }

    queryAPI = () => {
        //console.log(this.props.auth.getAccessToken());
        const {getAccessToken} = this.props.auth;
        const headers = {'Authorization': `Bearer ${getAccessToken()}`};
        const url = 'http://localhost:5000/productos';

        return axios.get(url, {headers})
            .then(respuesta => this.setState({productos: respuesta.data}));
    }

    busquedaProducto = (busqueda) => { //busqueda es lo que se escribe en el campo
        if (busqueda.length > 3) {
            //obtener copia del state
            let productos = [...this.state.productos];

            //filtrar
            let resultadoBusqueda;
            resultadoBusqueda = productos.filter(producto => (
                producto.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1
            ));

            //enviar al state los productos filtrados y la búsqueda
            this.setState({
                terminoBusqueda: busqueda,
                productos: resultadoBusqueda
            })

        } else { //para que el search keyword desaparezca del state
            this.setState({
                terminoBusqueda: ''
            }, () => { //callback para llamar la API y que se muestren todos los productos
                this.queryAPI();
            })
        }
    }

    login = () => {
       this.props.auth.login();
    }

    render() { 
        //destructing para extraer lo que se necesita del prop
        const {isAuthenticated} = this.props.auth;

        return (  
            <div className="productos">
                {
                    isAuthenticated()  && (
                        <React.Fragment>
                            <h2>Nuestros Productos</h2>
                            <Buscador 
                                busqueda={this.busquedaProducto}
                            />
                            <ul className="lista-productos">
                                {Object.keys(this.state.productos).map(producto => (
                                    <Producto
                                        informacion={this.state.productos[producto]}
                                        key={producto}
                                    />
                                ))}
                            </ul>
                        </React.Fragment>
                    )
                }

                
                {
                    !isAuthenticated() && (
                        <div className="contenedor-boton">
                            <p>Para ver el contenido debes iniciar sesión.</p>
                            <a className="boton" onClick={this.login}>Iniciar Sesión</a>
                        </div>

                    )
                }
            </div>

        );
    }
}
 
export default Productos;