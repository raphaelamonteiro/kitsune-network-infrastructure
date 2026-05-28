<div align="center">

# 🦊 Kitsune Network Infrastructure

<img width="4800" height="1200" alt="banner" src="https://github.com/user-attachments/assets/34724675-47e0-4e3b-991a-ba3509cb2ad6" />

**Status:** 🚧 Em andamento

  <h2> Índice </h2>
<p>
  <a href= "#intro"> Introdução </a>  |   
  <a href="#scope"> Escopo </a>  |
  <a href="#stack"> Tecnologias </a>  | 
  <a href="#demo"> Demonstração </a>  |
  <a href="#doc"> Documentação </a> |
   <a href="#folders"> Estrutura do Repositório </a>  | 
  <a href="#diagram"> Arquitetura </a> |
  <a href="#credit"> Créditos </a>
</div>

## Introdução

<a id="intro"></a>

O projeto implementa uma infraestrutura de rede segura e escalável usando 2 instâncias da AWS. <br>
O objetivo é criar um ambiente robusto que suporte aplicações modernas, utilizando Docker para a contêinerização e Nginx para gerenciamento de tráfego.

Ele demonstra:

- Configurando instâncias do AWS EC2.
- Estabelecendo uma VPN segura para comunicação de rede privada.
- Configurando o Nginx como um proxy reverso e balanceador de carga.
- Implantação de uma aplicação web (frontend e backend) em uma infraestrutura segura.
- Manipulando políticas CORS e comunicação segura entre origens.

<!---
## Scope
<a id="scope"></a>
### EC2 Setup
How to create and configure EC2 instances on AWS.

### VPN Setup
VPN configuration using OpenVPN, including client and server setup.

### Nginx Configuration
Nginx configuration as a reverse proxy and load balancer.

### CORS
Example configuration for Cross-Origin settings in the application's backend.
---->

## Tecnologias

<a id="stack"></a>

<div align="center">

![AWS](https://img.shields.io/badge/Amazon_Web_Services-5E0006?style=for-the-badge&logo=aws&logoColor=white)
![Ubuntu](https://img.shields.io/badge/Ubuntu-5E0006?style=for-the-badge&logo=ubuntu&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-5E0006?style=for-the-badge&logo=linux&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-5E0006?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-5E0006?style=for-the-badge&logo=nginx&logoColor=white)
![HAProxy](https://img.shields.io/badge/HA_Proxy-5E0006?style=for-the-badge&logo=aws&logoColor=white)
![Wireguard](https://img.shields.io/badge/Wireguard-5E0006?style=for-the-badge&logo=wireguard&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-5E0006?style=for-the-badge&logo=php&logoColor=white)
![React](https://img.shields.io/badge/React-5E0006?style=for-the-badge&logo=react&logoColor=white)
![Axios](https://img.shields.io/badge/axios-5E0006?&style=for-the-badge&logo=axios&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-5E0006?style=for-the-badge&logo=postgresql&logoColor=white)

</div>

## Demonstração

<a id="demo"></a>

## 📦 Estrutura do Repositório

```bash
kitsune-network-infrastructure/
│
├── docs/
│   ├── screenshots/               # Capturas de tela do projeto
│   ├── concepts.md                # Documentação com aprendizados e conceitos do sistema
│   └── diagrama-redes.jpeg       # Diagrama visual da infraestrutura de rede
│
├── kitsune-backend/
│   ├── .env.example               # Exemplo de variáveis de ambiente
│   ├── api.php                   # Configuração e entrada da API
│   └── auth.php                  # Lógica de autenticação
│
├── kitsune-frontend/
│   ├── public/                   # Arquivos estáticos servidos diretamente
│   ├── src/                      # Código-fonte principal da aplicação (components, pages, services)
│   ├── .env.example              # Modelo de variáveis de ambiente
│   ├── vite.config.ts            # Configuração do Vite
│   ├── tsconfig.json             # Configuração principal do TypeScript
│   ├── tsconfig.app.json         # Configuração do TypeScript (aplicação)
│   ├── tsconfig.node.json        # Configuração do TypeScript (Node)
│   ├── vite-env.d.ts             # Tipagens globais do Vite
│   ├── package.json              # Dependências e scripts do projeto
│   ├── package-lock.json         # Lockfile de dependências
│   ├── index.html                # Entry point da aplicação
│   └── README.md                 # Documentação do frontend
│
├── scripts/
│   └── demo.sh                   # Script de automação e diagnóstico do sistema
│
├── docker-compose.yml            # Define serviços, volumes e redes Docker
├── haproxy.cfg                   # Configuração do balanceador de carga HAProxy
├── .gitignore                    # Arquivos ignorados pelo Git
└── README.md                     # Documentação principal do projeto
```
> ⚠️ Importante: o .env contém dados sensíveis e não deve ser versionado em produção.

<!---
## Setup Guide
<a id="install"></a>
### EC2 Setup
How to create and configure EC2 instances on AWS.

### VPN Setup
VPN configuration using OpenVPN, including client and server setup.

### Nginx Configuration
Nginx configuration as a reverse proxy and load balancer.

### CORS
Example configuration for Cross-Origin settings in the application's backend.

## Diagrams and References
<a id="diagram"></a>
- Network Topologies - Click Here
- Nginx Template - Click Here
- VPN Template - Click Here

----->

## Diagrama
<a id="diagram"></a>
<div align="center">
<img src="https://github.com/raphaelamonteiro/kitsune-network-infrastructure/blob/main/docs/diagrama-redes.jpeg" height="500em" >
</div>

## Créditos

<a id="credit"></a>

💻 Este projeto foi desenvolvido por [Raphaela Monteiro](https://github.com/raphaelamonteiro) com base na proposta acadêmica do professor [Jean Carlos](https://github.com/jeancosta4).
