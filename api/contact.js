import nodemailer from "nodemailer";

const escapeHtml = (value = "") =>
  String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character]);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(request, response) {
  if (request.method === "OPTIONS") {
    return response.status(204).end();
  }

  if (request.method !== "POST") {
    return response.status(405).json({
      success: false,
      message: "Método não permitido.",
    });
  }

  const { name, email, company, message, website } = request.body || {};

  // Honeypot: se preenchido, é robô. Responde "sucesso" sem enviar nada.
  if (website) {
    return response.status(200).json({ success: true, message: "Mensagem enviada com sucesso!" });
  }

  if (!name || !email || !message) {
    return response.status(400).json({
      success: false,
      message: "Por favor, preencha todos os campos obrigatórios.",
    });
  }

  if (
    !EMAIL_REGEX.test(String(email)) ||
    String(name).length > 100 ||
    String(company || "").length > 100 ||
    String(message).length > 3000
  ) {
    return response.status(400).json({
      success: false,
      message: "Verifique os dados informados (e-mail válido, nome e mensagem dentro do limite).",
    });
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return response.status(503).json({
      success: false,
      message: "O servidor de email não está configurado na Vercel.",
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "dev.lucas77@gmail.com",
      replyTo: email,
      subject: `Novo contato do site - ${String(name).replace(/[\r\n]/g, " ")}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2>Nova Mensagem de Contato</h2>
          <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${company ? `<p><strong>Empresa:</strong> ${escapeHtml(company)}</p>` : ""}
          <h3>Mensagem:</h3>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    return response.status(200).json({
      success: true,
      message: "Mensagem enviada com sucesso!",
    });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return response.status(500).json({
      success: false,
      message: "Não foi possível enviar o email. Verifique as credenciais SMTP.",
    });
  }
}