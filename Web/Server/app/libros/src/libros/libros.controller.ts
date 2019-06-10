import { Controller, Get, Post, Res,Body } from '@nestjs/common';
import { LibrosService } from './libros.service';

@Controller()
export class LibrosController {
  constructor(private readonly _librosService: LibrosService) {}

  @Get('lista')
  listarLibros(
      @Res() res
  ){
      const arregloLibros = this._librosService.bddlibros;
      res.render('libros/lista-libros'),{arregloLibros: arregloLibros}
  }
  
}
