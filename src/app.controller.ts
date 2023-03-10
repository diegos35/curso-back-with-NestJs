import { Controller, Get, Param, Query } from '@nestjs/common';
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

  @Get('/products-other')
  getProdcutsOther(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products: limit=> ${limit}, offset => ${offset}, brand => ${brand}`;
  }

  @Get('/products')
  getProdcuts(@Query() params: any) {
    const { limit, offset } = params;
    return `products: limit=> ${limit}, offset => ${offset}`;
  }

  @Get('/products/:productId')
  getProdcut(@Param('productId') productId: string) {
    return `${productId}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param() { id, productId }: CategoryInfo): string {
    return `categori id: ${id} and product id: ${productId}`;
  }
}
