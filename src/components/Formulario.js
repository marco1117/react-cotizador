import React, { Component } from "react";

class Formulario extends Component {
  state = {};

  // Refs para leer campos de un form
  marcaRef = React.createRef();
  anoRef = React.createRef();
  planBasicoRef = React.createRef();
  planCompletoRef = React.createRef();

  cotizarSeguro = e => {
    e.preventDefault();

    // Leer el plan
    const plan = this.planBasicoRef.current.checked ? "basico" : "completo";

    // Crear Objetos
    const infoAuto = {
      marca: this.marcaRef.current.value,
      ano: this.anoRef.current.value,
      plan: plan
    };

    // Enviar Datos
    this.props.cotizarSeguro(infoAuto);

    // Reset Form
    //e.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.cotizarSeguro}>
        <div className="campo">
          <label>Marca</label>
          <select name="marca" ref={this.marcaRef}>
            <option value="Americano">Americano</option>
            <option value="Europeo">Europeo</option>
            <option value="Asiatico">Asiatico</option>
          </select>
        </div>
        <br />

        <div className="campo">
          <label>Año</label>
          <select name="ano" ref={this.anoRef}>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
          </select>
        </div>
        <br />

        <div className="campo">
          <label>Plan:</label>
          <br />
          <br />
          <input
            type="radio"
            name="plan"
            value="Basico"
            ref={this.planBasicoRef}
          />{" "}
          Basico
          <br />
          <input
            type="radio"
            name="plan"
            value="Completo"
            ref={this.planCompletoRef}
          />{" "}
          Completo
        </div>

        <br />
        <br />

        <button type="submit">Cotizar</button>
      </form>
    );
  }
}

export default Formulario;
