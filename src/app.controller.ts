import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

interface CategoryInfo {
  id: string;
  productId: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  newEndpoint() {
    return 'soy new endpoint';
  }

  /* @Get('/products/:productId')
  getProdcuts(@Param() params: any) {
    return `${params.productId}}`;
  } */

  @Get('/products/:productId')
  getProdcuts(@Param('productId') productId: string) {
    return `${productId}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param() { id, productId }: CategoryInfo): string {
    return `categori id: ${id} and product id: ${productId}`;
  }
}
