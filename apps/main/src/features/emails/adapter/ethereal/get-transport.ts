import { createTestAccount, createTransport } from "nodemailer";

let cachedTransporter: Awaited<ReturnType<typeof createTransport>> | undefined;

export async function getEtherealTransport() {
  if (cachedTransporter) {
    return cachedTransporter;
  }

  const testAccount = await createTestAccount();
  const transporter = createTransport({
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
    host: "smtp.ethereal.email",
    secure: false,
    port: 587,
  });

  cachedTransporter = transporter;
  return cachedTransporter;
}
