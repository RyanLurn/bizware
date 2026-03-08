import type { ComponentProps, JSX } from "react";

import {
  FieldDescription,
  FieldLabel,
  FieldError,
  Field,
} from "@/components/field";
import { useFieldContext, useFormContext } from "@/features/form/context";
import { Input } from "@/components/input";

interface TextInputProps extends Omit<
  ComponentProps<typeof Input>,
  "aria-invalid" | "onChange" | "disabled" | "onBlur" | "value" | "name" | "id"
> {
  description?: JSX.Element | string;
  rightLabel?: JSX.Element | string;
  label: string;
}

export function TextInput({
  placeholder,
  description,
  rightLabel,
  label,
  type,
  ...props
}: TextInputProps) {
  const field = useFieldContext<string>();
  const form = useFormContext();

  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
  const errors = field.state.meta.errors;

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Field data-invalid={isInvalid}>
          <div className="flex items-center">
            <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
            {rightLabel && (
              <div className="ml-auto inline-block text-sm">{rightLabel}</div>
            )}
          </div>
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
