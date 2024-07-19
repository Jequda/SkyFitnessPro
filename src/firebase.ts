import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updatePassword,
} from "firebase/auth";

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
// const db = ref(getDatabase(app));
export const auth = getAuth(app);

const CourseEndpoint = "/courses.json";
const WorkoutsEndpoint = "/workouts.json";
const baseUrl =
  "https://fitness-pro-team3-default-rtdb.europe-west1.firebasedatabase.app";

  export const getCourses = async () => {
    const response = await fetch(baseUrl + CourseEndpoint)
      const data = await response.json();
      console.log(data)
      
      return data
  };

export const getWorkouts = async () => {
  fetch(baseUrl + WorkoutsEndpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log("Data retrieved from Firebase:", data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  }
export const loginUser = async ({
  login,
  password,
}: {
  login: string;
  password: string;
}) => {
  try {
    const data = await signInWithEmailAndPassword(auth, login, password);
    return data;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    console.log(error);
  }
};

export const signupUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};

export const updatePasswordUser = async ({
  password,
}: {
  password: string;
}) => {
  try {
    if (auth.currentUser) {
      const data = await updatePassword(auth.currentUser, password);
      return data;
    } else {
      throw new Error("NOT_USER");
    }
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};