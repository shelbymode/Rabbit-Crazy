import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
    AppModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
