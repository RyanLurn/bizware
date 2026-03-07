import type { BetterAuthOptions } from "better-auth";

import {
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
} from "@/features/auth/constants";

export const emailPasswordOptions: BetterAuthOptions = {
  emailAndPassword: {
    maxPasswordLength: MAX_PASSWORD_LENGTH,
    minPasswordLength: MIN_PASSWORD_LENGTH,
    enabled: true,
  },
};
