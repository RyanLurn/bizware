import { createFormHook } from "@tanstack/react-form";

import { SubmitButton } from "@/features/form/components/submit-button";
import { fieldContext, formContext } from "@/features/form/context";
import { TextInput } from "@/features/form/components/text-input";

export const { useAppForm } = createFormHook({
  formComponents: { SubmitButton, TextInput },
  fieldComponents: {},
  fieldContext,
  formContext,
});
