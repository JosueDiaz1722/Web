export interface Libro {
    id?: number;
    nombre: string;
    tipo: 'Novela'|'Literatura'|'Cientifico'|'Viaje'|'Biografia'|'Consulta';
    edicion: number;
    fecha: Date;
    precio: number;
}