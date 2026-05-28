import React, { useState, useEffect } from 'react';
import { authService, apiService } from '../services/api';
import Kitsune from '../../public/kitsune.png';

interface DashboardProps {
    user: string;
    onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({
    user,
    onLogout
}) => {

    const [server, setServer] = useState('---');
    const [timestamp, setTimestamp] = useState('');
    const [requests, setRequests] = useState(0);

    useEffect(() => {

        const fetchData = async () => {

            try {

                const data = await apiService.getServer();

                setServer(data.server.slice(0, 12));
                setTimestamp(data.timestamp);

                setRequests(prev => prev + 1);

            } catch (err) {

                console.error(err);

            }
        };

        fetchData();

        const interval = setInterval(fetchData, 5000);

        return () => clearInterval(interval);

    }, []);

    const handleLogout = async () => {

        await authService.logout();
        onLogout();

    };

    return (

        <div className="dashboard-screen">

            <div className="dashboard-overlay"></div>
            <div className="dashboard-scanline"></div>

            <div className="dashboard-container">

                {/* HEADER */}
                <div className="dashboard-brand">
                    <img
                        src={Kitsune}
                        alt="Kitsune Logo"
                        className="dashboard-logo" />

                    <div>
                        <p className="dashboard-tag">
                            KITSUNE NETWORK
                        </p>

                        <h1 className="dashboard-title">
                            PAINEL DE CONTROLE
                        </h1>
                    </div>

                    <div className="dashboard-user">

                        <span>
                            USUÁRIO: {user}
                        </span>

                        <button
                            onClick={handleLogout}
                            className="logout-button">
                            SAIR
                        </button>

                    </div>

                </div>

                {/* STATUS BAR */}
                <div className="system-status">
                    <div className="status-dot"></div>
                    <span>
                        NÚCLEO OPERACIONAL ATIVO
                    </span>
                </div>

                {/* GRID */}

                <div className="stats-grid">

                    <div className="hud-card">
                        <p className="hud-label">
                            SERVIDOR ATIVO
                        </p>

                        <h2>
                            {server}
                        </h2>
                    </div>

                    <div className="hud-card">
                        <p className="hud-label">
                            TOTAL DE REQUISIÇÕES
                        </p>

                        <h2>
                            {requests}
                        </h2>
                    </div>

                    <div className="hud-card">
                        <p className="hud-label">
                            STATUS
                        </p>

                        <h2 className="online-text">
                            ONLINE
                        </h2>
                    </div>

                </div>

                {/* SERVICES */}

                <div className="services-panel">

                    <div className="panel-header">
                        ALGUNS DOS SERVIÇOS ATIVOS
                    </div>

                    <div className="services-grid">

                        <div className="service-item">
                            Balanceador de Carga HAProxy
                        </div>

                        <div className="service-item">
                            Cluster PHP-FPM
                        </div>

                        <div className="service-item">
                            Banco de Dados PostgreSQL
                        </div>

                        <div className="service-item">
                            SSH + AUTENTICAÇÃO 2FA
                        </div>

                        <div className="service-item">
                            VPN WireGuard
                        </div>

                        <div className="service-item">
                            TRANSFERÊNCIA SEGURA SFTP
                        </div>

                    </div>

                </div>

                {/* FOOTER */}
                <div className="dashboard-footer">
                    <p>ÚLTIMA ATUALIZAÇÃO: {timestamp}</p>

                    <a
                        href="https://github.com/raphaelamonteiro/kitsune-network-infrastructure"
                        target="_blank"
                        rel="noreferrer"
                        className="github-link">
                        GITHUB
                    </a>
                </div>


            </div>

        </div >
    );
};

export default Dashboard;