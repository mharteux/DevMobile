// Importações necessárias do React, React Native e Firebase
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth"; // Firebase para login com email/senha
import { auth } from "../config/firebaseConfig"; // Configuração do Firebase

// Tela de Login
// Permite que o usuário insira email e senha para autenticar.
// Redireciona o usuário para a tela principal após login bem-sucedido.
const LoginScreen = ({ navigation }) => {
  // Estados para capturar email e senha
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Realiza o login usando o Firebase Authentication.
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Sucesso", "Login realizado com sucesso!");
    } catch (error) {
      Alert.alert("Erro", error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo do aplicativo */}
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.subtitle}>Faça login para continuar</Text>

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

      {/* Botão de login */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Link para a tela de registro */}
      <TouchableOpacity onPress={() => navigation.navigate("Registro")}>
        <Text style={styles.registerText}>Criar Conta</Text>
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
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#343a40",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#6c757d",
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
  registerText: {
    fontSize: 16,
    color: "#007bff",
    textAlign: "center",
    marginTop: 15,
  },
});

export default LoginScreen;
