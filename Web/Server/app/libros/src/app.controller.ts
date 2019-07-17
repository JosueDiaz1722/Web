import { Controller, Get,Res, Request, Session,Body,Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('login')
  loginVista(
      @Res() res
  ){
    res.render('login');
  }

  @Post('login')
  login(
      @Body() usuario,
      @Session() session,
      @Res() res
  ){
    if(usuario.username === 'hernan' && usuario.password === '1234'){
      //    QUE HACEMOS
      session.username = usuario.username;
      console.log(usuario);
      res.redirect('/libros/lista');
    }else{
      res.status(400);
      res.send({mensaje:'Error login',error:400})
    }
  }

  @Get('logout')
  logout(
      @Res() res,
      @Session() session,
  ) {
    session.username = undefined;
    session.destroy();
    res.redirect('/login');
  }

  @Get('protegida')
  protegida(
      @Session() session,
      @Res() res
  ) {
    if (session.username) {
      res.render('protegida', {
        nombre: session.username
      });
    } else {
      res.redirect('/login');
    }
  }
}
