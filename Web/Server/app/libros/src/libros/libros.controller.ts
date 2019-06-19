import {Controller, Get, Post, Res, Body, Param} from "@nestjs/common";
import {LibrosService} from "./libros.service";
import {Libro} from "./interface/libro";
import { response } from "express";

@Controller('/libros')
export class LibrosController {

    constructor(private readonly _librosService: LibrosService) {

    }

    @Get('lista')
    listarLibros(
        @Res() res
    ) {
        const arreglo = this._librosService.bddLibros;
        res.render('libros/listar-libros', {
            arregloLibros: arreglo
        })
    }

    @Get('crear')
    crearLibro(
        @Res() res
    ) {
        res.render('libros/crear-libro')
    }

    @Get('editarLibro/:id')
    actulizarLibro(
        @Res() response,@Param('id') id: string
    ) {
        const libroEncontrado = this._librosService.buscarPorId(+id);
        response
        .render(
            'libros/editar-libro',{
                libro: libroEncontrado
            }
        )
    }

    @Post('crear')
    crearLibroPost(
        @Body() libro:Libro,
        @Res() res,
    ){
        libro.edicion = Number(libro.edicion);
        libro.precio = Number(libro.precio);
        libro.fecha = new Date(libro.fecha);

        this._librosService.crear(libro);

        res.redirect('/libros/lista');

    }

    @Post('editar/:id')
    actualizarLibro(@Res() res,
                  @Param('id') id: string, 
                  @Body() libro:Libro) {
        console.log(libro)
        libro.id=+id
        
        this._librosService.actualizar(libro,+id);
        res.redirect('/libros/lista');
    }

    @Post('eliminar')
    eliminarLibro(@Res() res,
                  @Body('id') id: number) {
        this._librosService.eliminarPorId(id);
        res.redirect('/libros/lista');
    }
}