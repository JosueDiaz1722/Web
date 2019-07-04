import {Module} from "@nestjs/common";
import {VendedoresController} from "./vendedores.controller";
import {VendedoresService} from "./vendedores.service";
import {CarrosService} from "../carros/carros.service";
import {ClientesService} from "../clientes/clientes.service"

@Module({
    imports:[],  // Modulos
    controllers:[
        VendedoresController
    ], // Controladores
    providers:[
        VendedoresService,
        ClientesService,
        CarrosService
    ], // Servicios
    exports:[
        VendedoresService,
        ClientesService,
        CarrosService
    ] // Exportar Servicios
})
export class VendedoresModule {
}