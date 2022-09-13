import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <Text>Primeiro app</Text>
      
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
