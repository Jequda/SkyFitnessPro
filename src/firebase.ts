import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDEZ0a2W2aKtWZS0BLkbkukrl4WvUDQLCM",
  authDomain: "fitness-pro-team3.firebaseapp.com",
  databaseURL:
    "https://fitness-pro-team3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fitness-pro-team3",
  storageBucket: "fitness-pro-team3.appspot.com",
  messagingSenderId: "974091467525",
  appId: "1:974091467525:web:d8055b6305f4354315d56c",
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
