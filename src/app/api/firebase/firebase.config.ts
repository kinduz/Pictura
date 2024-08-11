// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAOs8m_fszVjFL0WaWeNgAyLFHtQRcah6o',
  authDomain: 'pinclone-3a633.firebaseapp.com',
  projectId: 'pinclone-3a633',
  storageBucket: 'pinclone-3a633.appspot.com',
  messagingSenderId: '148859758408',
  appId: '1:148859758408:web:988bf6e4426b2b78edf57d',
  measurementId: 'G-BSEZP87ZHV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
