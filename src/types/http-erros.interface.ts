/* eslint-disable @typescript-eslint/no-empty-object-type */

interface ProblemDetails {
  title: string;
  detail?: string;
  status: number;
  errors?: Record<string, string[]>;
}

interface BadRequestError extends ProblemDetails {}
interface UnauthorizedError extends ProblemDetails {}
interface ValidationError extends ProblemDetails {}
interface NotFoundError extends ProblemDetails {}
interface UnhandledException extends ProblemDetails {}
interface NetworkError extends ProblemDetails {}

type ApiError =
  | BadRequestError
  | NetworkError
  | NotFoundError
  | UnhandledException
  | UnauthorizedError
  | ValidationError;

export type {
  ApiError,
  BadRequestError,
  NetworkError,
  NotFoundError,
  ProblemDetails,
  UnauthorizedError,
  UnhandledException,
  ValidationError,
};
