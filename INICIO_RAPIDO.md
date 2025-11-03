# 🚀 Guia Rápido - Iniciar Sistema de Contato

## ⚡ Passo a Passo (5 minutos)

### 1️⃣ Configure sua Senha de Email
```bash
# Acesse e crie uma senha de aplicativo:
# https://myaccount.google.com/apppasswords

# Edite o arquivo backend/.env e cole sua senha:
EMAIL_PASS=sua_senha_de_16_caracteres
```

### 2️⃣ Abra DOIS terminais

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
npm run server
```

### 3️⃣ Acesse e Teste
- Abra: http://localhost:5173
- Vá até a seção "Contato"
- Preencha e envie o formulário
- Verifique o email em **dev.lucas77@gmail.com**

---

## 📋 Checklist

- [ ] Verificação em duas etapas ativada no Gmail
- [ ] Senha de aplicativo criada
- [ ] Arquivo `backend/.env` configurado
- [ ] Backend instalado (`cd backend && npm install`)
- [ ] Dois servidores rodando
- [ ] Formulário testado com sucesso

---

## 🆘 Problemas Comuns

**Erro de autenticação?**
→ Use senha de aplicativo (16 caracteres), não sua senha normal do Gmail

**"Failed to fetch"?**
→ Certifique-se de que o backend está rodando na porta 3001

**Email não chega?**
→ Verifique spam e os logs do terminal do backend

---

📚 **Documentação completa:** `backend/README.md`
