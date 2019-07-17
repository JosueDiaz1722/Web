import {Controller, Get, Post, Res, Body, Param, Req, Query} from "@nestjs/common";
import {LibrosService} from "./libros.service";
import {Libro} from "./interface/libro";
import {validate} from "class-validator";
import {LibrosCreateDto} from "./dto/libro.create.dto";

@Controller('/libros')
export class LibrosController {

    constructor(private readonly _librosService: LibrosService) {

    }


/*
    @Get('lista')
    listarLibros(
        @Res() res
    ) {
        const arreglo = this._librosService.bddLibros;
        res.render('libros/lista-libros', {
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
        @Req() req,
        @Body('busqueda') busqueda:string
    ){
        const listaBusqueda:Libro[]=this._librosService.buscarPorNombre(busqueda);
        console.log(listaBusqueda);
        console.log(busqueda);
        if(listaBusqueda!=null){
            res.render('libros/lista-libros',{arregloLibros:listaBusqueda})
        }else{
        res.redirect('libros/lista');
    }
}
*/


    @Get('lista')
    async listarLibros(
        @Res() res
    ) {
        const arregloLibros = await this._librosService.buscar();

        res.render('libros/lista-libros', {
            arregloLibros: arregloLibros
        })
    }

    @Get('crear')
    crearLibro(
        @Res() res,
        @Query('mensaje') mensaje:string,
    ) {

        res.render(
            'libros/crear-editar',{
                mensaje: mensaje
            }
        )
    }

    @Post('crear')
    async crearLibroPost(
        @Body() libro: Libro,
        @Res() res,
    ) {
        libro.edicion = Number(libro.edicion);
        libro.precio = Number(libro.precio);
        libro.fecha = libro.fecha ? new Date(libro.fecha) : undefined;


        let libroAValidar = new LibrosCreateDto();

        libroAValidar.nombre = libro.nombre;
        libroAValidar.tipo = libro.tipo;
        libroAValidar.fecha = libro.fecha;
        libroAValidar.precio = libro.precio;
        libroAValidar.edicion = libro.edicion;

        try {

            const errores = await validate(libroAValidar);
            console.log(errores);
            console.log(libroAValidar);
            console.log(libro);
            if (errores.length > 0) {

                console.error(errores);
                res.redirect('/libro/crear?mensaje=Tienes un error en el formulario');


            } else {

                const respuestaCrear = await this._librosService
                    .crear(libro); // Promesa

                console.log('RESPUESTA: ', respuestaCrear);

                res.redirect('/libros/lista');
            }
        } catch (e) {
            console.error(e);
            res.status(500);
            res.send({mensaje: 'Error', codigo: 500});
        }
    }

}