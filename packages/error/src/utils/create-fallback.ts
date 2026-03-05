import { UnexpectedError } from "@/classes/unexpected";
import { UnknownError } from "@/classes/unknown";

export type FallbackError = UnexpectedError | UnknownError;

export function createFallbackError(
  message: string,
  {
    context,
    cause,
  }: {
    context?: Record<string, unknown>;
    cause: unknown;
  }
): FallbackError {
  if (cause instanceof Error) {
    return new UnexpectedError(message, { context, cause });
  }
  return new UnknownError(message, { context, cause });
}
