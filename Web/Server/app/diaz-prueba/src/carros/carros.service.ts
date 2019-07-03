import {Injectable} from "@nestjs/common";
import {Carro} from "./interface/carro";

@Injectable()
export class CarrosService {

    bddCarros = [];
    recnum = 1;

    constructor(){
        const carro = {
            placa:'XX',
            modelo:'4x4',
            año: 2017,
            precio:10000.00,
            tipo:'Mediano'
        };
        this.listar(carro);
    }

    listar(nuevoCarro) {
        nuevoCarro.id = this.recnum;
        this.recnum++;
        this.bddCarros.push(nuevoCarro);
        return nuevoCarro;
    }

    crear(nuevoCarro: Carro):Carro {
        nuevoCarro.id = this.recnum;
        this.recnum++;
        this.bddCarros.push(nuevoCarro);
        return nuevoCarro;
    }

    buscarPorId(id: number):Carro {
        return this.bddCarros.find(
            (carro) => {
                return carro.id === id;
            }
        );
    }

    buscarPorPlaca(placa: string):Carro[] {
        if(placa!=='' && placa!==null){
            return this.bddCarros.filter(
            (carro) => {
                return carro.placa.toUpperCase().includes(placa.toUpperCase());
            }
        );
            console.log(placa);
    }else{
            return this.bddCarros;
        }
    }
    eliminarPorId(id: number):Carro[] {

        console.log("El id es:"+id);
        const indice = this.bddCarros.findIndex(
            (carro) => {
                
                return carro.id === id
            }
        );
        this.bddCarros.splice(indice,1);
        return this.bddCarros;
    }

    actualizar(carroActualizado: Carro, id:number):Carro[] {

        const indice = this.bddCarros.findIndex(
            (carro) => {
                return carro.id === id
            }
        );
        carroActualizado.id = this.bddCarros[indice].id;
        this.bddCarros[indice] = carroActualizado;
        return this.bddCarros;
    }

}