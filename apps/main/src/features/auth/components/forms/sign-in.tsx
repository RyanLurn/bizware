import type { ComponentProps } from "react";

import {
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
  Card,
} from "@bizware/ui/components/card";
import {
  FieldDescription,
  FieldGroup,
  Field,
} from "@bizware/ui/components/field";
import { useAppForm } from "@bizware/ui/features/form/hook";
import { toast } from "@bizware/ui/components/toaster";
import { Link } from "@tanstack/react-router";
import { cn } from "@bizware/ui/lib/utils";

import {
  PasswordSchema,
  SignInSchema,
  EmailSchema,
} from "@/features/auth/validators";
import { Route as DashboardRoute } from "@/routes/dashboard";
import { authClient } from "@/features/auth/client";

export function SignInForm({
  className,
  ...props
}: ComponentProps<typeof Card>) {
  const signInForm = useAppForm({
    onSubmit: async ({ formApi, value }) => {
      const { error } = await authClient.signIn.email({
        ...value,
        callbackURL: DashboardRoute.to,
      });

      if (error) {
        toast.error("Đăng nhập thất bại!");
      } else {
        toast.success("Đăng nhập thành công!");
        formApi.reset();
      }
    },
    validators: {
      onSubmit: ({ value }) => {
        const parseResult = SignInSchema.safeParse({
          email: value.email.trim().toLowerCase(),
          password: value.password,
        });
        if (!parseResult.success) {
          return parseResult.error.issues;
        }
        return undefined;
      },
    },
    defaultValues: {
      password: "",
      email: "",
    },
    formId: "sign-in-form",
  });

  return (
    <Card className={cn("w-full max-w-sm", className)} {...props}>
      <CardHeader>
        <CardTitle>Đăng nhập</CardTitle>
        <CardDescription>
          Điền thông tin vào đơn bên dưới để đăng nhập vào tài khoản của bạn
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void signInForm.handleSubmit();
          }}
          id={signInForm.formId}
        >
          <signInForm.AppForm>
            <FieldGroup>
              <signInForm.AppField
                children={() => (
                  <signInForm.TextInput
                    placeholder="nguyenvana@gmail.com"
                    label="Địa chỉ email"
                    type="email"
                    required
                  />
                )}
                validators={{
                  onChange: EmailSchema,
                }}
                name="email"
              />
              <signInForm.AppField
                children={() => (
                  <signInForm.TextInput
                    placeholder="********"
                    label="Mật khẩu"
                    type="password"
                    required
                  />
                )}
                validators={{
                  onChange: PasswordSchema,
                }}
                name="password"
              />
              <Field>
                <signInForm.SubmitButton
                  submittingText="Đang xử lý..."
                  submitText="Đăng nhập"
                />
                <FieldDescription className="px-6 text-center">
                  Chưa có tài khoản?{" "}
                  <Link from="/sign-in" to="/sign-up">
                    Đăng ký
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </signInForm.AppForm>
        </form>
      </CardContent>
    </Card>
  );
}
