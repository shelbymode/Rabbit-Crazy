import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly amqpConnection: AmqpConnection) {
  }

  async createStock(stockId, quantity, name) {

    const backResponse = await this.amqpConnection.request({
      exchange: 'stock',
      routingKey: 'stock-route',
      payload: { stockId, quantity, name }
    });

    console.log('1. msg published', 'stock', 'stock-route', {
      type: 'create_stock',
      data: { stockId, quantity, name },
    });

    console.log('3 Result back:', backResponse)

    return backResponse
  }
}
