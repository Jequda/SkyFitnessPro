import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updatePassword,
} from "firebase/auth";
import { getDatabase, ref, set, remove, get, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAgYIN5lzGJhoDtnOth5SDxMmZE3Cbbguw",
  authDomain: "skyfitnesspro-new.firebaseapp.com",
  databaseURL:
    "https://skyfitnesspro-new-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "skyfitnesspro-new",
  storageBucket: "skyfitnesspro-new.appspot.com",
  messagingSenderId: "460967682255",
  appId: "1:460967682255:web:a60faf56df19f7356f57ba",
  measurementId: "G-HJGGYQ5DG0",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const database = getDatabase(app);
const baseUrl =
  "https://skyfitnesspro-new-default-rtdb.europe-west1.firebasedatabase.app";

export const getCourses = async () => {
  const response = await fetch(baseUrl + "/courses.json").catch((error) => {
    throw new Error(error.message);
  });
  const data = await response.json();
  return data;
};

export const getWorkouts = async () => {
  const response = await fetch(baseUrl + "/workouts.json").catch((error) => {
    throw new Error(error.message);
  });
  const data = await response.json();
  return data;
};

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

export const reauthenticateUser = async ({
  password,
}: {
  password: string;
}) => {
  try {
    if (auth.currentUser && auth.currentUser.email) {
      await signInWithEmailAndPassword(auth, auth.currentUser.email, password);
    } else {
      throw new Error("NO_CURRENT_USER");
    }
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};

export const addFavoriteCourse = async ({
  courseId,
  userId,
}: {
  courseId: string;
  userId: string;
}) => {
  const userRef = ref(database, `courses/${courseId}/users/${userId}`);
  const userData = {
    userId: userId,
  };

  try {
    await set(userRef, userData);
    console.log(`User with ID ${userId} added successfully.`);
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};

export const deleteFavoriteCourse = async ({
  courseId,
  userId,
}: {
  courseId: string;
  userId: string;
}) => {
  const userRef = ref(database, `courses/${courseId}/users/${userId}`);

  try {
    await remove(userRef);
    console.log(`User with ID ${userId} deleted successfully.`);
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};

export const checkIfFavorite = async ({
  courseId,
  userId,
}: {
  courseId: string;
  userId: string;
}): Promise<boolean> => {
  const userRef = ref(database, `courses/${courseId}/users/${userId}`);
  try {
    const snapshot = await get(userRef);
    return snapshot.exists();
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    return false;
  }
};

interface Exercise {
  quantity: number;
  name: string;
}

export const updateUserWorkout = async ({
  courseId,
  userId,
  workoutId,
  exercises,
}: {
  courseId: string;
  userId: string;
  workoutId: string;
  exercises: Exercise[];
}) => {
  const workoutRef = ref(
    database,
    `courses/${courseId}/users/${userId}/workouts/${workoutId}`
  );

  try {
    const workoutSnapshot = await get(workoutRef);

    // set(workours: { exercises: []})
    if (workoutSnapshot.exists()) {
      await update(workoutRef, { exercises });
    } else {
      await set(workoutRef, { exercises });
    }
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};

export const getUser = async ({
  courseId,
  userId,
}: {
  courseId: string;
  userId: string;
}) => {
  const coursesRef = ref(database, `courses/${courseId}/users/${userId}`);
  try {
    const snapshot = await get(coursesRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      return data;
    }
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};
