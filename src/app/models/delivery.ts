import { Order } from './order';

export class Delivery {
    id: number;
    orders: Order[];
    date: Date;
    deliveryCost: number;
    deliveryType: string;

}
