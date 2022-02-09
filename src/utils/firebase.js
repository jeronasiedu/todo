// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDzPXnELRV7RissT37Mv04zyHwUSndZFBY',
  authDomain: 'todo-307a5.firebaseapp.com',
  projectId: 'todo-307a5',
  storageBucket: 'todo-307a5.appspot.com',
  messagingSenderId: '89357747921',
  appId: '1:89357747921:web:3e3894769c86450fe367f0',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
