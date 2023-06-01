import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { v4 as uuid } from 'uuid';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }
 
  @Get('create-stock')
  async createStock() {
   return await this.appService.createStock(uuid(), 5, 'Jaffa Cake');
  }
}
