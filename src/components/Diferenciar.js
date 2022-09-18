import React from "react";
import { Text, Platform } from "react-native";
import Estilo from "./estilo";

export default () => {
  if (Platform.OS === "android") {
    return (
      <>
        <Text style={Estilo.fontG}>Android</Text>
      </>
    );
  } else if (Platform.OS === "ios") {
    return (
      <>
        <Text style={Estilo.fontG}>IOS</Text>
      </>
    );
  } else {
    return (
      <>
        <Text style={Estilo.fontG}>Eita</Text>
      </>
    );
  }
};
