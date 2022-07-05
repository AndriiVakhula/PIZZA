import { PizzaEntity } from "src/pizza/pizza.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "categories" })
export class CategoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => PizzaEntity, pizza => pizza.category)
    pizzas: PizzaEntity[];
}