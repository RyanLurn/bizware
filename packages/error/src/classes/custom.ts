export class CustomError extends Error {
  context?: Record<string, unknown>;
  retryable: boolean;
  expected: boolean;
  code: string;

  constructor(
    message: string,
    {
      retryable,
      expected,
      context,
      cause,
      code,
    }: {
      context?: Record<string, unknown>;
      retryable: boolean;
      expected: boolean;
      cause?: unknown;
      code: string;
    }
  ) {
    super(message, { cause });
    this.context = context;
    this.retryable = retryable;
    this.expected = expected;
    this.code = code;
  }
}
