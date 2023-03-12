import { Injectable } from '@nestjs/common';

import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductService {
  counterId = 1;

  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla bla',
      price: 122,
      image: '',
      stock: 12,
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: Product) {
    const found = this.products.findIndex((item) => item.id === id);
    console.log(found);
    if (found === -1) throw new Error('Product not found');
    this.products[found] = {
      id: id,
      ...payload,
    };
    return {
      Message: 'Product updated',
      Updated: this.products[found],
    };
  }

  delete(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
  }
}