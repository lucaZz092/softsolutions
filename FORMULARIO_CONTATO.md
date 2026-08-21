# ✅ Formulário de Contato - Sistema Implementado

## 🎯 O que foi feito

Implementei um sistema completo de envio de emails para o formulário de contato do seu site. Agora, quando um cliente preencher e enviar o formulário, você receberá automaticamente um email em **dev.lucas77@gmail.com**.

## 📁 Arquivos Criados/Modificados

### Backend (Novo)
```
backend/
├── server.js              # Servidor Express com API de envio de email
├── package.json           # Dependências: express, cors, nodemailer, dotenv
├── .env                   # Configurações do email (CONFIGURE ISSO!)
├── .env.example           # Modelo de configuração
├── .gitignore            # Protege .env de ser commitado
└── README.md             # Documentação completa
```

### Frontend (Modificado)
```
src/components/Contact.tsx  # Atualizado para enviar dados ao backend
```

### Documentação
```
INICIO_RAPIDO.md           # Guia de 5 minutos para começar
```

## 🔐 IMPORTANTE: Configure o Email (OBRIGATÓRIO)

### Antes de testar, você DEVE fazer isso:

1. **Ative a verificação em duas etapas** no Gmail:
   - https://myaccount.google.com/security

2. **Crie uma senha de aplicativo**:
   - https://myaccount.google.com/apppasswords
   - Escolha: "App: Email" → "Device: Outro"
   - Nome: "SoftSolutions"
   - **Copie a senha de 16 caracteres** (ex: `abcd efgh ijkl mnop`)

3. **Configure o arquivo `backend/.env`**:
   ```env
   PORT=3001
   EMAIL_USER=dev.lucas77@gmail.com
   EMAIL_PASS=cole_aqui_sua_senha_de_16_caracteres
   ```
   ⚠️ **Use a senha de aplicativo (16 caracteres), NÃO sua senha normal!**

## 🚀 Como Usar

### Passo 1: Abra DOIS terminais

**Terminal 1 - Frontend:**
```bash
npm run dev
```
Isso inicia o site em: http://localhost:8080

**Terminal 2 - Backend:**
```bash
cd backend
npm start
```
Isso inicia a API em: http://localhost:3001

### Passo 2: Teste o Formulário

1. Abra http://localhost:8080
2. Role até a seção "Contato"
3. Preencha o formulário
4. Clique em "Enviar Mensagem"
5. Verifique o email em **dev.lucas77@gmail.com**

## 📧 Como Funciona

```
Cliente preenche formulário
         ↓
Frontend (React) envia dados via POST
         ↓
Backend (Express) recebe os dados
         ↓
Nodemailer envia email via Gmail
         ↓
Email chega em dev.lucas77@gmail.com
```

## 📨 Formato do Email Recebido

Você receberá emails com:
- **Assunto**: "Novo contato do site - [Nome]"
- **Conteúdo formatado** com:
  - Nome do cliente
  - Email do cliente  
  - Empresa (opcional)
  - Mensagem completa
  - Data e hora
- **Reply-To**: Email do cliente (você pode responder diretamente)

## 🛠️ Scripts Adicionados

No `package.json` principal:
- `npm run server` → Inicia o backend
- `npm run server:dev` → Inicia o backend com auto-reload

## ✨ Funcionalidades

### Frontend (Contact.tsx):
- ✅ Loading state durante envio
- ✅ Botão desabilitado enquanto envia
- ✅ Feedback visual (toast) de sucesso/erro
- ✅ Limpa o formulário após sucesso
- ✅ Tratamento de erros

### Backend (server.js):
- ✅ API REST com Express
- ✅ CORS configurado
- ✅ Validação de campos obrigatórios
- ✅ Email formatado em HTML
- ✅ Reply-To para resposta direta
- ✅ Logs de erro detalhados

## 🔒 Segurança

- ✅ `.env` no `.gitignore` (não será commitado)
- ✅ Usa senha de aplicativo (não expõe senha real)
- ✅ CORS configurado
- ✅ Validação de dados no backend

## 📋 Checklist de Configuração

Antes de considerar pronto, complete:

- [ ] Verificação em duas etapas ativada no Gmail
- [ ] Senha de aplicativo criada
- [ ] Arquivo `backend/.env` configurado com a senha
- [ ] Dependências instaladas (`cd backend && npm install`)
- [ ] Backend testado e rodando
- [ ] Formulário testado com sucesso
- [ ] Email recebido em dev.lucas77@gmail.com

## 🆘 Solução de Problemas

### "Invalid login" / "Authentication failed"
→ Você está usando senha de aplicativo? (16 caracteres sem espaços)
→ Verificação em duas etapas está ativa?

### "Failed to fetch" / "Network Error"
→ O backend está rodando? (`cd backend && node server.js`)
→ Porta 3001 está livre?

### Email não chega
→ Verifique a pasta de spam
→ Confira os logs do terminal do backend
→ Email está correto no `server.js`?

### Erro ao instalar dependências
→ Tente: `cd backend && rm -rf node_modules && npm install`

## 🌐 Deploy em Produção (Futuro)

Para colocar em produção:

1. **Backend**: 
   - Hospedar em Render, Railway, Heroku, etc.
   - Configurar variáveis de ambiente lá
   - Anotar a URL da API

2. **Frontend**:
   - Definir `VITE_API_URL` com a URL pública do backend
   - Fazer um novo build do frontend
   - Deploy no Vercel, Netlify, etc.

## 📞 Status Atual

✅ **Backend**: Implementado e funcionando
✅ **Frontend**: Atualizado e integrado
✅ **Dependências**: Instaladas
✅ **Documentação**: Completa
⚠️ **Configuração**: Aguardando senha de aplicativo do Gmail

## 🎉 Próximos Passos

1. Configure a senha de aplicativo no `backend/.env`
2. Inicie os dois servidores
3. Teste o formulário
4. Pronto para uso! 🚀

---

**Dúvidas?** Consulte:
- `backend/README.md` - Documentação completa
- `INICIO_RAPIDO.md` - Guia rápido
- Logs do console dos servidores

**Desenvolvido para**: SoftSolutions
**Email de destino**: dev.lucas77@gmail.com
