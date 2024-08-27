import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exerc01 = ({ nome }) => {
    return (
        <View style={styles.container}>
            <Text>Olá, bem vindo {nome} </Text>
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

export default Exerc01