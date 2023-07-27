import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-0Bgn8B4eAM776_sg_a8pp_dBgKLBKms",
  authDomain: "zebacop.firebaseapp.com",
  projectId: "zebacop",
  storageBucket: "zebacop.appspot.com",
  messagingSenderId: "513850240722",
  appId: "1:513850240722:web:9afcff8ead4ad56026070b"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
