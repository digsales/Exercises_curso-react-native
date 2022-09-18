import React from "react";
import { Text, FlatList } from "react-native";
import Estilo from "../estilo";

import produtos from "./produtos";

export default (props) => {
  const produtoRender = ({ item: p }) => {
    return (
      <Text>
        {p.id}) {p.nome} tem R${p.preco.toFixed(2).replace(".", ",")}
      </Text>
    );
  };

  return (
    <>
      <Text style={Estilo.fontG}>Lista de Produtos V2</Text>
      <FlatList
        data={produtos}
        keyExtractor={(i) => `${i.id}`}
        renderItem={produtoRender}
      />
    </>
  );
};
