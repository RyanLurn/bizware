/* eslint-disable perfectionist/sort-modules */

export type Success<TData = unknown> = { success: true; data: TData };
export type Failure<TError extends Error = Error> = {
  success: false;
  error: TError;
};

export type Result<TData, TError extends Error> =
  | Failure<TError>
  | Success<TData>;
