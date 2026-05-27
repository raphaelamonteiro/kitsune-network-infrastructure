export interface LoginCredentials {
    username: string;
    password: string;
}

export interface LoginResponse {
    success: boolean;
    user?: string;
    message?: string;
}

export interface ServerData {
    server: string;
    timestamp: string;
}

export interface AuthCheckResponse {
    logged_in: boolean;
    user: string | null;
}