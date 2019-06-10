import{Module} from  '@nestjs/common';
import{LibrosService} from './libros.service';
import{LibrosController} from './libros.controller';

@Module({
    imports:[], //modulos
    controllers:[
        LibrosController
    ], //controladores
    providers:[
        LibrosService
    ], //servicios
    exports:[] //servicios externes
})

export class LibrosModule{

}