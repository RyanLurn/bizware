import {
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
  Card,
} from "@bizware/ui/components/card";
import { useAppForm } from "@bizware/ui/features/form/hook";
import { FieldGroup } from "@bizware/ui/components/field";
import { toast } from "@bizware/ui/components/toaster";

import { Route as DashboardRoute } from "@/routes/dashboard";
import { SignUpSchema } from "@/features/auth/validators";
import { authClient } from "@/features/auth/client";

export function SignUpForm() {
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
    onSubmit: async ({ value }) => {
      const { error } = await authClient.signUp.email({
        ...value,
        callbackURL: DashboardRoute.to,
      });

      if (error) {
        toast.error("Đăng ký thất bại!");
      } else {
        toast.success("Đăng ký thành công!");
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
    <Card>
      <CardHeader>
        <CardTitle>Đăng ký tài khoản</CardTitle>
        <CardDescription>
          Điền thông tin vào đơn bên dưới để tạo tài khoản mới
        </CardDescription>
      </CardHeader>
      <CardContent>
        <signUpForm.AppForm>
          <FieldGroup>
            <signUpForm.TextInput
              placeholder="Nguyễn Văn A"
              label="Họ và tên"
              type="text"
            />
            <signUpForm.TextInput
              description="Chúng tôi dùng email này xác nhận tài khoản và liên hệ với bạn. Vì vậy, hãy chọn email bạn thường dùng."
              placeholder="nguyenvana@gmail.com"
              label="Địa chỉ email"
              type="email"
            />
            <signUpForm.TextInput
              placeholder="********"
              label="Mật khẩu"
              type="password"
            />
            <signUpForm.TextInput
              label="Xác nhận mật khẩu"
              placeholder="********"
              type="password"
            />
          </FieldGroup>
        </signUpForm.AppForm>
      </CardContent>
    </Card>
  );
}
