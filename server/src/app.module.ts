import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { CategoryModule } from './category/category.module';
import { PizzaModule } from './pizza/pizza.module';

@Module({
  imports:
    [
      ConfigModule.forRoot({ isGlobal: true }),
      TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
      CategoryModule,
      PizzaModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
