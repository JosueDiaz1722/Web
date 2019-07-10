import {Module} from "@nestjs/common";
import {ProveedorEntity} from "./proveedores.entity"
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports:[
        TypeOrmModule.forFeature(
            [ProveedorEntity],
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
export class ProveedoresModule {
}