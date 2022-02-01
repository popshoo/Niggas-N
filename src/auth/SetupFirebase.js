import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDUmrICFC2BdYSfy6tH8incElTfUOhcAi8",
  authDomain: "niggasn.firebaseapp.com",
  projectId: "niggasn",
  storageBucket: "niggasn.appspot.com",
  messagingSenderId: "296214095559",
  appId: "1:296214095559:web:43a56134ffed941e9200e2"
};

const SetupFirebase = () => {
  initializeApp(firebaseConfig);
};

export default SetupFirebase;

