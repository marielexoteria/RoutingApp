import React from 'react';
import { Route, Router } from 'react-router-dom';

//archivos creados por Auth0 (www.auth0.com)
import Callback from './Callback/Callback';
import Auth from '../Auth/Auth';
import history from '../history';

//componentes propios
import Header from './Header/Header';
import Navegacion from './Navegacion/Navegacion';
import Productos from './Productos/Productos';
import Nosotros from './Nosotros/Nosotros';
import Contacto from './Contacto/Contacto';
import SingleProducto from './SingleProducto/SingleProducto';

const auth = new Auth();

const handleAuthentication = ({location}) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
          <div className="contenedor">
              <Header />
              <Navegacion auth={auth} />
              
              <Route exact path="/" render={(props) => ( //componente cuyo contenido será visible cuando el usuario esté logueado. Esto se logra pasando el props y el auth={auth} {...props}
                  <Productos
                      auth={auth} {...props}
                  />
              )} />


              <Route exact path="/nosotros" component={Nosotros} /> 
              <Route exact path="/contacto" render={(props) => (
                    <Contacto 
                          auth={auth} {...props}
                    />
              )}/> 

              <Route exact path="/productos" render={(props) => (
                    <Productos 
                          auth={auth} {...props}
                    />
              )} /> 
              <Route exact path="/producto/:productoId" render={(props) => {
                    let idProducto=props.location.pathname.replace('/producto/', '')
                    return (
                        <SingleProducto
                            producto={this.state.productos[idProducto]}
                            key={idProducto}
                            auth={auth} {...props}
                        />
                    );
            
              }} />
            
              <Route path="/callback" render={(props) => {
                  handleAuthentication(props);
                  return <Callback {...props} /> 
              }}/>
          </div>
      </Router>
  );
}
