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
import { useNavigate, Link } from "@tanstack/react-router";
import { toast } from "@bizware/ui/components/toaster";
import { cn } from "@bizware/ui/lib/utils";

import {
  PasswordSchema,
  EmailSchema,
  NameSchema,
} from "@/features/auth/validators";
import { Route as WelcomeRoute } from "@/routes/welcome";
import { authClient } from "@/features/auth/client";

export function SignUpForm({
  className,
  ...props
}: ComponentProps<typeof Card>) {
  const navigate = useNavigate({ from: "/sign-up" });
  const signUpForm = useAppForm({
    onSubmit: async ({ formApi, value }) => {
      const { error } = await authClient.signUp.email({
        ...value,
        callbackURL: WelcomeRoute.to,
      });

      if (error) {
        toast.error("Đăng ký thất bại!");
      } else {
        toast.info("Đăng ký thành công! Vui lòng kiểm tra email để xác nhận.");
        formApi.reset();
        await navigate({ to: "/verify-email" });
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
