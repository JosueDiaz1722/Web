import {Module} from "@nestjs/common";
import {CarrosController} from "./carros.controller";
import {CarrosService} from "./carros.service";

@Module({
    imports:[],  // Modulos
    controllers:[
        CarrosController
    ], // Controladores
    providers:[
        CarrosService
    ], // Servicios
    exports:[
        CarrosService
    ] // Exportar Servicios
})
export class CarrosModule {
}