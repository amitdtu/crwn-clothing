import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyASDh-z3RTmqZ0zWthEr8uTRMzryC6hehQ",
  authDomain: "crwn-db-e65cf.firebaseapp.com",
  databaseURL: "https://crwn-db-e65cf.firebaseio.com",
  projectId: "crwn-db-e65cf",
  storageBucket: "crwn-db-e65cf.appspot.com",
  messagingSenderId: "554225324284",
  appId: "1:554225324284:web:56086515802fb79aed4779",
  measurementId: "G-K7KNG4L65X",
};

export const createUserProfileDocument = async (authUser, additionalData) => {
  if (!authUser) return;

  const userRef = firestore.doc(`/users/${authUser.uid}/`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = authUser;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error occur", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;
