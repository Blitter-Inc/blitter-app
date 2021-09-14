import Firebase from 'firebase/app';
import { FIREBASE_CONFIG } from './env';


Firebase.initializeApp(FIREBASE_CONFIG);

export default Firebase;
