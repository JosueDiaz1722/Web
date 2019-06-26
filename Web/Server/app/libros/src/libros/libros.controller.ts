import {Controller, Get, Post, Res, Body, Param, Req} from "@nestjs/common";
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

    @Post('crear')
    crearLibroPost(
        @Body() libro:Libro,
        @Res() res,
    ){
        libro.edicion = Number(libro.edicion);
        libro.precio = Number(libro.precio);
        const date = new Date(libro.fecha);

        this._librosService.crear(libro);
        console.log(formatDate(libro.fecha) +"****"+ libro.fecha);

        res.redirect('/libros/lista');

        function formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;

            return [year, month, day].join('-');
        }

    }

    @Get('editar/:idLibro')
     actualizarLibroVista(
        @Res() response,
        @Param('idLibro') idLibro: string,
    ) {
        // El "+" le transforma en numero a un string
        // numerico
        const libroEncontrado = this._librosService.buscarPorId(+idLibro);

        response
            .render(
                'libros/editar-libro',
                {
                    libro: libroEncontrado
                }
            )
    }

    @Post('editar/:idLibro')
    actualizarLibro(
        @Res() res,
        @Param('idLibro') idLibro:String,
        @Body() libro: Libro
        )
    {
        console.log(libro);
        libro.id=+idLibro;
        this._librosService.actualizar(libro,+idLibro);
        res.redirect('/libros/lista');
    }


    @Post('eliminar')
    eliminarLibro(@Res() res,
                  @Body('id') id: string) {

        this._librosService.eliminarPorId(Number(id));
        res.redirect('/libros/lista');
    }

    @Post('buscar')
    buscar(
        @Res() res,
        @Body('busqueda') busqueda:string
    ){
        const listaBusqueda:Libro[]=this._librosService.buscarPorNombre(busqueda);
        console.log(listaBusqueda);
        console.log(busqueda);
        if(listaBusqueda!=null){
            res.render('libros/listar-libros',{arregloLibros:listaBusqueda})
        }else{
        res.redirect('libros/lista');
    }
}
}