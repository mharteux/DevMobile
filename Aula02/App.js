import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exerc01 from './src/components/Exerc01';
import Exerc02 from './src/components/Exerc02';
import Exerc03 from './src/components/Exerc03';
import Exerc04 from './src/components/Exerc04';
import Exerc05Challenge from './src/components/Exerc05Challenge';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Exerc01 /> */}
      {/* <Exerc02 /> */}
      {/* <Exerc03 /> */}
      {/* <Exerc04 /> */}
      <Exerc05Challenge />
      <StatusBar style="auto" />
    </View>
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
