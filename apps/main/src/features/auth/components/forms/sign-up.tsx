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
  SignUpSchema,
  EmailSchema,
  NameSchema,
} from "@/features/auth/validators";
import { Route as DashboardRoute } from "@/routes/dashboard";
import { authClient } from "@/features/auth/client";

export function SignUpForm({
  className,
  ...props
}: ComponentProps<typeof Card>) {
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
        return undefined;
      },
    },
    onSubmit: async ({ formApi, value }) => {
      const { error } = await authClient.signUp.email({
        ...value,
        callbackURL: DashboardRoute.to,
      });

      if (error) {
        toast.error("Đăng ký thất bại!");
      } else {
        toast.success("Đăng ký thành công!");
        formApi.reset();
      }
    },
    defaultValues: {
      confirmPassword: "",
      password: "",
      email: "",
      name: "",
    },
    formId: "sign-up-form",
  });

  return (
    <Card className={cn("w-full max-w-sm", className)} {...props}>
      <CardHeader>
        <CardTitle>Đăng ký tài khoản</CardTitle>
        <CardDescription>
          Điền thông tin vào đơn bên dưới để tạo tài khoản mới
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void signUpForm.handleSubmit();
          }}
          id={signUpForm.formId}
        >
          <signUpForm.AppForm>
            <FieldGroup>
              <signUpForm.AppField
                children={() => (
                  <signUpForm.TextInput
                    placeholder="Nguyễn Văn A"
                    label="Họ và tên"
                    type="text"
                    required
                  />
                )}
                validators={{
                  onChange: NameSchema,
                }}
                name="name"
              />
              <signUpForm.AppField
                children={() => (
                  <signUpForm.TextInput
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
              <signUpForm.AppField
                children={() => (
                  <signUpForm.TextInput
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
              <signUpForm.AppField
                validators={{
                  onChange: ({ fieldApi, value }) => {
                    if (value !== fieldApi.form.getFieldValue("password")) {
                      return { message: "Mật khẩu không khớp" };
                    }
                    return undefined;
                  },
                  onChangeListenTo: ["password"],
                }}
                children={() => (
                  <signUpForm.TextInput
                    label="Xác nhận mật khẩu"
                    placeholder="********"
                    type="password"
                    required
                  />
                )}
                name="confirmPassword"
              />
              <Field>
                <signUpForm.SubmitButton
                  submittingText="Đang tạo..."
                  submitText="Tạo tài khoản"
                />
                <FieldDescription className="px-6 text-center">
                  Đã có tài khoản?{" "}
                  <Link from="/sign-up" to="/sign-in">
                    Đăng nhập
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </signUpForm.AppForm>
        </form>
      </CardContent>
    </Card>
  );
}
