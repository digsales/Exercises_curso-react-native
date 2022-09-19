import React, { Component } from "react";
import { Button, Text, TextInput } from "react-native";
import Estilo from "../estilo";

export default class Mega extends Component {
  state = {
    qtddeNumeros: this.props.qtddeNumeros,
    numeros: [],
  };

  alterarQtddeNumero = (qtd) => {
    this.setState({ qtddeNumeros: +qtd });
  };

  gerarNumeroNaoContido = (num) => {
    const novo = parseInt(Math.random() * 60) + 1;
    return num.includes(novo) ? this.gerarNumeroNaoContido(num) : novo;
  };

  gerarNumeros = () => {
    const numeros = Array(this.state.qtddeNumeros)
      .fill()
      .reduce((n) => [...n, this.gerarNumeroNaoContido(n)], [])
      .sort((a, b) => a - b);
    this.setState({ numeros });
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
        <Button title="Gerar números" onPress={this.gerarNumeros} />
        <Text>{this.state.numeros.join(", ")}</Text>
      </>
    );
  }
}
