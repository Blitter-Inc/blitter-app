import Firebase from 'firebase/app';
import { FIREBASE_CONFIG } from './env';

console.log(FIREBASE_CONFIG);
Firebase.initializeApp(FIREBASE_CONFIG);

export default Firebase;
