import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import {join} from "path";
import * as session from 'express-session';
const fileStore= require('session-file-store')(session);

async function bootstrap() {
  const app = await NestFactory
      .create(AppModule) as NestExpressApplication;

  app.use(
    session({
      name: 'server-session-id',
      secret: 'My secret',
      resave: false,
      saveUninitilized: true,
      cookie:{
        secure: false
      },
      store: new fileStore()
    })
  )
  app.setViewEngine('ejs');
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  await app.listen(3000);
}
bootstrap();
