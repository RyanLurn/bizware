import type { ComponentProps } from "react";

import {
  FieldDescription,
  FieldLabel,
  FieldError,
  Field,
  Input,
} from "@/components";
import { useFieldContext, useFormContext } from "@/features/form/context";

interface TextFieldProps extends Omit<
  ComponentProps<typeof Input>,
  "aria-invalid" | "onChange" | "disabled" | "onBlur" | "value" | "name" | "id"
> {
  description?: string;
  label: string;
}

export function TextField({
  placeholder,
  description,
  label,
  type,
  ...props
}: TextFieldProps) {
  const field = useFieldContext<string>();
  const form = useFormContext();

  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
  const errors = field.state.meta.errors;

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Field data-invalid={isInvalid}>
          <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
          <Input
            onChange={(e) => field.handleChange(e.target.value)}
            placeholder={placeholder}
            onBlur={field.handleBlur}
            value={field.state.value}
            aria-invalid={isInvalid}
            disabled={isSubmitting}
            name={field.name}
            id={field.name}
            type={type}
            {...props}
          />
          {description && <FieldDescription>{description}</FieldDescription>}
          {isInvalid && <FieldError errors={errors} />}
        </Field>
      )}
    </form.Subscribe>
  );
}
