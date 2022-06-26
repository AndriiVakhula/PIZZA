import { Test, TestingModule } from '@nestjs/testing';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

const testCategory = "Test category";
const categoryArray = [
  { id: 1, name: testCategory },
  { id: 2, name: 'Test category 1' },
  { id: 3, name: 'Test category 2' }
]

describe('CategoryController', () => {
  let controller: CategoryController;

  const mockCategoryService = {
    getAll: jest.fn().mockImplementation(() => {
      return [...categoryArray]
    }),

    create: jest.fn().mockImplementation((dto) => {
      return {
        id: Date.now(),
        ...dto
      }
    }),

    delete: jest.fn().mockResolvedValue({ deleted: true })
  }


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryController],
      providers: [CategoryService]
    })
    .overrideProvider(CategoryService)
    .useValue(mockCategoryService)
    .compile();

    controller = module.get<CategoryController>(CategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get an array categories', () => {
    expect(controller.getAll()).resolves.toEqual([
      ...categoryArray
    ])
  })

  it('should create a category', () => {
    const dto = {
      name: 'testName'
    }

    expect(controller.create(dto)).resolves.toEqual({
      id: expect.any(Number),
      name: dto.name
    })

    expect(mockCategoryService.create).toBeCalledWith(dto);
  })

  it('should return that it deleted a category', () => {
    expect(controller.delete(1)).resolves.toEqual({
      deleted: true
    })
  })
});
