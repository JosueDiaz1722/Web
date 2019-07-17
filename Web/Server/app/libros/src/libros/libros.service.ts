import {Injectable} from "@nestjs/common";
import {Libro} from "./interface/libro";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {EntityBook} from "./entities/books.entity";

@Injectable()
export class LibrosService {

    bddLibros = [];
    recnum = 1;

    /*constructor(){
        const libro = {
            nombre:'XX',
            edicion:4.3,
            fecha: new Date(2019,5,10),
            precio:1.75,
            tipo:'novela'
        };
        this.listar(libro);
    }*/
    /*
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

    buscarPorNombre(nombre: string):Libro[] {
        if(nombre!=='' && nombre!==null){
            return this.bddLibros.filter(
            (libro) => {
                return libro.nombre.toUpperCase().includes(nombre.toUpperCase());
            }
        );
            console.log(nombre);
    }else{
            return this.bddLibros;
        }
    }



    eliminarPorId(id: number):Libro[] {
        console.log('id',id)
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
        console.log(indice);
        libroActualizado.id = this.bddLibros[indice].id;
        this.bddLibros[indice] = libroActualizado;
        return this.bddLibros;
    }
*/

    constructor(@InjectRepository(EntityBook)
                private readonly _librosRepository: Repository<EntityBook>,) {

        const libro:any = {
            nombre: 'XX',
            edicion: 4.3,
            fecha: new Date(2019, 5, 10),
            precio: 1.75,
            tipo: 'Novela',
            autorId: 1
        };

        const objetoEntidad = this._librosRepository.create(libro);

        console.log('LINEA 1');
        this._librosRepository
            .save(objetoEntidad) // Promesa
            .then(
                (datos)=>{
                    console.log('LINEA 2');
                    // console.log('Dato creado:', datos);
                }
            )
            .catch(
                (error)=>{
                    console.log('LINEA 3');
                    // console.error('Error:', error);
                }
            );
        console.log('LINEA 4');


        this.crear(libro);

    }

    buscar(parametrosBusqueda?):Promise<EntityBook[]>{
        return this._librosRepository.find(parametrosBusqueda);
    }

    crear(nuevoLibro: Libro):Promise<Libro> {

        const objetoEntidad = this._librosRepository
            .create(nuevoLibro);

        return this._librosRepository.save(objetoEntidad);
    }

    buscarPorId(id: number):Libro {
        return this.bddLibros.find(
            (libro) => {
                return libro.id === id;
            }
        );
    }

    buscarPorNombre(nombre: string):Promise<EntityBook> {
        return this.bddLibros.find(
            (libro) => {
                return libro.nombre.toUpperCase().includes(nombre.toUpperCase());
            }
        );
    }

    async eliminarPorId(id: number):Promise<any>{
        return await this._librosRepository.delete(id);
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