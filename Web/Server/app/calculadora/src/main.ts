import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import * as CookieParser from 'cookie-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule) as NestExpressApplication;
  await app.listen(3000);

  app.use(CookieParser('myCookie'));

}
bootstrap();
