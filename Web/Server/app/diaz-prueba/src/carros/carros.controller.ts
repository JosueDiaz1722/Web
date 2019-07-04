import {Controller, Get, Post, Res, Body, Param, Req} from "@nestjs/common";
import {CarrosService} from "./carros.service";
import {Carro} from "./interface/carro";
import {ClientesService} from "../clientes/clientes.service"

@Controller('/carros')
export class CarrosController {

    constructor(private readonly _carrosService: CarrosService,
                private readonly _clientesService: ClientesService) {

    }

    @Get('lista')
    listarCarros(
        @Res() res
    ) {
        const arreglo = this._carrosService.bddCarros;
        res.render('carros/listar-carros', {
            arregloCarros: arreglo
        })
    }

    @Get('crear')
    crearCarro(
        @Res() res
    ) {
        res.render('carros/crear-carro')
    }

    @Get('inicio')
    inicio(
        @Res() res
    ) {
        res.render('carros/inicio')
    }

    @Get('contactanos')
    contactanos(
        @Res() res
    ) {
        res.render('carros/contactanos')
    }

    @Get('cliente')
    listarClientes(
        @Res() res
    ) {
        const arreglo = this._clientesService.bddClientes;
        res.render('clientes/listar-clientes', {
            arregloClientes: arreglo
        })
    }


    @Post('crear')
    crearLibroPost(
        @Body() carro:Carro,
        @Res() res,
    ){
        carro.placa = carro.placa;
        carro.modelo = carro.modelo;
        carro.precio = carro.precio;
        carro.año = Number(carro.año);
        carro.tipo = carro.tipo;

        this._carrosService.crear(carro);

        res.redirect('/carros/lista');

    }

    @Get('editar/:idCarro')
     actualizarCarroVista(
        @Res() response,
        @Param('idCarro') idCarro: string,
    ) {
        // El "+" le transforma en numero a un string
        // numerico
        const carroEncontrado = this._carrosService.buscarPorId(+idCarro);

        response
            .render(
                'carros/editar-carro',
                {
                    carro: carroEncontrado
                }
            )
    }

    @Post('editar/:idCarro')
    actualizarCarro(
        @Res() res,
        @Param('idCarro') idCarro:String,
        @Body() carro: Carro
        )
    {
        console.log(carro);
        carro.id=+idCarro;
        this._carrosService.actualizar(carro,+idCarro);
        res.redirect('/carros/lista');
    }


    @Post('eliminar')
    eliminarLibro(@Res() res,
                  @Body('id') id: string) {

        this._carrosService.eliminarPorId(Number(id));
        res.redirect('/carros/lista');
    }

    @Post('buscar')
    buscar(
        @Res() res,
        @Body('busqueda') busqueda:string
    ){
        const listaBusqueda:Carro[]=this._carrosService.buscarPorPlaca(busqueda);
        console.log(listaBusqueda);
        console.log(busqueda);
        if(listaBusqueda!=null){
            res.render('carros/listar-carros',{arregloCarros:listaBusqueda})
        }else{
        res.redirect('carros/lista');
    }
}
}