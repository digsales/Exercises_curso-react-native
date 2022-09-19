import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./Quadrado";

export default (props) => {
  return (
    <View style={styles.flexV3}>
      <Quadrado cor="#ff801a" lado={20} />
      <Quadrado cor="#50d1f6" lado={30} />
      <Quadrado cor="#dd22c1" lado={40} />
      <Quadrado cor="#8312ed" lado={50} />
      <Quadrado cor="#36c9a7" lado={60} />
    </View>
  );
};

const styles = StyleSheet.create({
  flexV3: {
    flexDirection: "row",
    height: 350,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "black",
  },
});
