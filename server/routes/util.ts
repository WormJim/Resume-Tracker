import { RequestHandler } from 'express';
import expAsyncHandler from 'express-async-handler';

export class StatusError extends Error {
  public constructor(public code: number, message?: string) {
    super(
      message ||
        (code === 400 && 'Bad Request') ||
        (code === 401 && 'Unauthorized') ||
        (code === 403 && 'Forbidden') ||
        (code === 404 && 'Not Found') ||
        (code === 409 && 'Conflict') ||
        'Error',
    );
  }
}

export default function asyncHandler(handler: RequestHandler) {
  return expAsyncHandler(async (req, res, next) => {
    try {
      await handler(req, res, next);
    } catch (error) {
      if (error instanceof StatusError) {
        res.status(error.code).send(error.message);
      } else {
        throw error;
      }
    }
  });
}
