import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { EntityBook } from "../libros/entities/books.entity";

@Entity()
export class AutorEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
            type:'varchar',
            length:25,
            name:'nombre'
        })
    nombre: string;

   @OneToMany(type=>EntityBook, libro=>libro.autor)
    libros:EntityBook;
}