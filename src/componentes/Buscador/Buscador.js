import React, { Component } from 'react';
import './Buscador.css'; //best practice: tener el css de cada módulo (en vez de un css general para toda la página), así se carga solamente lo que se necesita y más rápidamente

class Buscador extends Component {
    //método para hacer la búsqueda mientras se escribe la info en el campo de búsqueda, ayudado por el onChange en el formulario
    leerDatos = (e) => {
        //search keyword
        const termino = e.target.value;

        //enviando por props al componente principal (Router.js)
        this.props.busqueda(termino);
    }

    render() { 
        return (  
            <form className="buscador">
                <input type="text" placeholder="Búsqueda" onChange={this.leerDatos} />
            </form>
        );
    }
}
 
export default Buscador;