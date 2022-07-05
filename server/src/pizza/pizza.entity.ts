import { CategoryEntity } from "src/category/category.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'pizzas'})
export class PizzaEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: String

    @Column()
    description: String

    @Column()
    image: String

    @Column()
    price: number

    @ManyToOne(() => CategoryEntity, category => category.pizzas)
    category: CategoryEntity
}