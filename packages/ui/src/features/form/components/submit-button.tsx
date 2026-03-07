import type { ComponentProps } from "react";

import { useFormContext } from "@/features/form/context";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/button";

interface SubmitButtonProps extends Omit<
  ComponentProps<typeof Button>,
  "disabled" | "type" | "form"
> {
  submittingText: string;
  submitText: string;
}

export function SubmitButton({
  submittingText,
  submitText,
  ...props
}: SubmitButtonProps) {
  const form = useFormContext();

  return (
    <form.Subscribe
      selector={(state) => ({
        isSubmitting: state.isSubmitting,
        isPristine: state.isPristine,
        canSubmit: state.canSubmit,
      })}
    >
      {({ isSubmitting, isPristine, canSubmit }) => (
        <Button
          disabled={!canSubmit || isSubmitting || isPristine}
          form={form.formId}
          type="submit"
          {...props}
        >
          {isSubmitting ? (
            <>
              <Spinner />
              {submittingText}
            </>
          ) : (
            submitText
          )}
        </Button>
      )}
    </form.Subscribe>
  );
}
