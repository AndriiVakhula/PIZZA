import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CategoryEntity } from './category.entity';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Get()
    async getAll(): Promise<CategoryEntity[]> {
        return this.categoryService.getAll()
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() categoryDto: CategoryDto): Promise<CategoryEntity> {
        return await this.categoryService.create(categoryDto);
    }

    @Delete(':id')
    async delete(@Param('id') categoryId: number) {
        return await this.categoryService.delete(categoryId);
    }

    @Put(':id')
    async update(@Param('id') categoryId: number, @Body() categoryDto: CategoryDto): Promise<CategoryEntity> {
        return await this.categoryService.update(categoryDto, categoryId);
    }
}
