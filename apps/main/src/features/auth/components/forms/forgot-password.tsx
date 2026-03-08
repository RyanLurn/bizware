import type { ComponentProps } from "react";

import {
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
  Card,
} from "@bizware/ui/components/card";
import { FieldGroup, Field } from "@bizware/ui/components/field";
import { useAppForm } from "@bizware/ui/features/form/hook";
import { toast } from "@bizware/ui/components/toaster";
import { cn } from "@bizware/ui/lib/utils";

import { Route as ResetPasswordRoute } from "@/routes/(auth)/reset-password";
import { EmailSchema } from "@/features/auth/validators";
import { authClient } from "@/features/auth/client";

export function ForgotPasswordForm({
  className,
  ...props
}: ComponentProps<typeof Card>) {
  const forgotPasswordForm = useAppForm({
    onSubmit: async ({ formApi, value }) => {
      const { error } = await authClient.requestPasswordReset({
        redirectTo: ResetPasswordRoute.to,
        email: value.email,
      });

      if (error) {
        toast.error("Đã xảy ra lỗi. Không thể xử lý yêu cầu của bạn.");
      } else {
        toast.info("Yêu cầu đặt lại mật khẩu của bạn đã được gửi.");
        formApi.reset();
      }
    },
    validators: {
      onSubmit: ({ value }) => {
        const parseResult = EmailSchema.safeParse(
          value.email.trim().toLowerCase()
        );
        if (!parseResult.success) {
          return parseResult.error.issues;
        }
        return undefined;
      },
    },
    defaultValues: {
      email: "",
    },
    formId: "forgot-password-form",
  });

  return (
    <Card className={cn("w-full max-w-sm", className)} {...props}>
      <CardHeader>
        <CardTitle>Yêu cầu đặt lại mật khẩu</CardTitle>
        <CardDescription>
          Nhập địa chỉ email của bạn để nhận liên kết đặt lại mật khẩu
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void forgotPasswordForm.handleSubmit();
          }}
          id={forgotPasswordForm.formId}
        >
          <forgotPasswordForm.AppForm>
            <FieldGroup>
              <forgotPasswordForm.AppField
                children={() => (
                  <forgotPasswordForm.TextInput
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
              <Field>
                <forgotPasswordForm.SubmitButton
                  submittingText="Đang xử lý..."
                  submitText="Xác nhận"
                />
              </Field>
            </FieldGroup>
          </forgotPasswordForm.AppForm>
        </form>
      </CardContent>
    </Card>
  );
}
