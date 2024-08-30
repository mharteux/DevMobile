import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exerc04 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}><Text>1</Text></View>
            <View style={styles.box2}><Text>2</Text></View>
            <View style={styles.box3}><Text>3</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%'
    },
    box1: {
        flex: 1,
        backgroundColor: 'red',
        width: 100
    },
    box2: {
        flex: 1,
        backgroundColor: 'blue',
        width: 100
    },
    box3: {
        flex: 1,
        backgroundColor: 'green',
        width: 100
    }
})

export default Exerc04