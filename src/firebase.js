import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCWLPtrP4i_hxWydzUI2Y6u_Ov5i5f1tjg",
  authDomain: "fb-clone-8129f.firebaseapp.com",
  databaseURL: "https://fb-clone-8129f.firebaseio.com",
  projectId: "fb-clone-8129f",
  storageBucket: "fb-clone-8129f.appspot.com",
  messagingSenderId: "304446927007",
  appId: "1:304446927007:web:4b83aed4fd52b30a6bf2aa",
  measurementId: "G-77FLLH0QLF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;