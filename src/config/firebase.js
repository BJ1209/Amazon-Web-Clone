import firebase from "firebase";

const firebaseConfig = {
  // Your Config Goes Here
};

const amazonApp = firebase.initializeApp(firebaseConfig);

const db = amazonApp.firestore();
const auth = amazonApp.auth();

export default db;
export { auth };
