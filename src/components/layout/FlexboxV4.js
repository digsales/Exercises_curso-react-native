import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./Quadrado";

export default (props) => {
  return (
    <View style={styles.flexV4}>
      <View style={styles.V0} />
      <View style={styles.V1} />
      <View style={styles.V2} />
    </View>
  );
};

const styles = StyleSheet.create({
  flexV4: {
    flexGrow: 1,
    width: 100,
    backgroundColor: "black",
  },
  V0: {
    backgroundColor: "#36c9a7",
    height: 0,
  },
  V1: {
    backgroundColor: "#ff801a",
    flexGrow: 2,
  },
  V2: {
    backgroundColor: "#dd22c1",
    flexGrow: 1,
  },
});
