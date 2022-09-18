import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./Quadrado";

export default (props) => {
  return (
    <View style={styles.flexV1}>
      <Quadrado cor="#ff801a" />
      <Quadrado cor="#50d1f6" />
      <Quadrado cor="#dd22c1" />
      <Quadrado cor="#8312ed" />
      <Quadrado cor="#36c9a7" />
    </View>
  );
};

const styles = StyleSheet.create({
  flexV1: {
    backgroundColor: "black",
    justifyContent: "space-evenly",
    flex: 1,
  },
});
