import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  HttpStatus,
  Res,
  Put,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { Response } from 'express';

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
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Res() response: Response, @Param('productId') productId: string) {
    response.status(200).send({
      message: `${productId}`,
    });
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion crear',
      payload,
    };
  }

  @Post()
  createTwo(@Res() res: Response, @Body() product: any) {
    return res.status(HttpStatus.OK).json({
      message: 'Product created',
      product,
    });
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delee(@Param('id') id: number) {
    return {
      id,
    };
  }
}
