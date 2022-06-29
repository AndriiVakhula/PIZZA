import { Body, Controller, Post } from '@nestjs/common';
import { CreatePizzaDto } from './dto/createPizza.dto';
import { PizzaEntity } from './pizza.entity';
import { PizzaService } from './pizza.service';

@Controller('pizza')
export class PizzaController {
    constructor(private readonly pizzaService: PizzaService) { }

    @Post()
    async create(@Body() createPizzaDto: CreatePizzaDto): Promise<PizzaEntity> {
        return await this.pizzaService.create(createPizzaDto);
    }

}
