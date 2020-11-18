import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBpN5lPXEspoi05G6-ynUTFYlzTl1ERfkU",
  authDomain: "clone-bjs-b7e81.firebaseapp.com",
  databaseURL: "https://clone-bjs-b7e81.firebaseio.com",
  projectId: "clone-bjs-b7e81",
  storageBucket: "clone-bjs-b7e81.appspot.com",
  messagingSenderId: "1006674931145",
  appId: "1:1006674931145:web:7e9dd306db1ba9e4890c18",
  measurementId: "G-GH1Z041Y2L",
};

const amazonApp = firebase.initializeApp(firebaseConfig);

const db = amazonApp.firestore();
const auth = firebase.auth();

export default db;
export { auth };
