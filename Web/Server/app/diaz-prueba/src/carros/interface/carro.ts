export interface Carro {
    id?: number;
    placa: string;
    modelo: string;
    tipo: 'Pequeño'|'Mediano'|'Grande';
    año: number;
    precio: number;
}