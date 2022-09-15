import { Text } from "react-native";
import Estilo from "./estilo";

export default (props) => {
  let { min, max } = props;

  const aleatorio = parseInt(Math.random() * (max - (min + 1)) + (min + 1));

  return (
    <Text style={Estilo.fontM}>Este é um número aleatório {aleatorio}</Text>
  );
};
