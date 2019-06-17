import {Controller, Get, Post, Res, Body} from "@nestjs/common";
import {LibrosService} from "./libros.service";
import {Libro} from "./interface/libro";

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

    @Get('editarLibro')
    editarLibro(
        @Res() res
    ) {
        res.render('libros/editar-libro')
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

    @Post('editar')
    actualizarLibro(@Res() res,
                  @Body('id') id: number) {
        this._librosService.buscarPorId(id);
        
        res.redirect('/libros/editarLibro');
    }

    @Post('eliminar')
    eliminarLibro(@Res() res,
                  @Body('id') id: number) {
        this._librosService.eliminarPorId(id);
        res.redirect('/libros/lista');
    }
}