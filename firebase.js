// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: 'AIzaSyCmDQozZD7WXgyM12Wu2NuCsy-l-DMc6pQ',
  authDomain: 'insta-2-yt-83ab2.firebaseapp.com',
  projectId: 'insta-2-yt-83ab2',
  storageBucket: 'insta-2-yt-83ab2.appspot.com',
  messagingSenderId: '87599586238',
  appId: '1:87599586238:web:c5adba76df1da523c1b7ef',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
