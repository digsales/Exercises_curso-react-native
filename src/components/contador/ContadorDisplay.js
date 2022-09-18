import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Estilo from "../estilo";

export default (props) => {
  return (
    <View style={styles.display}>
      <Text style={[Estilo.fontG, styles.displayText]}>{props.num}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    backgroundColor: "black",
    padding: 20,
    width: 240,
  },
  displayText: {
    color: "white",
  },
});
