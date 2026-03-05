import { CustomError } from "@/classes/custom";

export class BrowserOnlyError extends CustomError {
  declare context: { feature: string; apis: string[] };
  declare code: "BROWSER_ONLY_ERROR";
  declare retryable: false;
  declare expected: true;

  constructor({ context }: { context: { feature: string; apis: string[] } }) {
    super(
      `"${context.feature}" requires browser APIs (${context.apis.join(", ")}) and cannot be used in other environments.`,
      {
        code: "BROWSER_ONLY_ERROR",
        retryable: false,
        expected: true,
        context,
      }
    );
  }
}
