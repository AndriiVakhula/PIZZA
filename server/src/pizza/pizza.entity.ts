import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'pizzas'})
export class PizzaEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: String

    @Column()
    description: String

    @Column()
    price: number
}