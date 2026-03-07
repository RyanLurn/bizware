import { createFormHook } from "@tanstack/react-form";

import { fieldContext, formContext } from "@/features/form/context";

export const { useAppForm } = createFormHook({
  fieldComponents: {},
  formComponents: {},
  fieldContext,
  formContext,
});
