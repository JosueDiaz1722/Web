export interface Cliente {
    id?: number;
    cedula: number;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    direccion: string;
}