// src/config/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwApgrPj8MKRIiv0Ir6ZEokOEeh_bXwxU",
  authDomain: "kwik-e-mart-6e93b.firebaseapp.com",
  projectId: "kwik-e-mart-6e93b",
  storageBucket: "kwik-e-mart-6e93b.firebasestorage.app",
  messagingSenderId: "217131972717",
  appId: "1:217131972717:web:3410a42a105d5437dea764",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
