import {Injectable} from "@nestjs/common";
import {Libro} from "./interface/libro";

@Injectable()
export class LibrosService {

    bddLibros = [];
    recnum = 1;

    constructor(){
        const libro = {
            nombre:'XX',
            edicion:4.3,
            fecha: new Date(2019,5,10),
            precio:1.75,
            tipo:'novela'
        };
        this.listar(libro);
    }

    listar(nuevoLibro) {
        nuevoLibro.id = this.recnum;
        this.recnum++;
        this.bddLibros.push(nuevoLibro);
        return nuevoLibro;
    }

    crear(nuevoLibro: Libro):Libro {
        nuevoLibro.id = this.recnum;
        this.recnum++;
        this.bddLibros.push(nuevoLibro);
        return nuevoLibro;
    }

    buscarPorId(id: number):Libro {
        return this.bddLibros.find(
            (libro) => {
                return libro.id === id;
            }
        );
    }

    buscarPorNombre(nombre: string):Libro {
        return this.bddLibros.find(
            (libro) => {
                return libro.nombre.toUpperCase().includes(nombre.toUpperCase());
            }
        );
    }

    eliminarPorId(id: number):Libro[] {
        const indice = this.bddLibros.findIndex(
            (libro) => {
                return libro.id === id
            }
        );
        this.bddLibros.splice(indice,1);
        return this.bddLibros;
    }

    actualizar(libroActualizado: Libro, id:number):Libro[] {

        const indice = this.bddLibros.findIndex(
            (libro) => {
                return libro.id === id
            }
        );
        libroActualizado.id = this.bddLibros[indice].id;
        this.bddLibros[indice] = libroActualizado;
        return this.bddLibros;
    }

}