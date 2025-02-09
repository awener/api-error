import { Injectable, NestMiddleware } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class ApiMiddleware implements NestMiddleware {
  constructor(private authService: AuthService) {

  }
  use(req: any, res: any, next: () => void) {
    const apiKey = req.headers['x-api-key'];
    console.error(apiKey);
    return next();
  }
}
