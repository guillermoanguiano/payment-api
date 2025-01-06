import { Module } from '@nestjs/common';
import { PaymentModule } from './lib/payments/infrastructure/payment.module';

@Module({
  imports: [PaymentModule],
})
export class AppModule { }
