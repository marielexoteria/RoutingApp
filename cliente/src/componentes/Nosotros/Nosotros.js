import React, { Component } from 'react';
import './Nosotros.css'; //best practice: tener el css de cada módulo (en vez de un css general para toda la página), así se carga solamente lo que se necesita y más rápidamente


class Nosotros extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="/img/camisa_1.png" alt="imagen nosotros" />
                </div>

                <div className="contenido">
                    <h2>Sobre Nosotros</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id mi ut sapien sodales facilisis. Aenean venenatis vestibulum quam, nec commodo est luctus ac. Donec non neque nec magna malesuada facilisis ut a metus. Phasellus ullamcorper pretium sapien, sed lobortis purus efficitur at. Donec pellentesque eros a lobortis facilisis. Aenean lobortis eros sed mi pharetra venenatis. Phasellus semper ipsum id dolor tempor viverra. Nunc rutrum, libero sit amet mollis congue, libero felis vestibulum tellus, sit amet vestibulum lectus metus sit amet augue. Proin lorem dolor, convallis iaculis volutpat vel, vehicula vitae elit. Nullam eu auctor libero. Phasellus facilisis maximus sapien, ut ultricies augue varius et. Fusce in quam tempus, tincidunt tortor quis, feugiat leo. Nunc non tempus nisi, non faucibus nulla. Proin at est ullamcorper, condimentum ligula sollicitudin, lobortis elit. Maecenas quis metus ultricies, convallis metus vel, euismod erat.</p>
                </div>
            </div>
         );
    }
}
 
export default Nosotros;