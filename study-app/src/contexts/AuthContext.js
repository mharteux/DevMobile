// Importações necessárias
import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig"; // Importando o `auth` do arquivo de configuração

// Criação do contexto de autenticação
export const AuthContext = createContext();

// Componente que fornece dados e funções relacionadas à autenticação.
export const AuthProvider = ({ children }) => {
  // Estado que guarda o usuário autenticado (ou null se não autenticado)
  const [user, setUser] = useState(null);
  // Estado para indicar se a autenticação ainda está carregando
  const [loading, setLoading] = useState(true);

  // Hook useEffect para monitorar o estado de autenticação.
  // O Firebase tem um método `onAuthStateChanged` que detecta alterações no login/logout.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    // Cleanup: Remove o observador ao desmontar o componente
    return unsubscribe;
  }, []);

  // Função para logout do usuário.
  // Chama o método `signOut` do Firebase.
  const logout = async () => {
    try {
      await signOut(auth); // Firebase desconecta o usuário
      setUser(null); // Limpa o estado local
    } catch (error) {
      console.error("Erro ao fazer logout:", error); // Mostra erros no console
    }
  };

  // O componente `Provider` envolve toda a aplicação e fornece os seguintes dados:
  // `user`: Usuário autenticado (ou null).
  // `loading`: Indica se os dados de autenticação ainda estão carregando.
  // `logout`: Função para desconectar o usuário.
  return (
    <AuthContext.Provider value={{ user, setUser, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
