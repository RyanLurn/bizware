import { getTestMessageUrl } from "nodemailer";

import type { Email } from "@/features/emails/types";

import { getEtherealTransport } from "@/features/emails/adapter/ethereal/get-transport";

export async function sendWithEthereal({ email }: { email: Email }) {
  const transporter = await getEtherealTransport();
  const info = await transporter.sendMail(email);
  console.log("Preview URL:", getTestMessageUrl(info));
}
