<?php
session_start();
header('Content-Type: application/json');

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
        echo json_encode(['success' => false, 'message' => 'Credenciais inválidas']);
    }
} elseif ($action === 'logout') {
    session_destroy();
    echo json_encode(['success' => true]);
} elseif ($action === 'check') {
    echo json_encode(['logged_in' => isset($_SESSION['user']), 'user' => $_SESSION['user'] ?? null]);
}
?>