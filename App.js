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
// import ParImpar from "./src/components/ParImpar";
// import Familia from "./src/components/relacao/Familia";
// import Membro from "./src/components/relacao/Membro";
// import UsuarioLogado from "./src/components/UsuarioLogado";
// import ListaProdutosV2 from "./src/components/produtos/ListaProdutosV2";
// import DigiteSeuNome from "./src/components/DigiteSeuNome";
// import Quadrado from "./src/components/layout/Quadrado";
// import FlexboxV1 from "./src/components/layout/FlexboxV1";
// import FlexboxV2 from "./src/components/layout/FlexboxV2";
// import FlexboxV3 from "./src/components/layout/FlexboxV3";
// import FlexboxV4 from "./src/components/layout/FlexboxV4";
import Mega from "./src/components/mega/Mega";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Mega qtddeNumeros={7} />

      {/* 
      <FlexboxV4 />
      <FlexboxV3 />
      <FlexboxV2 />
      <FlexboxV1 />
      <DigiteSeuNome />
      <ListaProdutosV2 />
      <UsuarioLogado usuario={{ nome: "Gui", email: "gui@gui.com" }} />
      <Familia>
        <Membro nome="Bia" sobrenome="Arruda" />
        <Membro nome="Carlos" sobrenome="Arruda" />
      </Familia>
      <Familia>
        <Membro nome="Ana" sobrenome="Silva" />
        <Membro nome="Julia" sobrenome="Silva" />
        <Membro nome="Guilherme" sobrenome="Silva" />
        <Membro nome="Rebecca" sobrenome="Silva" />
      </Familia>
      <ParImpar num={1} />
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
    paddingTop: 50,
  },
});
