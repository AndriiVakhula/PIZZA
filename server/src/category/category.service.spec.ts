import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { CategoryService } from './category.service';

const testCategory = "Test category";

const categoryArray = [
  { id: 1, name: testCategory },
  { id: 2, name: 'Test category 1' },
  { id: 3, name: 'Test category 2' }
]

describe('CategoryService', () => {
  let service: CategoryService;

  beforeEach(async () => {
    const mockCategoryEntity = {
      find: jest.fn().mockResolvedValue([...categoryArray]),
      findOne: jest.fn().mockImplementation(id => categoryArray[id]),
      findOneBy: jest.fn().mockImplementation(id => categoryArray[id]),
      create: jest.fn().mockImplementation(dto => dto),
      save: jest.fn().mockImplementation(category => Promise.resolve({ id: Date.now(), ...category })),
      remove: jest.fn().mockResolvedValue({ deleted: true }),
    }

    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryService, {
        provide: getRepositoryToken(CategoryEntity),
        useValue: mockCategoryEntity
      },
      ],
    }).compile();

    service = module.get<CategoryService>(CategoryService);

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create new category record and return that', async () => {
    const dto = {
      name: 'Test'
    }

    expect(await service.create(dto)).toEqual({
      id: expect.any(Number),
      name: dto.name
    })
  })

  it('should return an array of category', async () => {
    expect(await service.getAll()).toEqual([...categoryArray])
  })

});