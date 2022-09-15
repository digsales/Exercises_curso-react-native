import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";

// import Primeiro from "./src/components/Primeiro";
// import CompPadrao, { Comp1, Comp2 } from "./src/components/Multi";
// import MinMax from "./src/components/MinMax";
// import NumAleatorio from "./src/components/Aleatorio";
// import Titulo from "./src/components/Titulo";
// import Botao from "./src/components/Botao";
// import Contador from "./src/components/Contador";
// import Pai from "./src/components/direta/Pai";
// import Pai from "./src/components/indireta/Pai";
// import ContadorV2 from "./src/components/contador/ContadorV2";
// import Diferenciar from "./src/components/Diferenciar";
import ParImpar from "./src/components/ParImpar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ParImpar num={1} />

      {/* 
      <Diferenciar />
      <ContadorV2 />
      <Pai />
      <Contador inicial={100} passo={13} />
      <Contador />
      <Botao />
      <Titulo
        principal="Cadastro Produto"
        secundario="Tela de Cadastro do Produto"
      />
      <Primeiro />
      <CompPadrao />
      <Comp1 />
      <Comp2 />
      <MinMax min={3} max={20} />
      <NumAleatorio min={3} max={20} /> 
      
      */}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});
