# 📧 Configuração do Formulário de Contato

Este documento explica como configurar e usar o sistema de envio de emails do formulário de contato.

## 🚀 Como Funcionar

### 1. Configurar Email Gmail

Para enviar emails através do Gmail, você precisa criar uma **Senha de Aplicativo**:

1. **Ative a verificação em duas etapas** na sua conta Google:
   - Acesse: https://myaccount.google.com/security
   - Procure por "Verificação em duas etapas" e ative

2. **Crie uma Senha de Aplicativo**:
   - Acesse: https://myaccount.google.com/apppasswords
   - Selecione "App: Email" e "Device: Outro (nome personalizado)"
   - Digite "SoftSolutions Contact Form" como nome
   - Clique em "Gerar"
   - **Copie a senha gerada** (16 caracteres, ex: "abcd efgh ijkl mnop")

3. **Configure o arquivo .env**:
   - Abra o arquivo `backend/.env`
   - Substitua `sua_senha_de_aplicativo_aqui` pela senha que você copiou
   - O email já está configurado como `dev.lucas77@gmail.com`

Exemplo do arquivo `backend/.env`:
```env
PORT=3001
EMAIL_USER=dev.lucas77@gmail.com
EMAIL_PASS=abcdefghijklmnop
```

⚠️ **IMPORTANTE**: Use a senha de aplicativo de 16 caracteres (sem espaços), NÃO use sua senha normal do Gmail!

### 2. Iniciar os Servidores

Você precisa rodar **dois servidores** simultaneamente:

#### Terminal 1 - Frontend (React + Vite):
```bash
npm run dev
```
O frontend rodará em: http://localhost:5173

#### Terminal 2 - Backend (Express + Nodemailer):
```bash
npm run server
```
O backend rodará em: http://localhost:3001

### 3. Testar o Formulário

1. Abra o navegador em http://localhost:5173
2. Navegue até a seção "Contato"
3. Preencha o formulário com seus dados
4. Clique em "Enviar Mensagem"
5. Você receberá um email em **dev.lucas77@gmail.com**

## 📝 Estrutura de Arquivos

```
backend/
├── server.js          # Servidor Express com rota de envio
├── package.json       # Dependências do backend
├── .env              # Configurações (NÃO commitar)
├── .env.example      # Exemplo de configuração
└── .gitignore        # Ignora .env e node_modules

src/components/
└── Contact.tsx       # Componente do formulário atualizado
```

## 🔧 Scripts Disponíveis

### Frontend
- `npm run dev` - Inicia o servidor de desenvolvimento Vite
- `npm run build` - Build de produção
- `npm run preview` - Preview do build de produção

### Backend
- `npm run server` - Inicia o servidor backend em produção
- `npm run server:dev` - Inicia o servidor com auto-reload

## 📧 Formato do Email

Quando um cliente enviar uma mensagem, você receberá um email com:

- **Assunto**: "Novo contato do site - [Nome do Cliente]"
- **Conteúdo**:
  - 👤 Nome do cliente
  - 📧 Email do cliente
  - 🏢 Empresa (se fornecida)
  - 💬 Mensagem completa
  - 📅 Data e hora do envio

O email permite responder diretamente ao cliente (Reply-To configurado).

## 🔒 Segurança

- ✅ Arquivo `.env` está no `.gitignore` e não será commitado
- ✅ Use sempre senhas de aplicativo, nunca sua senha do Gmail
- ✅ CORS configurado para aceitar requisições do frontend
- ✅ Validação de campos obrigatórios no backend

## ❌ Solução de Problemas

### Erro "Failed to fetch" ou "Network Error"
- ✅ Verifique se o backend está rodando (`npm run server`)
- ✅ Confirme que a porta 3001 está livre
- ✅ Verifique o console do backend para erros

### Erro "Invalid login" ou "Authentication failed"
- ✅ Confirme que está usando uma **senha de aplicativo** (não sua senha normal)
- ✅ Verifique se a verificação em duas etapas está ativada
- ✅ Gere uma nova senha de aplicativo se necessário
- ✅ Certifique-se de que não há espaços na senha no arquivo .env

### Email não chega
- ✅ Verifique a caixa de spam
- ✅ Confirme que o email está correto em `server.js` (linha 27)
- ✅ Olhe os logs do console do backend para verificar se há erros

## 🌐 Deploy em Produção

Para produção, você precisará:

1. Hospedar o backend em um servidor (Heroku, Railway, Render, etc.)
2. Atualizar a URL da API em `Contact.tsx` (substituir `localhost:3001`)
3. Configurar as variáveis de ambiente no servidor de hospedagem
4. Fazer build do frontend e hospedar (Vercel, Netlify, etc.)

## 📞 Suporte

Se tiver problemas, verifique:
- Logs do console do navegador (F12)
- Logs do terminal do backend
- Configurações de segurança do Gmail

---

✨ **Tudo pronto!** Agora seu formulário de contato está funcional e enviará emails diretamente para dev.lucas77@gmail.com
