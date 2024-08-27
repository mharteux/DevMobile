import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Exerc02 = () => {

    const [contador, setContador] = useState(0)

    function incrementar() {
        setContador(contador + 1)
    }

    function decrementar() {
        setContador(contador - 1)
    }

    return (
        <View style={styles.container}>
            <Button title='incrementar' onPress={incrementar} />
            <Button title='decrementar' onPress={decrementar} />
            <Text>O contador está em: {contador}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100
    }
})

export default Exerc02