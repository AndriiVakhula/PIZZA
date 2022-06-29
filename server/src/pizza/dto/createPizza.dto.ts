import {IsInt, IsNotEmpty, IsString } from "class-validator";


export class CreatePizzaDto {    
    @IsNotEmpty()
    @IsString()
    readonly name: String

    @IsNotEmpty()
    @IsString()
    readonly description: String


    @IsNotEmpty()
    @IsInt()
    readonly price: Number
}