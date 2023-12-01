'use client';
import { auth } from '@/lib/firebase/firebase';
import { User, onAuthStateChanged } from 'firebase/auth';
import { set } from 'firebase/database';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react';

// Define the shape of your context state
interface UserContextState {
  user: User | null;
  loading: boolean;
}

// Create a context
const UserContext = createContext<UserContextState>({
  user: null,
  loading: true,
});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    console.log('Getting user for the first time...');
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (!authUser) {
        console.log('🚨 No user found...');
        setUser(null);
        setLoading(false);
        document.cookie = `token=; path=/;`;
        return;
      }

      setUser(authUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (user === undefined) return;
      if (user?.email !== authUser?.email) {
        router.refresh();
      }
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};
