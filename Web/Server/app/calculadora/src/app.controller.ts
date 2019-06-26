import { Controller, Get, Headers,Res, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/suma')
  suma(@Headers() headers, @Res() res) {
      
      if(headers.numerouno!=null&&headers.numerodos!=null){
        const resultado= Number( headers.numerouno)+Number(headers.numerodos);
        return res.status(200).send('Suma: '+resultado);
      }else{
        return res.status(400).send({mensaje:'Error en los parametros',error:400});
      }
  }

  @Post('/resta')
  resta(@Body() headers, @Res() res) {
      
      if(headers.numerouno!=null&&headers.numerodos!=null){
        const resultado= Number( headers.numerouno)-Number(headers.numerodos);
        return res.status(200).send('Resta: '+resultado);
      }else{
        return res.status(400).send({mensaje:'Error en los parametros',error:400});
      }
  }
}
