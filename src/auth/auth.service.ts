import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    async validateApiKey(key: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (key == 'asd') return resolve(true);
            return reject(false);
        });
    }
}
