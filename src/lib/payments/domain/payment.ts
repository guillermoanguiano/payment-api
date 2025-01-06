import { v4 as uuidv4 } from 'uuid';

export interface PrimitivePayment {
    id: string;
    amount: number;
    customerId: string;
}

export class Payment {
    constructor(private attributes: PrimitivePayment) { }

    static create(attributes: Omit<PrimitivePayment, 'id'>) {
        return new Payment({
            id: uuidv4(),
            amount: attributes.amount,
            customerId: attributes.customerId
        });
    }

    toPrimitive(): PrimitivePayment {
        return {
            id: this.attributes.id,
            amount: this.attributes.amount,
            customerId: this.attributes.customerId
        }
    }
}