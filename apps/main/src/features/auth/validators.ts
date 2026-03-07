import { z } from "zod";

import {
  MIN_PASSWORD_LENGTH,
  MAX_PASSWORD_LENGTH,
} from "@/features/auth/constants";

// For context, the longest name in Vietnam is only 43 characters long
export const NameSchema = z.string().min(1).max(150);

export const EmailSchema = z.email({ pattern: z.regexes.unicodeEmail });

export const PasswordSchema = z
  .string()
  .min(MIN_PASSWORD_LENGTH)
  .max(MAX_PASSWORD_LENGTH);

export const SignUpSchema = z.object({
  password: PasswordSchema,
  email: EmailSchema,
  name: NameSchema,
});
