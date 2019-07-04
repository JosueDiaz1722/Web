export interface Vendedor {
    id?: number;
    cedula: number;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    tipo: 'Vendedor'|'Gerente';
}