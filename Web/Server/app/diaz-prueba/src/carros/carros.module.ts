import {Module} from "@nestjs/common";
import {CarrosController} from "./carros.controller";
import {CarrosService} from "./carros.service";
import {ClientesService} from "../clientes/clientes.service"

@Module({
    imports:[],  // Modulos
    controllers:[
        CarrosController
    ], // Controladores
    providers:[
        CarrosService,
        ClientesService
    ], // Servicios
    exports:[
        CarrosService,
        ClientesService
    ] // Exportar Servicios
})
export class CarrosModule {
}