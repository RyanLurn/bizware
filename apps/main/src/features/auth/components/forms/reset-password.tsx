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

import { PasswordSchema } from "@/features/auth/validators";
import { authClient } from "@/features/auth/client";

interface ResetPasswordFormProps extends ComponentProps<typeof Card> {
  token: string;
}

export function ResetPasswordForm({
  className,
  token,
  ...props
}: ResetPasswordFormProps) {
  const resetPasswordForm = useAppForm({
    onSubmit: async ({ formApi, value }) => {
      const { error } = await authClient.resetPassword({
        newPassword: value.newPassword,
        token,
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
        const parseResult = PasswordSchema.safeParse(value.newPassword);
        if (!parseResult.success) {
          return parseResult.error.issues;
        }
        return undefined;
      },
    },
    defaultValues: {
      newPassword: "",
    },
    formId: "reset-password-form",
  });

  return (
    <Card className={cn("w-full max-w-sm", className)} {...props}>
      <CardHeader>
        <CardTitle>Đặt lại mật khẩu</CardTitle>
        <CardDescription>
          Nhập mật khẩu mới cho tài khoản của bạn
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void resetPasswordForm.handleSubmit();
          }}
          id={resetPasswordForm.formId}
        >
          <resetPasswordForm.AppForm>
            <FieldGroup>
              <resetPasswordForm.AppField
                children={() => (
                  <resetPasswordForm.TextInput
                    placeholder="********"
                    label="Mật khẩu mới"
                    type="password"
                    required
                  />
                )}
                validators={{
                  onChange: PasswordSchema,
                }}
                name="newPassword"
              />
              <Field>
                <resetPasswordForm.SubmitButton
                  submittingText="Đang xử lý..."
                  submitText="Xác nhận"
                />
              </Field>
            </FieldGroup>
          </resetPasswordForm.AppForm>
        </form>
      </CardContent>
    </Card>
  );
}
