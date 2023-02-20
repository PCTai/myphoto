// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyB5RC0WF1syKJM1msJ19J17HjVnJ5nhKMU',
    authDomain: 'photo-app-33868.firebaseapp.com',
    projectId: 'photo-app-33868',
    storageBucket: 'photo-app-33868.appspot.com',
    messagingSenderId: '1091886321484',
    appId: '1:1091886321484:web:560c822c78c923425489e9',
    measurementId: 'G-FEWWDJ7VG9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
