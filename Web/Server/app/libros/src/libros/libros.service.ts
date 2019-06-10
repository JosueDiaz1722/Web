import {Injectable} from '@nestjs/common';
@Injectable ()
export class LibrosService{
    bddlibros = [];
    idLibro=1;
    constructor(){
        const libro={
            nombre: 'XYZ',
            edicion: '5ta',
            fecha: new Date(2019,6,10),
            precio: 50,
            tipo: 'novela'

        }
    }

    listar(nuevoLibro){
        nuevoLibro.id = this.idLibro;
        this.bddlibros.push(nuevoLibro);
        return nuevoLibro;
    }
}
