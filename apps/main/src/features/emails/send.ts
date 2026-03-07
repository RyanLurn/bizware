import type { Email } from "@/features/emails/types";

import { sendWithEthereal } from "@/features/emails/adapter/ethereal/send";

export async function sendEmail({ email }: { email: Email }) {
  if (process.env.NODE_ENV === "production") {
    throw new Error("Email sending not yet implemented for production");
  }

  await sendWithEthereal({ email });
}
