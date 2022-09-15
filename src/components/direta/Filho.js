import React from "react";
import { Text } from "react-native";
import Estilo from "exercicios/src/components/estilo";

export default (props) => {
  return (
    <>
      <Text style={Estilo.fontG}>{props.a}</Text>
      <Text style={Estilo.fontG}>{props.b}</Text>
    </>
  );
};
