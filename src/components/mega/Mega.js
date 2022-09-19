import React, { Component } from "react";
import { Text, TextInput } from "react-native";
import Estilo from "../estilo";

export default class Mega extends Component {
  state = {
    qtddeNumeros: this.props.qtddeNumeros,
  };

  alterarQtddeNumero = (qtd) => {
    this.setState({ qtddeNumeros: qtd });
  };

  render() {
    return (
      <>
        <Text style={Estilo.fontG}>
          Gerador de Mega-Sena
          {this.state.qtddeNumeros}
        </Text>
        <TextInput
          keyboardType={"numeric"}
          style={{ borderBottomWidth: 1 }}
          placeholder="Qtd de Numeros"
          value={`${this.state.qtddeNumeros}`}
          onChangeText={this.alterarQtddeNumero}
        />
      </>
    );
  }
}
