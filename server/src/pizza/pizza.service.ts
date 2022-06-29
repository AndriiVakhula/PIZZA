import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePizzaDto } from './dto/createPizza.dto';
import { PizzaEntity } from './pizza.entity';

@Injectable()
export class PizzaService {
    constructor(@InjectRepository(PizzaEntity) private readonly pizzaRepository: Repository<PizzaEntity>) { }


    async create(createPizzaDto: CreatePizzaDto): Promise<PizzaEntity> {
        const pizza = new PizzaEntity();
        Object.assign(pizza, createPizzaDto)

        return await this.pizzaRepository.save(pizza);
    }
}