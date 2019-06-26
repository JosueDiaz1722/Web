import { Controller, Get, Headers,Res, Body, Post, Patch, Req } from '@nestjs/common';
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
        return res.status(210).send('Suma: '+resultado);
      }else{
        return res.status(400).send({mensaje:'Error en los parametros',error:400});
      }
  }

  @Post('/resta')
  resta( @Body() headers, @Res() res) {
      
      if(headers.numerouno!=null&&headers.numerodos!=null){
        const resultado= Number( headers.numerouno)-Number(headers.numerodos);
        return res.status(403).send('Resta: '+resultado);
      }else{
        return res.status(400).send({mensaje:'Error en los parametros',error:400});
      }
  }

  @Patch('/multiplicacion')
  multipliacion(@Headers() headers, @Body() body, @Res() res){
    if(headers.numerouno!=null&&body.numerodos!=null){
      const resultado= Number( headers.numerouno)*Number(body.numerodos);
      return res.status(403).send('Multiplicacion: '+resultado);
    }else{
      return res.status(400).send({mensaje:'Error en los parametros',error:400});
    }
  }

  @Get('/division')
  division(@Headers() headers, @Body() body, @Res() res){
    if(headers.numerouno!=null&&body.numerodos!=null){
      const resultado= Number( headers.numerouno)/Number(body.numerodos);
      return res.status(403).send('Division: '+resultado);
    }else{
      return res.status(400).send({mensaje:'Error en los parametros',error:400});
    }
  }

  @Get('obtenerCookie')
  obtenerCookie(
    @Res() res,
    @Req() req,
  ){
    const cook=req.cookies;
    console.log(cook);
    res.cookie('micook',
    new Date().toString()
    )
    console.log(cook);
    res.send(cook)
  }
}
