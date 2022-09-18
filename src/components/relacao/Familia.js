import React from "react";
import { Text } from "react-native";

import Membro from "./Membro";

export default (props) => {
  return (
    <>
      <Text>[Inicio] Membros da família:</Text>
      {props.children}
      <Text>[Fim] Membros da família</Text>
    </>
  );
};
