import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {LibrosModule} from "./libros/libros.module";
import {EntityBook} from "./libros/entities/books.entity";
import {TypeOrmModule} from '@nestjs/typeorm';
import { AutorEntity } from './autor/autor.entity';
import { AutorModule } from './autor/autor.module';
import { ProveedorEntity } from './proveedores/proveedores.entity';


@Module({
  imports: [LibrosModule, AutorModule, ProveedorEntity,
  TypeOrmModule.forRoot({
    name:'default', //varias conexiones a bdd 1ra conexion
    type: 'mysql',//tipo de bdd
    host: 'localhost',
    port: 3306,
    username: 'userLibro',
    password: '1234',
    database:'libros',
    entities: [EntityBook, AutorEntity, ProveedorEntity], // todas las entidades
    synchronize: true,//cambios een entidades se refleja a bdd
    dropSchema:true//borras base y crear ppor cambios en entitys
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
