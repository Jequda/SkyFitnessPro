import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { collection, getDocs, getFirestore } from "firebase/firestore";

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
const db = ref(getDatabase(app));
// const db = getFirestore(app);

// Конкретный путь к вашим данным. Например, /courses.json
const endpoint = "/courses.json";

// URL для запроса
// const url = collection(db, "courses");
const baseUrl =
  "https://fitness-pro-team3-default-rtdb.europe-west1.firebasedatabase.app";

export const getCourses = async () => {
  const result: any[] = [];

  try {
    const q = await get(db);
    // debugger;
    // const documents = await getDocs(q);

    q.forEach((e) => {
      result.push(q.child("courses"));
    });
  } catch (e) {
    console.error(e);
  }

  return result;
};

// export const getCourses = async () => {
//   fetch(baseUrl + "/courses.json")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Data retrieved from Firebase:", data);
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
// };

// export async function getCourses() {
//   const res = await fetch(db + endpoint, {
//     method: "GET",
//     // cache: "no-cache",
//   });

//   if (!res.ok) {
//     throw new Error("Ошибка при получении данных");
//   }

//   const data = await res.json();

//   return data;
// }
