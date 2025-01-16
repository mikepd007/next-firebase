import { useEffect, useState } from 'react';
import { useAuth } from 'reactfire';
import { getUserDocument } from '@/lib/firebase/firestore';
import type { UserData } from '@/types/user';

export function useUserData() {
  const auth = useAuth();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      try {
        if (user) {
          const data = await getUserDocument(user.uid);
          setUserData(data);
        } else {
          setUserData(null);
        }
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  return { userData, loading, error };
} 