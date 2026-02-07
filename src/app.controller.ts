import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getMain(): string {
    for (let i = 0; i < 20; i++) {
      const n = i;
      console.log("hehehe - monkey");
      const arr = [1, 2, 3, 4];
      arr.forEach((n) => n + 22);
      console.log("what the hell is this");
    }
    return "this should be one very fucking long line, let us see how this goes and then go on after this and do some crazy stuff with it, okei??";
  }
}
