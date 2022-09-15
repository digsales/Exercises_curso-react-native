import React from "react";
import { Text } from "react-native";
import Estilo from "../estilo";

import produtos from "./produtos";

export default (props) => {
  function obterLista() {
    return produtos.map((p) => (
      <Text key={p.id}>
        {p.id}) {p.nome} tem R${p.preco.toFixed(2).replace(".", ",")}
      </Text>
    ));
  }

  return (
    <>
      <Text style={Estilo.fontG}>Lista de Produtos</Text>
      {obterLista()}
    </>
  );
};
