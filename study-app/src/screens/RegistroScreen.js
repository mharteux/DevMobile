// Importações necessárias do React, React Native e Firebase
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

// Tela de Registro
// Permite que novos usuários criem uma conta com email e senha.
// Redireciona para a tela de login após o registro bem-sucedido.
const RegistroScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Função para registrar um novo usuário.
  // Usa o método `createUserWithEmailAndPassword` do Firebase Authentication.
  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password); // Cria o usuário no Firebase
      Alert.alert("Sucesso", "Conta criada com sucesso!");
      navigation.goBack(); // Retorna à tela de login após o registro
    } catch (error) {
      Alert.alert("Erro", error.message); // Exibe mensagens de erro
    }
  };

  return (
    <View style={styles.container}>
      {/* Título da tela */}
      <Text style={styles.title}>Criar Conta</Text>

      {/* Campo de email */}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Campo de senha */}
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        autoCapitalize="none"
      />

      {/* Botão de registro */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilização da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#343a40",
  },
  input: {
    height: 50,
    borderColor: "#ced4da",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#ffffff",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default RegistroScreen;
