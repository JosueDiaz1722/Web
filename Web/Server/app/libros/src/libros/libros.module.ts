import {Module} from "@nestjs/common";
import {LibrosController} from "./libros.controller";
import {LibrosService} from "./libros.service";

@Module({
    imports:[],  // Modulos
    controllers:[
        LibrosController
    ], // Controladores
    providers:[
        LibrosService
    ], // Servicios
    exports:[
        LibrosService
    ] // Exportar Servicios
})
export class LibrosModule {
}