import { CanActivate, ExecutionContext, HttpException, Injectable, HttpStatus } from "@nestjs/common";
import { Observable } from "rxjs";
import { AuthService } from "src/auth/auth.service";

@Injectable()

export class ApiKeyGuard implements CanActivate {
    constructor(private authService: AuthService) {

    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        try {
            const request: Request = context.switchToHttp().getRequest();
            const apiKey = request.headers['x-api-key'];
            const validateKey = await this.authService.validateApiKey(apiKey);
        return validateKey;
        } catch (error) {
            throw new HttpException(error.message || 'Invalid API Key', HttpStatus.UNAUTHORIZED);
        }
    }
}