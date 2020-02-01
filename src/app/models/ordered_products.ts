import { Order } from './order';
import { Product } from './product';

export class OrderedProduct {
    id: number;
    order: Order;
    product: Product;
    requiredQuantity: number;
    subTotal: number;
}
