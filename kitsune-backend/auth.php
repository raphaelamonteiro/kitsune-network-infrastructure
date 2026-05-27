<?php
session_start();
header('Content-Type: application/json');

// ACEITAR MÚLTIPLAS ORIGENS
$allowed_origins = [
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:8080',
    'http://35.174.226.65'
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
}

header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$users = [
    'admin' => password_hash('admin123', PASSWORD_DEFAULT),
    'tiago' => password_hash('xpto2024', PASSWORD_DEFAULT)
];

$action = $_GET['action'] ?? '';

if ($action === 'login') {
    $data = json_decode(file_get_contents('php://input'), true);
    $username = $data['username'] ?? '';
    $password = $data['password'] ?? '';
    
    if (isset($users[$username]) && password_verify($password, $users[$username])) {
        $_SESSION['user'] = $username;
        echo json_encode(['success' => true, 'user' => $username]);
    } else {
        http_response_code(401);
        echo json_encode(['success' => false, 'message' => 'Credenciais inválidas']);
    }
} elseif ($action === 'logout') {
    session_destroy();
    echo json_encode(['success' => true]);
} elseif ($action === 'check') {
    if (isset($_SESSION['user'])) {
        echo json_encode(['logged_in' => true, 'user' => $_SESSION['user']]);
    } else {
        echo json_encode(['logged_in' => false, 'user' => null]);
    }
} else {
    http_response_code(404);
    echo json_encode(['error' => 'Action not found']);
}
?>