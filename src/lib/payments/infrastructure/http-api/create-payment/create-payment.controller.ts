import { Body, Controller, Post } from "@nestjs/common";
import { CreatePaymentUseCase } from "../../../application/create-payment-use-case/create-payment-use-case";
import { CreatePaymentHttpDto } from "./create-payment.http-dto";
import { PrimitivePayment } from "../../../domain/payment";

@Controller('payments')
export class CreatePaymentController {
    constructor(private createPaymentUseCase: CreatePaymentUseCase) { }

    @Post()
    async run(@Body() createPaymentDto: CreatePaymentHttpDto): Promise<{ payment: PrimitivePayment }> {
        return await this.createPaymentUseCase.execute({
            amount: createPaymentDto.amount,
            customerId: createPaymentDto.customerId
        }); 
    }
}