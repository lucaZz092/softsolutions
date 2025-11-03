import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Senha de aplicativo do Gmail
  },
});

// Rota de teste
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Servidor funcionando!' });
});

// Rota para envio de contato
app.post('/api/contact', async (req, res) => {
  const { name, email, company, message } = req.body;

  // Validação básica
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Por favor, preencha todos os campos obrigatórios.' 
    });
  }

  // Configuração do email
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'dev.lucas77@gmail.com',
    subject: `Novo contato do site - ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">📧 Nova Mensagem de Contato</h2>
        
        <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 5px;">
          <p style="margin: 10px 0;"><strong>👤 Nome:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>📧 Email:</strong> ${email}</p>
          ${company ? `<p style="margin: 10px 0;"><strong>🏢 Empresa:</strong> ${company}</p>` : ''}
        </div>
        
        <div style="margin: 20px 0; padding: 15px; background-color: #ffffff; border-left: 4px solid #4F46E5;">
          <h3 style="color: #4F46E5; margin-top: 0;">💬 Mensagem:</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
        
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #666; font-size: 12px;">
          <p>Este email foi enviado através do formulário de contato do site SoftSolutions</p>
          <p>Data: ${new Date().toLocaleString('pt-BR')}</p>
        </div>
      </div>
    `,
    replyTo: email, // Permite responder diretamente ao cliente
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ 
      success: true, 
      message: 'Mensagem enviada com sucesso!' 
    });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Erro ao enviar mensagem. Por favor, tente novamente.' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
