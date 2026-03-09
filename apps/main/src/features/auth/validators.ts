import { z } from "zod";

import {
  MIN_PASSWORD_LENGTH,
  MAX_PASSWORD_LENGTH,
  MAX_EMAIL_LENGTH,
  MAX_NAME_LENGTH,
} from "@/features/auth/constants";

// For context, the longest name in Vietnam is only 43 characters long
export const NameSchema = z
  .string()
  .min(1, "Họ và tên không được để trống.")
  .max(
    MAX_NAME_LENGTH,
    `Họ và tên không được vượt quá ${MAX_NAME_LENGTH} ký tự.`
  );

export const EmailSchema = z
  .email({
    pattern: z.regexes.unicodeEmail,
    error: "Email không hợp lệ.",
  })
  .max(
    MAX_EMAIL_LENGTH,
    `Email không được vượt quá ${MAX_EMAIL_LENGTH} ký tự.`
  );

export const PasswordSchema = z
  .string()
  .min(
    MIN_PASSWORD_LENGTH,
    `Mật khẩu phải có ít nhất ${MIN_PASSWORD_LENGTH} ký tự.`
  )
  .max(
    MAX_PASSWORD_LENGTH,
    `Mật khẩu không được vượt quá ${MAX_PASSWORD_LENGTH} ký tự.`
  );

export const SignUpSchema = z.object({
  password: PasswordSchema,
  email: EmailSchema,
  name: NameSchema,
});

export const SignInSchema = z.object({
  password: PasswordSchema,
  email: EmailSchema,
});

export const VerificationRouteSearchParamsSchema = z.union([
  z.object({ token: z.string().min(1) }),
  z.object({ error: z.string().min(1) }),
]);
