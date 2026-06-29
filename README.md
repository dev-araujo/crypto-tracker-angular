<img src="https://img.shields.io/static/v1?label=license&message=MIT&color=5965E0&labelColor=121214" alt="License"> <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" /> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/> <img src="https://img.shields.io/badge/PrimeNG-2196F3?style=for-the-badge&logo=primeng&logoColor=white" alt="PrimeNG" /> <img src="https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge&logo=rxjs&logoColor=white" alt="RxJS" /> <img src="https://img.shields.io/badge/Chart%2Ejs-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white" alt="Chart.js" />

# CryptoAngular

O **CryptoAngular** é uma aplicação para visualização e acompanhamento de criptomoedas, consumindo a API pública da [Coinranking](https://coinranking.com/) para exibir uma listagem e gráficos detalhados dos ativos.

![desktop](./assets/desktop.png)

---

## Stack 🚀

**Frontend**

- **Angular (v20)**
- **PrimeNG**
- **Chart.js**
- **RxJS**
- **SCSS**

**API (Externa)**

- **Coinranking API**

## Configuração de Ambiente 🔐

Antes de rodar o projeto, é necessário configurar o seu token da API da Coinranking:

1. Crie uma cópia do arquivo `.env.example` e renomeie para `.env` (ou edite diretamente o `.env`).
2. Abra o arquivo `.env` e insira sua chave da API:
   ```env
   COINRANKING_API_KEY=seu_token_real_aqui
   ```
   _(O arquivo `.env` não é enviado ao GitHub por segurança)._

## Rodando Localmente ⚡️

Existem duas maneiras de rodar o projeto: **manualmente** ou com **Docker**.

### Manualmente ⚒️

1.  Clone o repositório:

    ```bash
    git clone https://github.com/dev-araujo/crypto-angular.git
    ```

2.  Instale as dependências:

    ```bash
    npm install
    ```

3.  Execute o servidor de desenvolvimento:

    ```bash
    npm start
    ```

    _Obs: O comando `npm start` injeta automaticamente a chave do seu `.env` de forma segura nas variáveis de ambiente em tempo de execução._

⭐ A aplicação estará disponível em `http://localhost:4200`.

### Com Docker 🐋

#### 📋 Pré-requisitos

Certifique-se de que você tem o [Docker](https://www.docker.com/get-started) e o [Docker Compose](https://docs.docker.com/compose/install/) instalados.

1.  Clone o repositório:

    ```bash
    git clone https://github.com/dev-araujo/crypto-angular.git
    ```

2.  Execute o Docker Compose para construir a imagem e iniciar o contêiner.

    ```bash
    docker-compose up -d
    ```

    ou

    ```bash
    docker compose up -d
    ```

⭐ A aplicação estará disponível em `http://localhost:4201`.

---

#### Autor 👷

<img src="https://avatars.githubusercontent.com/u/97068163?v=4" width=120 />

[Adriano P Araujo](https://www.linkedin.com/in/araujocode/)
