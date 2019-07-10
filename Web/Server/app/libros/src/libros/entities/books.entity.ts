import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, ManyToMany} from "typeorm";
import { AutorEntity } from "../../autor/autor.entity";
import { ProveedorEntity } from "../../proveedores/proveedores.entity";

@Entity()
export class EntityBook {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
            type:'varchar',
            length:25,
            name:'nombre'
        })
    nombre: string;

    @Column({
        type:'varchar',
        length:25,
        name:'tipo',
        
    })
    tipo: 'Novela'|'Literatura'|'Cientifico'|'Viaje'|'Biografia'|'Consulta';
    
    @Column()
    edicion: number;

    @Column({
        type:'date',
        name:'fecha',
        default:'2019-07-08'
    })
    fecha: Date;

    @Column({
        type:'decimal',
        precision:10,
        scale:2,
        name:'precio'
    })
    precio: number;

    @ManyToOne(type=>AutorEntity, autor=>autor.libros)
    autor:AutorEntity;

    @ManyToMany(type=> ProveedorEntity)
    @JoinTable()
    proveedores: ProveedorEntity[];

}