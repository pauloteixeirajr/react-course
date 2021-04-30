// API keys for Firebase are different from typical API keys
// Unlike how API keys are typically used, API keys for Firebase services are not used to control access to backend resources;
// that can only be done with Firebase Security Rules. Usually, you need to fastidiously guard API keys
// (for example, by using a vault service or setting the keys as environment variables);
// however, API keys for Firebase services are ok to include in code or checked-in config files.
// https://firebase.google.com/docs/projects/api-keys
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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogleMethod = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.log('Error creating users: ', err.message);
    }
  }

  return userRef;
};

export default firebase;
