import { Module } from "@nestjs/common";
import { ApiController } from "./api.controller";
import { ApiService } from "./api.service";
import { AuthService } from "src/auth/auth.service";

@Module({
  controllers: [ApiController],
  providers: [ApiService, AuthService],
})
export class ApiModule {}
