import React, { Component } from 'react';
import './Contacto.css'; //best practice: tener el css de cada módulo (en vez de un css general para toda la página), así se carga solamente lo que se necesita y más rápidamente

class Contacto extends Component {
    render() { 
        const {isAuthenticated} = this.props.auth;
        console.log(isAuthenticated());
        return ( 
            <React.Fragment>
                {isAuthenticated() && (
                    <form>
                        <legend>Formulario de Contacto</legend>
                        <div className="input-field">
                            <label>Nombre:</label>
                            <input type="text" placeholder="Fulano de Tal" />
                        </div>
            
                        <div className="input-field">
                            <label>E-mail:</label>
                            <input type="email" placeholder="fulano@fulanodetal.com" />
                        </div>
            
                        <div className="input-field">
                            <label>Mensaje:</label>
                            <textarea placeholder="Tu mensaje"></textarea>
                        </div>
            
                        <div className="input-field enviar">
                            <input type="submit" value="Enviar" />
                        </div>
                    </form>
                )}

                {
                    !isAuthenticated() && (
                        <div className="contenedor-boton">
                            <p>Para enviar un mensaje debes iniciar sesión.</p>
                            <a className="boton" onClick={this.login}>Iniciar Sesión</a>
                        </div>

                    )
                }
            </React.Fragment>
         );
    }
}
 
export default Contacto;