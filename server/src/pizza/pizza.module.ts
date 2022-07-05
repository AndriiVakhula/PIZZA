import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/category/category.entity';
import { PizzaController } from './pizza.controller';
import { PizzaEntity } from './pizza.entity';
import { PizzaService } from './pizza.service';

@Module({
  controllers: [PizzaController],
  providers: [PizzaService],
  imports: [TypeOrmModule.forFeature([PizzaEntity, CategoryEntity])]
})
export class PizzaModule {}
