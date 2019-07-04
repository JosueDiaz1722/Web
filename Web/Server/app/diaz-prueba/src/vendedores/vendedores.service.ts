import {Injectable} from "@nestjs/common";
import {Vendedor} from "./interface/vendedor";

@Injectable()
export class VendedoresService {

    bddVendedores = [];
    recnum = 1;

    constructor(){
        const vendedor = {
            cedula:'XX',
            nombre:'Erick',
            apellido: 'Acosta',
            fechaNacimiento: '2019-07-12',
            tipo:'Gerente'
        };
        this.listar(vendedor);
    }

    listar(nuevoVendedor) {
        nuevoVendedor.id = this.recnum;
        this.recnum++;
        this.bddVendedores.push(nuevoVendedor);
        return nuevoVendedor;
    }

    crear(nuevoVendedor: Vendedor):Vendedor {
        nuevoVendedor.id = this.recnum;
        this.recnum++;
        this.bddVendedores.push(nuevoVendedor);
        return nuevoVendedor;
    }

    buscarPorId(id: number):Vendedor {
        return this.bddVendedores.find(
            (vendedor) => {
                return vendedor.id === id;
            }
        );
    }

    buscarPorCedula(cedula: string):Vendedor[] {
        if(cedula!=='' && cedula!==null){
            return this.bddVendedores.filter(
            (vendedor) => {
                return vendedor.cedula.toUpperCase().includes(cedula.toUpperCase());
            }
        );
            console.log(cedula);
    }else{
            return this.bddVendedores;
        }
    }
    eliminarPorId(id: number):Vendedor[] {

        console.log("El id es:"+id);
        const indice = this.bddVendedores.findIndex(
            (vendedor) => {
                
                return vendedor.id === id
            }
        );
        this.bddVendedores.splice(indice,1);
        return this.bddVendedores;
    }

    actualizar(vendedorActualizado: Vendedor, id:number):Vendedor[] {

        const indice = this.bddVendedores.findIndex(
            (vendedor) => {
                return vendedor.id === id
            }
        );
        vendedorActualizado.id = this.bddVendedores[indice].id;
        this.bddVendedores[indice] = vendedorActualizado;
        return this.bddVendedores;
    }

}