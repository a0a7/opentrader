import {
  Injectable,
  Logger,
  NestMiddleware,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction, Request } from 'express';
import { IncomingHttpHeaders } from 'http';
import { FirestoreService } from 'src/core/db/firestore/firestore.service';

export const REQ_USER_ACCOUNT_KEY = 'user';

export function extractBearerToken(
  headers: IncomingHttpHeaders,
): string | null {
  if (typeof headers.authorization !== 'string') {
    return null;
  }

  const idToken = headers.authorization.split('Bearer ')[1];

  return idToken || null;
}

@Injectable()
export class FirebaseUserMiddleware implements NestMiddleware {
  private readonly logger = new Logger(FirebaseUserMiddleware.name);

  constructor(private readonly firestore: FirestoreService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const idToken = extractBearerToken(req.headers);

    if (!idToken) {
      throw new UnauthorizedException(
        `Missing or invalid "Authorization: Bearer idToken"`,
      );
    }

    try {
      const user = await this.firestore.user.findOneByIdToken(idToken);

      (req as any)[REQ_USER_ACCOUNT_KEY] = user;
    } catch (err) {
      this.logger.debug(err.message);
      throw new NotFoundException(err.message);
    }

    next();
  }
}