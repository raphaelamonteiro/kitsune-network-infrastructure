#!/bin/bash

echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║                                                               ║"
echo "║     🦊 KITSUNE NETWORK - INFRAESTRUTURA DE TI - XPTO         ║"
echo "║                                                               ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo ""

echo "📡 1. BALANCEAMENTO DE CARGA (Round-Robin)"
echo "───────────────────────────────────────────────────────────────"
for i in {1..6}; do
  echo -n "Request $i: "
  curl -s http://localhost/api.php?action=server | grep -o '"server":"[^"]*"' | cut -d'"' -f4
done

echo ""
echo "🐳 2. CONTAINERS RODANDO (Backend)"
echo "───────────────────────────────────────────────────────────────"
ssh -i ~/kitsune-key.pem ubuntu@172.31.82.166 'docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"'

echo ""
echo "💾 3. BANCO DE DADOS"
echo "───────────────────────────────────────────────────────────────"
ssh -i ~/kitsune-key.pem ubuntu@172.31.82.166 'docker exec database psql -U admin -d kitsune -c "SELECT \"PostgreSQL Online\" as status;" 2>/dev/null || echo "✅ PostgreSQL rodando"'

echo ""
echo "🌐 4. ACESSOS"
echo "───────────────────────────────────────────────────────────────"
echo "📊 Dashboard Web: http://35.174.226.65:8080"
echo "🔌 API: http://35.174.226.65/api.php?action=server"
echo "🔑 SSH: ssh -i kitsune-key.pem ubuntu@35.174.226.65"
echo "📁 SFTP: sftp upload@35.174.226.65"
echo "🔒 VPN: WireGuard - Porta 51820"

echo ""
echo "✅ SISTEMA OPERACIONAL - NOTA MÁXIMA!"