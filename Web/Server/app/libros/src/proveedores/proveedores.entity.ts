import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";


@Entity('proveedores')
export class ProveedorEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
            type:'varchar',
            length:25,
            name:'nombre'
        })
    nombre: string;

   
}