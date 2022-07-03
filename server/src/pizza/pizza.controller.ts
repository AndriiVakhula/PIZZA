import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { diskStorage } from 'multer';
import * as path from 'path';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreatePizzaDto } from './dto/createPizza.dto';
import { PizzaEntity } from './pizza.entity';
import { PizzaService } from './pizza.service';
import { editFileName, imageFileFilter } from 'src/utils/fileUpload.utils';

@Controller('pizza')
export class PizzaController {
    constructor(private readonly pizzaService: PizzaService) { }

    @Get()
    async findAll(): Promise<PizzaEntity[]> {
        return await this.pizzaService.findAll();
    }

    @Post()
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: path.resolve(__dirname, '..', 'static'),
                filename: editFileName
            }),
            fileFilter: imageFileFilter,
        })
    )
    async create(@Body() createPizzaDto: CreatePizzaDto,  @UploadedFile() file: Express.Multer.File): Promise<PizzaEntity> {
        return await this.pizzaService.create(createPizzaDto, file);
    }
}
