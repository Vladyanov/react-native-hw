// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAt98fQz_8sNkk5I9PgwmitagQek-risD0",
  authDomain: "react-native-social-41b5d.firebaseapp.com",
  projectId: "react-native-social-41b5d",
  storageBucket: "react-native-social-41b5d.appspot.com",
  messagingSenderId: "739190271840",
  appId: "1:739190271840:web:42e8f4e94e7580e27ab805",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
