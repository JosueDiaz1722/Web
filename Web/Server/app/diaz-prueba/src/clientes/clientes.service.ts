import {Injectable} from "@nestjs/common";
import {Cliente} from "./interface/cliente";

@Injectable()
export class ClientesService {

    bddClientes = [];
    recnum = 1;

    constructor(){
        const cliente = {
            cedula:'XX',
            nombre:'Juan',
            apellido: 'Mendez',
            fechaNacimiento: '1992-07-12',
            direccion:'XX'
        };
        this.listar(cliente);
    }

    listar(nuevoCliente) {
        nuevoCliente.id = this.recnum;
        this.recnum++;
        this.bddClientes.push(nuevoCliente);
        return nuevoCliente;
    }

    crear(nuevoCliente: Cliente):Cliente {
        nuevoCliente.id = this.recnum;
        this.recnum++;
        this.bddClientes.push(nuevoCliente);
        return nuevoCliente;
    }

    buscarPorId(id: number):Cliente {
        return this.bddClientes.find(
            (cliente) => {
                return cliente.id === id;
            }
        );
    }

    buscarPorCedula(cedula: string):Cliente[] {
        if(cedula!=='' && cedula!==null){
            return this.bddClientes.filter(
            (cliente) => {
                return cliente.cedula.toUpperCase().includes(cedula.toUpperCase());
            }
        );
            console.log(cedula);
    }else{
            return this.bddClientes;
        }
    }
    eliminarPorId(id: number):Cliente[] {

        console.log("El id es:"+id);
        const indice = this.bddClientes.findIndex(
            (cliente) => {
                
                return cliente.id === id
            }
        );
        this.bddClientes.splice(indice,1);
        return this.bddClientes;
    }

    actualizar(clienteActualizado: Cliente, id:number):Cliente[] {

        const indice = this.bddClientes.findIndex(
            (cliente) => {
                return cliente.id === id
            }
        );
        clienteActualizado.id = this.bddClientes[indice].id;
        this.bddClientes[indice] = clienteActualizado;
        return this.bddClientes;
    }

}