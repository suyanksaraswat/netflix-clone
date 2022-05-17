// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  databaseURL: 'https://netflix-clone-6fcdb-default-rtdb.firebaseio.com/',
  apiKey: "AIzaSyAmhVx5wiF5BM-_bvmKSVCoNwIme0letSQ",
  authDomain: "netflix-clone-6fcdb.firebaseapp.com",
  projectId: "netflix-clone-6fcdb",
  storageBucket: "netflix-clone-6fcdb.appspot.com",
  messagingSenderId: "198162343800",
  appId: "1:198162343800:web:25f5b29a6407b4aaf48a8d",
  measurementId: "G-SKL2CKHNKD"

}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
