import { View, Text } from 'react-native'
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
        <View>
            <Text>Exerc02</Text>
        </View>
    )
}

export default Exerc02