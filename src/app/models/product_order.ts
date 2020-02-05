import { Time } from '@angular/common';

export class ProductOrder {
    id: number;
    orderStartDate: Date;
    orderStartTime: Time;
    orderStatus: string;
    requiredQuantity: number;
    subTotal: number;
}
