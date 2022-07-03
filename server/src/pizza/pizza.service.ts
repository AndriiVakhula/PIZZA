import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePizzaDto } from './dto/createPizza.dto';
import { PizzaEntity } from './pizza.entity';

@Injectable()
export class PizzaService {
    constructor(@InjectRepository(PizzaEntity) private readonly pizzaRepository: Repository<PizzaEntity>) { }

    async findAll(): Promise<PizzaEntity[]> {
        return await this.pizzaRepository.find();
    }

    async create(createPizzaDto: CreatePizzaDto, file: Express.Multer.File): Promise<PizzaEntity> {
        const pizza = new PizzaEntity();
        Object.assign(pizza, createPizzaDto)

        pizza.image = file.filename;
        return await this.pizzaRepository.save(pizza);
    }
}