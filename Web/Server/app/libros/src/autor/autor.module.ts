import {Module} from "@nestjs/common";
import {AutorEntity} from "./autor.entity"
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports:[
        TypeOrmModule.forFeature(
            [AutorEntity],
            'default'
        )
    ],  // Modulos
    controllers:[
        
    ], // Controladores
    providers:[
        
    ], // Servicios
    exports:[
        
    ] // Exportar Servicios
})
export class AutorModule {
}