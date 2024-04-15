'use client';

import CryptoChart from './components/CryptoChart';
import CryptoCards from './components/CryptoCards';
import LoginForm from './components/LoginForm';
import { useAuth } from './hooks/useAuth';

export default function Home() {
  const { user, isLoading, login, logout } = useAuth();

  return (
    <main>
      {user ? (
        <>
          <CryptoChart />
          <CryptoCards />
        </>
      ) : (
        <LoginForm onLogin={login} />
      )}
    </main>
  );
}
