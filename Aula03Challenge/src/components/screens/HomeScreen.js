import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {

    const users = [
        { id: 1, name: 'Matheus', age: 30, gender: 'male' },
        { id: 2, name: 'Maria', age: 26, gender: 'female' }
    ]

    return (
        <View style={styles.container}>
            {
                users.map((user) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Details', { user })}
                        key={user.id}
                        style={styles.userCard}>

                        <Text style={styles.userName}>
                            {user.name}
                        </Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },
    userCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginVertical: 10,
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    userName: {
        fontSize: 18,
    }
});

export default HomeScreen
