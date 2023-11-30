import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { auth } from '@/src/lib/firebase/firebase';
import { useRouter } from 'next/navigation';

export function getUser() {
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    console.log('getUser');
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      console.log('onAuthStateChanged', authUser);
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    console.log('user changed', user);
    onAuthStateChanged(auth, (authUser) => {
      if (user === undefined) return;

      // refresh when user changed to ease testing
      if (user?.email !== authUser?.email) {
        router.refresh();
      }
    });
  }, [user]);

  return user;
}
