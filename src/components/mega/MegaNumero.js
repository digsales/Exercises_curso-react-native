import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Estilo from "../estilo";

export default ({ num }) => {
  return (
    <View style={styles.container}>
      <Text style={[Estilo.fontG, styles.num]}>{num}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: 50,
    height: 50,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  num: {
    color: "white",
  },
});
