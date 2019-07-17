import {IsDate, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class LibrosCreateDto {

    @IsEmpty()
    id:number;

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    tipo: string;

    @IsNotEmpty()
    @IsNumber()
    edicion: number;

    @IsOptional()
    @IsDate()
    fecha: Date;

    @IsNumber()
    @IsOptional()
    precio: number;

    @IsNumber()
    @IsOptional()
    autorId: number;
}