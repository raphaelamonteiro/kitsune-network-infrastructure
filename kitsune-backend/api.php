<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // permite acesso de qualquer origem (CORS)

$action = $_GET['action'] ?? 'server';

switch($action) {
    case 'server':
        echo json_encode([
            'server' => gethostname(),
            'timestamp' => date('Y-m-d H:i:s')
        ]);
        break;
        
    case 'containers':
        exec("docker ps --format '{{.Names}}'", $containers);
        echo json_encode(['containers' => $containers]);
        break;
        
    case 'uptime':
        $uptime = shell_exec("uptime -p");
        echo json_encode(['uptime' => trim($uptime)]);
        break;
        
    default:
        echo json_encode(['status' => 'ok', 'message' => 'Kitsune API v1.0']);
}
?>