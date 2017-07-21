import React, { Component } from 'react';
import Segundo from './Segundo';
class Principal extends Component{
    render(){
        return(
        <div>
        <h2>Hola desde el componente principal</h2>
        <h2>React component</h2>
        <Segundo/>
        </div>
        );
    }
}

export default Principal;