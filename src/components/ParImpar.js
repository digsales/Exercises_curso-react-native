import React from "react";
import { Text, View } from "react-native";
import Estilo from "./estilo";

export default ({ num = 0 }) => {
  return (
    <View>
      <Text style={Estilo.fontG}>O resultado é:</Text>
      {num % 2 === 0 ? (
        <Text style={Estilo.fontG}>Par</Text>
      ) : (
        <Text style={Estilo.fontG}>Impar</Text>
      )}

      {/* <Text style={Estilo.fontG}>{num % 2 === 0 ? "Par" : "Impar"}</Text> */}
    </View>
  );

  // if (num % 2 === 0) {
  //   return (
  //     <View>
  //       <Text style={Estilo.fontG}>O resultado é:</Text>
  //       <Text style={Estilo.fontG}>Par</Text>
  //     </View>
  //   );
  // } else {
  //   return (
  //     <View>
  //       <Text style={Estilo.fontG}>O resultado é:</Text>
  //       <Text style={Estilo.fontG}>Impar</Text>
  //     </View>
  //   );
  // }
};
