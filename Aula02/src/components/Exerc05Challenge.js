/*
Objetivo: Desenvolver um layout simples para um aplicativo de lista de tarefas que inclua um cabeçalho, 
uma área para adicionar novas tarefas, e uma lista de tarefas adicionadas.

• Estrutura do Projeto

• Cabeçalho: Mostrará o título do aplicativo.

• Área de Entrada de Tarefa: Um campo de texto onde o usuário pode digitar o nome de uma nova tarefa 
e um botão para adicionar a tarefa à lista.

• Lista de Tarefas: Área onde as tarefas adicionadas serão listadas.
*/

import { StyleSheet, View, Text, TextInput, Button, ScrollView } from 'react-native';
import React, { useState } from 'react'

const Exerc05Challenge = () => {

    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    const addTask = () => {
        if (task.trim().length > 0) {
            setTaskList([...taskList, task]);
            setTask('');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Your Task List</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Add a Task"
                    value={task}
                    onChangeText={setTask} />
                <Button title="Add" onPress={addTask} />
            </View>

            <ScrollView style={styles.taskList}>
                {taskList.map((item, index) => (
                    <View key={index} style={styles.task}>
                        <Text>{item}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    },
    header: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'powderblue'
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        padding: 80,
        paddingBottom: 110
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 5
    },
    input: {
        flex: 1,
        borderBottomWidth: 1,
        marginRight: 10,
    },
    taskList: {
        flex: 1
    },
    task: {
        backgroundColor: 'powderblue',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5
    },
});

export default Exerc05Challenge
