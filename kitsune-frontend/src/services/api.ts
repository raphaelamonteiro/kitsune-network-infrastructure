import axios from 'axios';
import type { LoginCredentials, LoginResponse, ServerData, AuthCheckResponse } from '../types';

const API_URL = import.meta.env.VITE_API_URL || '';

const api = axios.create({
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
});

export const authService = {
    login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
        const response = await api.post<LoginResponse>('/auth.php?action=login', credentials);
        return response.data;
    },

    logout: async (): Promise<void> => {
        await api.get('/auth.php?action=logout');
    },

    checkAuth: async (): Promise<AuthCheckResponse> => {
        const response = await api.get<AuthCheckResponse>('/auth.php?action=check');
        return response.data;
    },
};

export const apiService = {
    getServer: async (): Promise<ServerData> => {
        const response = await api.get<ServerData>('/api.php?action=server');
        return response.data;
    },
};