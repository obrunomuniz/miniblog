# Mini Blog

<img width="1728" alt="image" src="https://github.com/obrunomuniz/miniblog/assets/29904290/a6b439eb-6eed-49cb-b19b-c9ed63f88c8d">


## Introdução

Bem-vindo ao Mini Blog! Este é um projeto de blog minimalista desenvolvido com React JS e Vite. O objetivo deste projeto é fornecer uma plataforma simples para a criação e leitura de posts, com uma interface amigável e responsiva. O projeto inclui funcionalidades de busca, autenticação de usuários e gerenciamento de posts.

## Tecnologias Utilizadas

- **React JS**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de build que proporciona um ambiente de desenvolvimento rápido.
- **Firebase**: Plataforma de desenvolvimento de aplicativos para autenticação e banco de dados.
- **React Router DOM**: Biblioteca para gerenciamento de rotas em aplicações React.
- **CSS Modules**: Abordagem para escopo local de CSS.

## Funcionalidades

- **Listagem de Posts**: Veja os posts mais recentes na página inicial.
- **Busca por Tags**: Utilize a barra de busca para encontrar posts específicos por tags.
- **Autenticação de Usuários**: Registre-se e faça login para criar, editar e excluir posts.
- **Criação e Edição de Posts**: Crie novos posts ou edite posts existentes (requer login).
- **Visualização de Post**: Veja os detalhes de cada post em uma página dedicada.

 
## Configuração do Ambiente de Desenvolvimento

Siga as etapas abaixo para configurar o ambiente de desenvolvimento local:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/miniblog.git
   cd miniblog

 2. Instale as dependências:
     ```bash
     npm install

 3. Configuração do Firebase:

    Crie um projeto no Firebase e adicione as credenciais no arquivo .env:
    
    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    VITE_FIREBASE_APP_ID=your_app_id

5. Inicie o servidor de desenvolvimento:
   ```bash
   npm rum dev
   
## Deploy no GitHub Pages

Siga as etapas abaixo para fazer o deploy da aplicação no GitHub Pages usando Vite:

1. Instale a dependência gh-pages:

   ```bash
   npm install -D gh-pages

2. Adicione os scripts de deploy no package.json:

   ```json
   {
    "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
    }
   }

3. Configure a base URL no vite.config.js:

   ```javascript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
    plugins: [react()],
    base: '/miniblog/'
   });


4. Execute o deploy

   ```bash
   npm run deploy

## Custom Hooks

O projeto utiliza alguns hooks customizados para gerenciar funcionalidades específicas:

useFetchDocuments: Hook para buscar documentos do Firebase Firestore.

useFetchDocument: Hook para buscar um documento específico do Firebase Firestore.

useAuthentication: Hook para gerenciar a autenticação de usuários com Firebase.


## Contribuição
Se você deseja contribuir com este projeto, siga as etapas abaixo:

Fork o repositório.
Crie uma branch para sua feature: git checkout -b minha-feature

Faça commit das suas alterações: git commit -m 'Adiciona minha feature'

Faça push para a branch: git push origin minha-feature

Abra um Pull Request.


## Licença

Este projeto está licenciado sob a MIT License.

Feito com ❤️ por Bruno Muniz


 


