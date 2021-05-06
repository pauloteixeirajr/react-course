import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC_xW9hjUEp9THCKVMjVGzNFUJzU3OO07s',
  authDomain: 'udemy-courses-4072a.firebaseapp.com',
  projectId: 'udemy-courses-4072a',
  storageBucket: 'udemy-courses-4072a.appspot.com',
  messagingSenderId: '1020519248044',
  appId: '1:1020519248044:web:8a0d9459079d341c81ef09',
  measurementId: 'G-QK578SM4YG',
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
