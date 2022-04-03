import React, { Component } from "react";

class Seleccion extends Component {
  render() {
    return (
      <div className="seleccion">
        <h2>Selección previa: {this.props.seleccionPrevia}</h2>
        <h3>Anteriores: </h3>
        <ul>{this.props.historial}</ul>
      </div>
    );
  }
}

export default Seleccion;