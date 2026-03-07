import { useAppForm } from "@bizware/ui/features/form/hook";

import { SignUpSchema } from "@/features/auth/validators";

export function SignUp() {
  const signUpForm = useAppForm({
    validators: {
      onSubmit: ({ value }) => {
        const parseResult = SignUpSchema.safeParse({
          email: value.email.trim().toLowerCase(),
          password: value.password,
          name: value.name.trim(),
        });
        if (!parseResult.success) {
          return parseResult.error.issues;
        }
      },
    },
    defaultValues: {
      password: "",
      email: "",
      name: "",
    },
  });
  return <div>Sign Up</div>;
}
