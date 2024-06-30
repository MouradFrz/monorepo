import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from 'src/interface/product/product.controller';

@Module({
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
