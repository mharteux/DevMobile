// Importações necessárias do React e React Native
import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useContext } from "react";
import CartoesEstudoContext from "../contexts/CartoesEstudoContext";

// Tela para exibir as tarefas próximas do vencimento (dentro de 15 dias).
// Filtra e exibe apenas os cartões cuja data de término está próxima.
const TarefasVencimentoProximoScreen = () => {
  // Obtém os dados do contexto de cartões
  const { cartoes } = useContext(CartoesEstudoContext);

  // Data atual
  const hoje = new Date();

  // Filtra os cartões cuja data de término está dentro dos próximos 15 dias.
  const cartoesVencimentoProximo = cartoes.filter((cartao) => {
    const dataTermino = new Date(cartao.dataTermino);
    const diferencaDias = (dataTermino - hoje) / (1000 * 60 * 60 * 24);
    return diferencaDias >= 0 && diferencaDias <= 15;
  });

  // Renderiza os cartões da lista.
  // Exibe título, status e data de término formatada.
  const renderizarCartao = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.titulo}</Text>
      <Text>Status: {item.status}</Text>
      <Text>
        Data/Hora de Término: {new Date(item.dataTermino).toLocaleString()}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Cabeçalho da tela */}
      <Text style={styles.header}>Tarefas a Vencer nos Próximos 15 Dias</Text>

      {/* Lista de cartões filtrados */}
      <FlatList
        data={cartoesVencimentoProximo}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderizarCartao}
      />
    </View>
  );
};

// Estilização da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f0f8ff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    margin: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default TarefasVencimentoProximoScreen;
