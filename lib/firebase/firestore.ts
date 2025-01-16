import { db } from '@/lib/firebase/firebase-config';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import type { UserData } from '@/types/user';

export async function createUserDocument(uid: string, email: string): Promise<void> {
  const userDoc = doc(db, 'users', uid);
  
  const userData: UserData = {
    uid,
    email,
    createdAt: new Date(),
    updatedAt: new Date(),
    subscriptionStatus: 'inactive',
    subscriptionTier: 'free'
  };

  await setDoc(userDoc, userData);
}

export async function getUserDocument(uid: string): Promise<UserData | null> {
  const userDoc = doc(db, 'users', uid);
  const userSnap = await getDoc(userDoc);
  
  if (userSnap.exists()) {
    return userSnap.data() as UserData;
  }
  
  return null;
}

export async function updateUserDocument(uid: string, data: Partial<UserData>): Promise<void> {
  const userDoc = doc(db, 'users', uid);
  await updateDoc(userDoc, {
    ...data,
    updatedAt: new Date()
  });
} 