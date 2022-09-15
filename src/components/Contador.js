import React, { useState } from "react";
import { Text, Button, View } from "react-native";

import Estilo from "./estilo";

export default ({ inicial = 0, passo = 1 }) => {
  const [numero, setNumero] = useState(inicial);

  const inc = () => setNumero(numero + passo);
  const dec = () => setNumero(numero - passo);

  return (
    <>
      <Text style={Estilo.fontG}>{numero}</Text>
      <View style={{ flexDirection: "row" }}>
        <Button title="    -    " onPress={dec} />
        <Button title="    +    " onPress={inc} />
      </View>
    </>
  );
};
