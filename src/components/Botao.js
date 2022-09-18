import { Button } from "react-native";

export default (props) => {
  function cadastrar() {
    console.warn("Executado #01 com sucesso!");
  }

  return (
    <>
      <Button title="Executar #01" onPress={cadastrar} />
      <Button
        title="Executar #02"
        onPress={function () {
          console.warn("Executado #02 com sucesso!");
        }}
      />
      <Button
        title="Executar #03"
        onPress={() => console.warn("Executado #03 com sucesso!")}
      />
    </>
  );
};
