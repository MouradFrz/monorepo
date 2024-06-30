import { Controller, Get, Param } from '@nestjs/common';

@Controller('product')
export class ProductController {
  constructor() {}
  @Get(':id')
  public async getProduct(@Param() { id }: { id: string }): Promise<string> {
    return id;
  }
}
