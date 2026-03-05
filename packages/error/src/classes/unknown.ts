import { serializeUnknownError } from "@/utils/serialize";
import { CustomError } from "@/classes/custom";

export class UnknownError extends CustomError {
  declare cause: ReturnType<typeof serializeUnknownError>;
  declare code: "UNKNOWN_ERROR";
  declare retryable: false;
  declare expected: false;

  constructor(
    message: string,
    {
      context,
      cause,
    }: {
      context?: Record<string, unknown>;
      cause: unknown;
    }
  ) {
    const serializedCause = serializeUnknownError(cause);
    super(message, {
      cause: serializedCause,
      code: "UNKNOWN_ERROR",
      retryable: false,
      expected: false,
      context,
    });
  }
}
