import {Controller, Get, Post, Res, Body, Param, Req} from "@nestjs/common";
import {ClientesService} from "./clientes.service";
import {Cliente} from "./interface/cliente";


@Controller('/clientes')
export class clientesController {

    constructor(private readonly _clientesService: ClientesService) {

    }

    @Get('lista')
    listarclientes(
        @Res() res
    ) {
        const arreglo = this._clientesService.bddClientes;
        res.render('clientes/listar-clientes', {
            arregloclientes: arreglo
        })
    }

    @Get('crear')
    crearcliente(
        @Res() res
    ) {
        res.render('clientes/crear-cliente')
    }

    @Get('cliente')
    listaCliente(
        @Res() res
    ) {
        res.render('clientes/listar-clientes')
    }


    @Post('crear')
    crearLibroPost(
        @Body() cliente:Cliente,
        @Res() res,
    ){
        cliente.cedula = cliente.cedula;
        cliente.nombre = cliente.nombre;
        cliente.apellido = cliente.apellido;
        cliente.dirreccion = cliente.dirreccion;
        const date = new Date(cliente.fechaNacimiento);

        this._clientesService.crear(cliente);
        console.log(formatDate(cliente.fechaNacimiento) +"****"+ cliente.fechaNacimiento);

        res.redirect('/clientes/lista');

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

    @Get('editar/:idcliente')
     actualizarclienteVista(
        @Res() response,
        @Param('idcliente') idcliente: string,
    ) {
        // El "+" le transforma en numero a un string
        // numerico
        const clienteEncontrado = this._clientesService.buscarPorId(+idcliente);

        response
            .render(
                'clientes/editar-cliente',
                {
                    cliente: clienteEncontrado
                }
            )
    }

    @Post('editar/:idcliente')
    actualizarcliente(
        @Res() res,
        @Param('idcliente') idcliente:String,
        @Body() cliente: Cliente
        )
    {
        console.log(cliente);
        cliente.id=+idcliente;
        this._clientesService.actualizar(cliente,+idcliente);
        res.redirect('/clientes/lista');
    }


    @Post('eliminar')
    eliminarLibro(@Res() res,
                  @Body('id') id: string) {

        this._clientesService.eliminarPorId(Number(id));
        res.redirect('/clientes/lista');
    }

    @Post('buscar')
    buscar(
        @Res() res,
        @Body('busqueda') busqueda:string
    ){
        const listaBusqueda:Cliente[]=this._clientesService.buscarPorPlaca(busqueda);
        console.log(listaBusqueda);
        console.log(busqueda);
        if(listaBusqueda!=null){
            res.render('clientes/listar-clientes',{arregloclientes:listaBusqueda})
        }else{
        res.redirect('clientes/lista');
    }
}
}