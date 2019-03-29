import React, { Component } from 'react';
import {makeMainRoutes} from './componentes/routes';

//como makeMainRoutes es una función, hay que llamarla
const routes = makeMainRoutes();

class App extends Component {
  render() {
    return (
        <React.Fragment>
            {routes}
        </React.Fragment>
    );
  }
}

export default App;
