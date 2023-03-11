import { Controller, Get, Param } from '@nestjs/common';

interface CategoryInfo {
  id: string;
  productId: string;
}

@Controller('categories')
export class CategoriesController {
  @Get('categories/:id/products/:productId')
  getCategory(@Param() { id, productId }: CategoryInfo): string {
    return `categori id: ${id} and product id: ${productId}`;
  }
}
