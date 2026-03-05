import { serializeError } from "serialize-error";

import type { CustomError } from "@/classes/custom";

export function serializeUnknownError(error: unknown): {
  value: unknown;
  type: string;
} {
  // Null / undefined
  if (error === null || error === undefined) {
    return { value: String(error), type: "nullish" };
  }

  // Primitive (string, number, boolean, bigint, symbol)
  if (typeof error !== "object" && typeof error !== "function") {
    return {
      value: typeof error === "symbol" ? error.toString() : error,
      type: typeof error,
    };
  }

  // Plain object or anything else — attempt structured serialization
  try {
    return {
      value: JSON.parse(JSON.stringify(error)),
      type: "object",
    };
  } catch {
    // Circular references, non-serializable values, etc.
    return {
      type: "unserializable",
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      value: String(error),
    };
  }
}

export function serializeCustomError(error: CustomError) {
  const cause = error.cause;
  const serializedCause =
    cause instanceof Error
      ? serializeError(cause)
      : serializeUnknownError(cause);

  const serializedError = {
    retryable: error.retryable,
    expected: error.expected,
    message: error.message,
    context: error.context,
    cause: serializedCause,
    name: error.name,
    code: error.code,
  };

  return serializedError;
}
