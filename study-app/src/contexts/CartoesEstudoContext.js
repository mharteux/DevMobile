// Importações necessárias
import React, { createContext, useState, useEffect, useContext } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { AuthContext } from "./AuthContext";

// Criação do contexto para cartões de estudo
const CartoesEstudoContext = createContext();

// Provedor que gerencia os cartões de estudo.
export const ProvedorCartoesEstudo = ({ children }) => {
  // Estado para armazenar a lista de cartões
  const [cartoes, setCartoes] = useState([]);
  // Acesso ao contexto de autenticação
  const { user } = useContext(AuthContext);

  // Hook useEffect para carregar os cartões sempre que o usuário logado mudar.
  useEffect(() => {
    if (user) {
      carregarCartoes();
    }
  }, [user]);

  // Função para carregar os cartões do Firestore.
  // Busca apenas os cartões associados ao UID do usuário atual.
  const carregarCartoes = async () => {
    try {
      const q = query(collection(db, "cartoes"), where("uid", "==", user.uid)); // Filtra cards pelo UID do usuário
      const cartoesSnapshot = await getDocs(q);
      const cartoesList = cartoesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCartoes(cartoesList);
    } catch (error) {
      console.error("Erro ao carregar cartões:", error);
    }
  };

  // Função para adicionar um novo cartão ao Firestore.
  const adicionarCartao = async (cartao) => {
    try {
      const novoCartao = { ...cartao, uid: user.uid }; // Adiciona o UID do usuário
      const docRef = await addDoc(collection(db, "cartoes"), novoCartao); // Salva no Firestore
      setCartoes([...cartoes, { id: docRef.id, ...novoCartao }]); // Atualiza a lista local
      console.log("Cartão adicionado ao Firestore:", novoCartao);
    } catch (error) {
      console.error("Erro ao adicionar cartão:", error);
    }
  };

  // Função para atualizar um cartão existente.
  const atualizarCartao = async (id, atualizacoes) => {
    try {
      const cartaoRef = doc(db, "cartoes", id);
      await updateDoc(cartaoRef, atualizacoes); // Atualiza o documento no Firestore
      setCartoes(
        cartoes.map((cartao) =>
          cartao.id === id ? { ...cartao, ...atualizacoes } : cartao
        )
      );
      console.log("Cartão atualizado:", { id, ...atualizacoes });
    } catch (error) {
      console.error("Erro ao atualizar cartão:", error);
    }
  };

  // Função para excluir um cartão do Firestore.
  const excluirCartao = async (id) => {
    try {
      await deleteDoc(doc(db, "cartoes", id)); // Remove do Firestore
      setCartoes(cartoes.filter((cartao) => cartao.id !== id)); // Remove localmente
      console.log("Cartão excluído com ID:", id);
    } catch (error) {
      console.error("Erro ao excluir cartão:", error);
    }
  };

  // O componente `Provider` fornece as seguintes funcionalidades:
  // `cartoes`: Lista de cartões carregados.
  // `adicionarCartao`: Função para criar novos cartões.
  // `atualizarCartao`: Função para editar cartões existentes.
  // `excluirCartao`: Função para deletar cartões.
  return (
    <CartoesEstudoContext.Provider
      value={{ cartoes, adicionarCartao, atualizarCartao, excluirCartao }}
    >
      {children}
    </CartoesEstudoContext.Provider>
  );
};

// Exporta o contexto para ser usado nos componentes
export default CartoesEstudoContext;
