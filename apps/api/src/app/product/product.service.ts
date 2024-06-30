import { Injectable } from '@nestjs/common';
import { Product } from 'src/infra/models/product.model';
import { User } from 'src/infra/models/user.model';

@Injectable()
export class ProductService {
  constructor() {}
  public async getAllProductsWithUser() {
    return Product.findAll({
      include: [
        {
          model: User,
        },
      ],
    });
  }
}
