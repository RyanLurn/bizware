import type { BetterAuthOptions } from "better-auth";

import type { Email } from "@/features/emails/types";

import {
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
} from "@/features/auth/constants";
import { sendEmail } from "@/features/emails/send";

export const emailPasswordOptions: BetterAuthOptions = {
  emailVerification: {
    // eslint-disable-next-line @typescript-eslint/require-await
    sendVerificationEmail: async ({ user, url }) => {
      const verificationEmail: Email = {
        html: `<p>Click vào đường link sau để xác thực địa chỉ email của bạn: <a href="${url}">${url}</a></p>`,
        text: `Click vào đường link sau để xác thực địa chỉ email của bạn: ${url}`,
        subject: "Xác thực địa chỉ email của bạn",
        from: "noreply@bizware.com",
        to: user.email,
      };

      // Avoid awaiting the email sending to prevent timing attacks.
      void sendEmail({ email: verificationEmail });
    },
  },
  emailAndPassword: {
    maxPasswordLength: MAX_PASSWORD_LENGTH,
    minPasswordLength: MIN_PASSWORD_LENGTH,
    enabled: true,
  },
};
