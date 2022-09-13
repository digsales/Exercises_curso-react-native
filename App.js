import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Primeiro from './src/components/Primeiro';
import CompPadrao, { Comp1, Comp2 } from './src/components/Multi';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <Primeiro />

      <CompPadrao />
      <Comp1 />
      <Comp2 />
      
      <StatusBar style="auto" />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
