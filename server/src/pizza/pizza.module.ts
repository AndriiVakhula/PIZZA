import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PizzaController } from './pizza.controller';
import { PizzaEntity } from './pizza.entity';
import { PizzaService } from './pizza.service';

@Module({
  controllers: [PizzaController],
  providers: [PizzaService],
  imports: [TypeOrmModule.forFeature([PizzaEntity])]
})
export class PizzaModule {}
