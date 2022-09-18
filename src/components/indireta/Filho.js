import React from "react";
import { Button } from "react-native";
import Estilo from "../estilo";

export default (props) => {
  function gerarNumero(min, max) {
    const fator = max - min + 1;
    return parseInt(Math.random() * fator) + min;
  }

  return (
    <>
      <Button
        title="Executar"
        onPress={() => {
          const n = gerarNumero(props.min, props.max);
          props.funcao(n, "Número sorteado: ");
        }}
      />
    </>
  );
};
