import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
    constructor(@InjectRepository(CategoryEntity) private readonly categoryRepository: Repository<CategoryEntity>) { }

    async getAll(): Promise<CategoryEntity[]> {
        return await this.categoryRepository.find()
    }

    async create(categoryDto: CategoryDto):Promise<CategoryEntity> {
        const category = new CategoryEntity()
        Object.assign(category, categoryDto)

        return await this.categoryRepository.save(category)
    }

    async delete(categoryId: number) {
        const category = await this.categoryRepository.findOneBy({id: categoryId})

        if (!category) {
            throw new HttpException('Corse not found', HttpStatus.NOT_FOUND)
        }

        return await this.categoryRepository.remove(category)
    }

    async update(categoryDto: CategoryDto, categoryId: number): Promise<CategoryEntity> {
        const category = await this.categoryRepository.findOneBy({id: categoryId})

        if (!category) {
            throw new HttpException('Corse not found', HttpStatus.NOT_FOUND)
        }

        Object.assign(category, categoryDto)

        return await this.categoryRepository.save(category)
    }
}
