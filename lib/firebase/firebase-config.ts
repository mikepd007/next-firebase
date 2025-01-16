import { getFirestore } from 'firebase/firestore';
import { getApp } from 'firebase/app';

// Get the already initialized app from ReactFire
const app = getApp();
export const db = getFirestore(app); 