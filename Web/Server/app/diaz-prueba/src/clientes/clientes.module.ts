import {Module} from "@nestjs/common";
import {clientesController} from "./clientes.controller";
import {ClientesService} from "./clientes.service";
import {CarrosService} from "../carros/carros.service";

@Module({
    imports:[],  // Modulos
    controllers:[
        clientesController
    ], // Controladores
    providers:[
        ClientesService,
        CarrosService
    ], // Servicios
    exports:[
        ClientesService,
        CarrosService
    ] // Exportar Servicios
})
export class ClientesModule {
}