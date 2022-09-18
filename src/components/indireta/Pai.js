import React, { useState } from "react";
import { Text } from "react-native";
import Filho from "./Filho";
import Estilo from "../estilo";

export default (props) => {
  const [num, setNum] = useState("");
  const [texto, setTexto] = useState("Nenhum número sorteado");

  function exibirValor(numero, texto) {
    setNum(numero);
    setTexto(texto);
  }

  return (
    <>
      <Text style={Estilo.fontG}>
        {texto}
        {num}
      </Text>
      <Filho min={1} max={60} funcao={exibirValor} />
    </>
  );
};
