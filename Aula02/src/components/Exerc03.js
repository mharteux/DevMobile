import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exerc03 = () => {
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
        flexDirection: 'row',
        width: '100%'
    },
    box1: {
        height: 100,
        width: 50,
        backgroundColor: 'red'
    },
    box2: {
        flex: 1,
        height: 100,
        backgroundColor: 'blue'
    },
    box3: {
        height: 100,
        width: 50,
        backgroundColor: 'green'
    }
})

export default Exerc03