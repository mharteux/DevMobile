import { View, Text } from 'react-native'
import React from 'react'
//import Exerc01 from './src/components/Exerc01'
//import Exerc02 from './src/components/Exerc02';
//import Exerc03 from './src/components/Exerc03';
import Exerc04 from './src/components/Exerc04';

const App = () => {
  const itens = ['Mamão', 'Leite', 'Pão', 'Morango']

  return (
    <View>
      {/*<Exerc01 nome='Matheus' />*/}
      {/*<Exerc02 />*/}
      {/*<Exerc03 />*/}
      <Exerc04 itens={itens} />
    </View>
  );
}

export default App
