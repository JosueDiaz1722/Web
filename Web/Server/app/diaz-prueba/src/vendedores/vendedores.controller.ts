import {Controller, Get, Post, Res, Body, Param, Req} from "@nestjs/common";
import {VendedoresService} from "./vendedores.service";
import {ClientesService} from "../clientes/clientes.service";
import {Vendedor} from "./interface/vendedor";
import {CarrosService} from "../carros/carros.service";


@Controller('/vendedores')
export class VendedoresController {
    
    
    constructor(private readonly _vendedoresService: VendedoresService,
                private readonly _clientessService: ClientesService,
                private readonly _carrosService: CarrosService) {
    
    }

    @Get('lista')
    listarVendedores(
        @Res() res
    ) {
        const arreglo = this._vendedoresService.bddVendedores;
        res.render('vendedores/listar-vendedores', {
            arregloVendedores: arreglo
        })
    }

    @Get('crear')
    crearVendedor(
        @Res() res
    ) {
        res.render('vendedores/crear-Vendedor')
    }



    @Post('crear')
    crearLibroPost(
        @Body() Vendedor:Vendedor,
        @Res() res,
    ){
        Vendedor.cedula = Vendedor.cedula;
        Vendedor.nombre = Vendedor.nombre;
        Vendedor.apellido = Vendedor.apellido;
        Vendedor.tipo = Vendedor.tipo;
        const date = new Date(Vendedor.fechaNacimiento);

        this._vendedoresService.crear(Vendedor);
        console.log(formatDate(Vendedor.fechaNacimiento) +"****"+ Vendedor.fechaNacimiento);

        res.redirect('/vendedores/lista');

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

    @Get('editar/:idvendedor')
     actualizarVendedorVista(
        @Res() response,
        @Param('idvendedor') idvendedor: string,
    ) {
        // El "+" le transforma en numero a un string
        // numerico
        const vendedorEncontrado = this._vendedoresService.buscarPorId(+idvendedor);

        response
            .render(
                'vendedores/editar-Vendedor',
                {
                    vendedor: vendedorEncontrado
                }
            )
    }

    @Post('editar/:idVendedor')
    actualizarVendedor(
        @Res() res,
        @Param('idVendedor') idVendedor:String,
        @Body() Vendedor: Vendedor
        )
    {
        console.log(Vendedor);
        Vendedor.id=+idVendedor;
        this._vendedoresService.actualizar(Vendedor,+idVendedor);
        res.redirect('/vendedores/lista');
    }


    @Post('eliminar')
    eliminarLibro(@Res() res,
                  @Body('id') id: string) {

        this._vendedoresService.eliminarPorId(Number(id));
        res.redirect('/vendedores/lista');
    }

    @Post('buscar')
    buscar(
        @Res() res,
        @Body('busqueda') busqueda:string
    ){
        const listaBusqueda:Vendedor[]=this._vendedoresService.buscarPorCedula(busqueda);
        console.log(listaBusqueda);
        console.log(busqueda);
        if(listaBusqueda!=null){
            res.render('vendedores/listar-vendedores',{arregloVendedores:listaBusqueda})
        }else{
        res.redirect('vendedores/lista');
    }
}
}