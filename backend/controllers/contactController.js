import nodemailer from "nodemailer";

export const sendContactMessage = async (req, res) => {
  const { nome, email, empresa, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ error: "Preencha todos os campos obrigatórios." });
  }

  try {
    // Configuração do transporte de e-mail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // E-mail que será enviado
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Nova mensagem de ${nome} (${empresa || "Pessoa Física"})`,
      text: `
        Nome: ${nome}
        Email: ${email}
        Empresa: ${empresa || "Não informado"}
        Mensagem: ${mensagem}
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Mensagem enviada com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao enviar a mensagem." });
  }
};
