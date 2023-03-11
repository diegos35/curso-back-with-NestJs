import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('nuevo')
  newEndpoint() {
    return 'soy new endpoint';
  }

  /* @Get('/products/:productId')
  getProdcuts(@Param() params: any) {
    return `${params.productId}}`;
  } */

  @Get('/other')
  getProdcutsOther(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products: limit=> ${limit}, offset => ${offset}, brand => ${brand}`;
  }

  @Get('/filter')
  getProdcuts(@Query() params: any) {
    const { limit, offset } = params;
    return `products: limit=> ${limit}, offset => ${offset}`;
  }

  @Get('/:productId')
  getProdcut(@Param('productId') productId: string) {
    return `${productId}`;
  }
}
