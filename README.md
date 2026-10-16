# SoftSolutions

Site institucional da SoftSolutions: https://www.softsolutions.com.br

## Tecnologias

- Vite + React 18 + TypeScript
- Tailwind CSS + shadcn/ui
- Função serverless na Vercel (`api/contact.js`) com Nodemailer para o formulário de contato

## Rodando localmente

```sh
npm install
npm run dev          # site em http://localhost:8080
```

Para testar o formulário de contato localmente, suba também o backend:

```sh
cd backend && npm install && cd ..
npm run server:dev   # API em http://localhost:3001
```

Veja `FORMULARIO_CONTATO.md` e `backend/README.md` para configurar o e-mail.

## Variáveis de ambiente

| Variável     | Onde         | Descrição                                   |
| ------------ | ------------ | ------------------------------------------- |
| `EMAIL_USER` | Vercel / backend | Conta Gmail que envia os e-mails         |
| `EMAIL_PASS` | Vercel / backend | Senha de app do Gmail (nunca a senha normal) |

## Onde editar o conteúdo

- **Telefone, e-mail, cidade e redes sociais:** `src/lib/siteConfig.ts`
- **Seções:** `src/components/` (Hero, Services, Process, Projects, About, FAQ, Contact)
- **Cores e tema:** `src/index.css` (variáveis HSL, modo claro e escuro)
- **Imagem de compartilhamento (WhatsApp/LinkedIn):** `public/og-image.png` (1200x630)

## Build e deploy

```sh
npm run build
```

O deploy é feito pela Vercel (`vercel.json`).
