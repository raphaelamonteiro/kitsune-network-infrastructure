import React, { useState } from 'react';
import '../index.css';
import { authService } from '../services/api';

import Logo from '../../public/logo.png';

interface LoginProps {
    onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);
        setError('');

        try {

            const response = await authService.login({
                username,
                password
            });

            if (response.success) {
                onLoginSuccess();
            } else {
                setError(response.message || 'ACESSO NEGADO');
            }

        } catch (err) {
            setError('FALHA NA CONEXÃO');

        } finally {
            setLoading(false);

        }
    };

    return (
        <div className="kitsune-screen">

            <div className="overlay"></div>
            <div className="scanline"></div>

            <div className="login-card">

                <div className="kitsune-logo">
                    <img
                        src={Logo}
                        alt="Kitsune Logo"
                        className="logo-image"
                    />
                </div>

                <p className="subtitle">
                    SISTEMA DE INFRAESTRUTURA
                </p>

                <div className="status-line">
                    STATUS: CONEXÃO SEGURA
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="login-form">

                    <input
                        type="text"
                        placeholder="USUÁRIO"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        disabled={loading} />

                    <input type="password"
                        placeholder="SENHA"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading} />

                    <button
                        type="submit"
                        disabled={loading}>
                        {loading
                            ? 'AUTENTICANDO...'
                            : 'LOGIN'}
                    </button>

                    {error && (
                        <p className="error-text">
                            {error}
                        </p>
                    )}

                </form>

                <div className="terminal-info">
                    <p>SOMENTE USUÁRIOS AUTORIZADOS</p>
                </div>

            </div>

        </div>
    );
};

export default Login;