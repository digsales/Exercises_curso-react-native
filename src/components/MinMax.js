import { Text } from "react-native";
import Estilo from "./estilo";

export default (props) => {
  <Text style={Estilo.fontG}>
    O valor de {props.max} é maior que o de {props.min}
  </Text>;
};
