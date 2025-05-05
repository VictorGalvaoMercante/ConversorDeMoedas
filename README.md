Conversor de Moedas

Este projeto é uma aplicação completa de conversão de moedas, feita com front-end em HTML/CSS/JavaScript e back-end em Node.js/Express. Ela permite converter valores entre diferentes moedas e visualizar um histórico de conversões anteriores.

🔍 Funcionalidades

Conversão entre moedas (USD, BRL, EUR).

Consulta a taxas de câmbio reais (via API externa).

Armazenamento temporário do histórico de conversões.

Exibição do histórico em página separada.

💡 Tecnologias Usadas

Front-end:

HTML
CSS
JavaScript

Back-end:

Node.js
Express
Axios (para fazer chamadas HTTP)

API de Conversão:
Fixer.io ou exchangerate.host

📁 Estrutura de Pastas

/conversor-de-moedas
|
|-- backend/
|   |-- index.js          # Servidor Express
|   |-- package.json      # Dependências do Node
|
|-- frontend/
|   |-- index.html        # Interface de conversão
|   |-- historico.html    # Interface de histórico
|   |-- script.js         # Funções de JS
|   |-- style.css         # Estilo do site

📈 Como Usar

Localmente:

Clone o repositório
Navegue até a pasta backend/ e rode:

npm install
node index.js

Abra o arquivo frontend/index.html no navegador.

Online:

Front-end hospedado na Vercel

Back-end será hospedado no Railway (ou similar)

⚙️ Funcionalidades Futuras

Armazenar o histórico em banco de dados (MongoDB, SQLite...)

Login e autenticação de usuários

Design responsivo

🌟 Autor
Este projeto foi desenvolvido por Victor Galvão como parte de um aprendizado prático em desenvolvimento web full stack.