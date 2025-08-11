import { AppError } from './AppError';

export class ValidationError extends AppError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message, options);
  }
}
