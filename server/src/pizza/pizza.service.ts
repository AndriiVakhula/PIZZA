import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/category/category.entity';
import { Repository } from 'typeorm';
import { CreatePizzaDto } from './dto/createPizza.dto';
import { PizzaEntity } from './pizza.entity';

@Injectable()
export class PizzaService {
    constructor(@InjectRepository(PizzaEntity) private readonly pizzaRepository: Repository<PizzaEntity>,
                @InjectRepository(CategoryEntity) private readonly categoryRepository: Repository<CategoryEntity>) { }

    async findAll(): Promise<PizzaEntity[]> {
        return await this.pizzaRepository.find({
            relations: ['category']
        });
    }

    async create(createPizzaDto: CreatePizzaDto, file: Express.Multer.File): Promise<PizzaEntity> {
        const pizza = new PizzaEntity();        
        const category = await this.categoryRepository.findOneBy({ id: createPizzaDto.categoryId });
        
        if(!category) {
            throw new HttpException('Category not found', HttpStatus.NOT_FOUND)
        }

        Object.assign(pizza, createPizzaDto)

        pizza.category = category;
        pizza.image = file.filename;

        return await this.pizzaRepository.save(pizza);
    }

    async delete(pizzaId: number) {
        const pizza = await this.pizzaRepository.findOneBy({ id: pizzaId });
        if(!pizza) {
            throw new HttpException('Pizza not found', HttpStatus.NOT_FOUND)
        }
        return await this.pizzaRepository.remove(pizza);
    }
}