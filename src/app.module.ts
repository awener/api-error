import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MainController } from './main/main.controller';
import { AuthService } from './auth/auth.service';
import { ApiModule } from './api/api.module';
import { ApiMiddleware } from './api/api.middleware';

@Module({
  imports: [ApiModule],
  controllers: [AppController, MainController],
  providers: [AppService, AuthService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiMiddleware).forRoutes('api')
  }
}
