import {Module} from "@nestjs/common";
import {LibrosController} from "./libros.controller";
import {LibrosService} from "./libros.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import {EntityBook} from "../libros/entities/books.entity"

@Module({
    imports:[TypeOrmModule.forFeature(
        [
            EntityBook
        ], 'default'
    )],  // Modulos
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