import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import * as cookieParser from 'cookie-parser';
async function bootstrap() {

  const app = await NestFactory.create(AppModule) as NestExpressApplication;
  app.use(cookieParser('myCookie'));
  await app.listen(3001);
  
  
}
bootstrap();
