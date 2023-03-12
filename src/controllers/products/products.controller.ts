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
import { ProductService } from '../../services/product.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductService) {}
  @Get('nuevo')
  newEndpoint() {
    return 'soy new endpoint';
  }

  /* @Get('/products/:productId')
  getProdcuts(@Param() params: any) {
    return `${params.productId}}`;
  } */

  @Get('')
  getProdcuts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productsService.findAll();
    //return `products: limit=> ${limit}, offset => ${offset}, brand => ${brand}`;
  }

  @Get('filter')
  getProdcutFilter(@Query() params: any) {
    const { limit, offset } = params;
    return `products: limit=> ${limit}, offset => ${offset}`;
  }

  @Get('/:productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(
    /* @Res() response: Response, */ @Param('productId') productId: string,
  ) {
    /*  response.status(200).send({
      message: `${productId}`,
    }); */
    return this.productsService.findOne(+productId);
  }

  @Post()
  create(@Body() payload: any) {
    /*  return {
      message: 'accion crear',
      payload,
    }; */
    return this.productsService.create(payload);
  }

  @Post()
  createTwo(@Res() res: Response, @Body() product: any) {
    return res.status(HttpStatus.OK).json({
      message: 'Product created',
      product,
    });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    /* return {
      id,
      payload,
    }; */
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delee(@Param('id') id: string) {
    /*  return {
      id,
    }; */
    this.productsService.remove(+id);
  }
}
