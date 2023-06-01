import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { databaseProviders } from './stock.database.provider';
import { modelProviders } from './stock.model.provider';
import { StockService } from './stock.service';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'stock',
          type: 'topic',
        },
      ],
      uri: 'amqp://rabbitmq:5672',
    }),
    StockModule,
  ],
  providers: [StockService, ...databaseProviders, ...modelProviders],
})
export class StockModule {}
