import { Order } from './order';

export class Delivery {
    id: number;
    deliveryDate: Date;
    deliveryCost: number;
    deliveryType: string;
    destinationAddress: string;
    isDeliveryComplete: boolean;
    orderId: number;

}
