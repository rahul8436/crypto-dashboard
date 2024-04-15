'use client';

import { useState, useEffect } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

export const useAuth = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === 'loading') {
      setIsLoading(true);
    } else if (status === 'authenticated') {
      setUser(session?.user);
      setIsLoading(false);
    } else {
      setUser(null);
      setIsLoading(false);
    }
  }, [status, session]);

  const login = async (email: string, password: string) => {
    await signIn('credentials', { email, password, redirect: false });
  };

  const logout = async () => {
    await signOut();
  };

  return { user, isLoading, login, logout };
};
