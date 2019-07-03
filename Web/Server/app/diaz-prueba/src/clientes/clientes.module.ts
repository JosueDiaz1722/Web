import {Module} from "@nestjs/common";
import {clientesController} from "./clientes.controller";
import {ClientesService} from "./clientes.service";

@Module({
    imports:[],  // Modulos
    controllers:[
        clientesController
    ], // Controladores
    providers:[
        ClientesService
    ], // Servicios
    exports:[
        ClientesService
    ] // Exportar Servicios
})
export class ClientesModule {
}