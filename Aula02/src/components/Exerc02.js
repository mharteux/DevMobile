import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exerc02 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.box}>Ex02</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: 50,
        height: '50%',
        backgroundColor: 'red'
    }
})

export default Exerc02