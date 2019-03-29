import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Header/Header';
import Navegacion from './Navegacion/Navegacion';
import Productos from './Productos/Productos';
import Nosotros from './Nosotros/Nosotros';
import Contacto from './Contacto/Contacto';
import Error from './Error/Error';
import SingleProducto from './SingleProducto/SingleProducto';
import infoProductos from '../datos/datos.json';

class Router extends Component {
    state = {
        productos: [],
        terminoBusqueda: ''
    }

    componentWillMount() {
        this.setState({
            productos: infoProductos
        })
    }

    busquedaProducto = (busqueda) => { //busqueda es lo que se escribe en el campo
        if (busqueda.length > 3) {
            this.setState({
                terminoBusqueda: busqueda
            })

        } else { //para que el search keyword desaparezca del state
            this.setState({
                terminoBusqueda: ''
            })
        }
    }

    render() { 
        let productos = [...this.state.productos]; //copia del state para hacer la búsqueda filtrando según lo que se escriba en el campo de búsqueda
        let busqueda = this.state.terminoBusqueda;
        let resultadoBusqueda; //aquí se guardará el state modificado según la búsqueda

        if (busqueda !== '') { //el search keyword tiene más de 3 caracteres
            resultadoBusqueda = productos.filter(producto => (
                producto.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1
            ))
        } else { //el campo de búsqueda está vacío o el search keyword tiene 3 caracteres o menos
            resultadoBusqueda = productos;
        }

        return (  
            <BrowserRouter>
                <div className="contenedor">
                    <Header />
                    <Navegacion />

                    <Switch>
                        <Route exact path="/" render={() => (
                                <Productos 
                                    productos={resultadoBusqueda}
                                    busquedaProducto={this.busquedaProducto}
                                />
                        )} /> 
                        <Route exact path="/nosotros" component={Nosotros} /> 
                        <Route exact path="/productos" render={() => (
                                <Productos 
                                    productos={resultadoBusqueda}
                                    busquedaProducto={this.busquedaProducto}
                                />
                        )} /> 
                        <Route exact path="/producto/:productoId" render={(props) => {
                                let idProducto=props.location.pathname.replace('/producto/', '')
                                return (
                                    <SingleProducto
                                        producto={this.state.productos[idProducto]}
                                    />
                                );
            
                        } } />
                        <Route exact path="/contacto" component={Contacto} /> 
                        <Route component={Error} /> 
                    </Switch>
                </div>
            </BrowserRouter>
        );
        //exact path = para que se cargue el recurso en el path exacto.
        // path = "/" -> home page.
        //render = para pasar el catálogo de productos (todos los productos) por el state (para pasar componentes que tienen info dinámica, como por ej. una lista de productos o la info de un producto de la lista)
        //productos = {this.state.productos} -> pasando el state por medio de props
        //component = {nosotros} -> para pasar componentes que tienen info estática
        //Route component = {Error} para cuando alguien digite alguna dirección inválida, por eso no tiene path

        //<Header /> está fuera del Switch para que esté disponible en todas las páginas

        //producto = {this.state.producto[idProducto]} ==> para que se haga el filtrado y se muestre más info sobre el producto al que se le hizo click
    }
}
 
export default Router;