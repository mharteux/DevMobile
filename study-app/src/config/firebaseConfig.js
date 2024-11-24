// Importações necessárias do Firebase
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Serviço de autenticação do Firebase
import { getFirestore } from "firebase/firestore"; // Banco de dados Firestore
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
} from "@env"; // Variáveis de ambiente para manter informações sensíveis protegidas

// Configurações do Firebase extraídas das variáveis de ambiente
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
};

// Inicializa o Firebase apenas se não houver uma instância já inicializada
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

// Exporta o serviço de autenticação e o banco de dados Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
