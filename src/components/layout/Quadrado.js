import React from "react";
import { Text, View } from "react-native";

export default (props) => {
  const lado = props.lado;
  return (
    <>
      <View
        style={{
          height: lado,
          width: lado,
          backgroundColor: props.cor || "black",
        }}
      ></View>
    </>
  );
};
