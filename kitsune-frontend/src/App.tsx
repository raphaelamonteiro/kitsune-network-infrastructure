import React, { useState, useEffect } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { authService } from './services/api';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await authService.checkAuth();
        if (response.logged_in && response.user) {
          setIsAuthenticated(true);
          setUser(response.user);
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação');
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#0f0c29', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ color: 'white' }}>🦊 Carregando...</h1>
      </div>
    );
  }

  if (isAuthenticated) {
    return <Dashboard user={user} onLogout={() => setIsAuthenticated(false)} />;
  }

  return <Login onLoginSuccess={() => window.location.reload()} />;
};

export default App;