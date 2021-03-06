import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { userSagas } from "../redux/user/user.sagas";

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

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  // console.log(collectionRef)
  const batch = firestore.batch();

  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const convertCollectionsSnapsotToMap = (collection) => {
  const transformedCollection = collection.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  } ,{})

  // console.log(transformedCollection)
}

firebase.initializeApp(config);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth)
    }, reject)
  }) 
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();



export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => firebase.auth().signInWithPopup(googleProvider);

export default firebase;
