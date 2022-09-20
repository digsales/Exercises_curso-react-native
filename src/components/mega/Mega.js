import React, { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";
import Estilo from "../estilo";

import MegaNumero from "./MegaNumero";

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

  // gerarNumeros = () => {
  //   const { qtddeNumeros } = this.state;
  //   const numeros = [];

  //   for (let i = 0; i < qtddeNumeros; i++) {
  //     numeros.push(this.gerarNumeroNaoContido(numeros));
  //   }

  //   numeros.sort((a, b) => a - b);

  //   this.setState({ numeros });
  // };

  exibirNumeros = () => {
    const nums = this.state.numeros;
    return nums.map((num) => {
      return <MegaNumero key={num} num={num} />;
    });
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
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {this.exibirNumeros()}
        </View>
      </>
    );
  }
}
