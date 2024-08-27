import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exerc04 = ({ itens }) => {
    return (
        <View style={styles.container}>
            {itens.map((item, index) => (
                <Text key={index} style={StyleSheet.item}>
                    {item}
                </Text>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100,
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100,
    },
})

export default Exerc04