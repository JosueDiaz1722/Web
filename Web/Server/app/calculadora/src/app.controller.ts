import { Controller, Get, Headers,Res, Body, Post, Patch, Req, Query,Put, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Put('/suma/:numeroDos')
  suma(@Param('numeroDos') numeroDos: number, @Headers() headers, @Res() res) {
      
      if(headers.numerouno!=null&&numeroDos!=null){
        const resultado= Number( headers.numerouno)+Number(numeroDos);
        return res.status(210).send('Suma: '+resultado);
      }else{
        return res.status(400).send({mensaje:'Error en los parametros',error:400});
      }
  }

  @Post('/resta')
  resta( @Query('numerodos') numerodos, @Res() res, @Req() req) {
      
      console.log(numerodos);
      console.log(req.cookies.cookie1)
      if(numerodos!=null){
        const resultado= Number( req.cookies.cookie1)-Number(numerodos);
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
  division(@Req() req, @Res() res){
    if(req.cookies.cookie1!=null&&req.cookies.cookie2!=null&&req.cookies.cookie2!=0){
      const resultado= Number( req.cookies.cookie1)/Number(req.cookies.cookie2);
      return res.status(403).send('Division: '+resultado);
    }else{
      return res.status(400).send({mensaje:'Error en los parametros',error:400});
    }
  }

  @Get('')
  obtenerCookie(
    @Res() res,
    @Req() req,
  ){
    const cook=req.cookies;
    res.cookie('micook',
    new Date().toString()
    );
    res.cookie('numero',18);
    res.cookie('segura',19,{signed: true});

    const cookieSegura=req.signedCookies.segura;
    console.log(req.signedCookies);


    if(cookieSegura){
      console.log("Cookie segura",cookieSegura);
    }else{
      console.log("Cookie no es segura");
    }

    res.send(cook)
  }
}
