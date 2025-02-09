import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiKeyGuard } from 'src/guards/api-key.guard';

@UseGuards(ApiKeyGuard)
@Controller('api')
export class ApiController {
    @Get('test')
    getTest(): string {
        return "Hello world!";
    }

    @Get('turakas')
    getTurakas(): string {
        return "Jou mees";
    }
}
