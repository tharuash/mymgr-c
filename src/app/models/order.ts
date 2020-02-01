import { User } from './user';
import { OrderedProduct } from './ordered_products';
import { Product } from './product';

export class Order {
    id: number;
    seller: User;
    product: Product;
    orderExpirationDate: Date;
    orderStartDate: Date;
    orderStartTime: Date;
    price: number;
    currencyType: string;
    orderStatus: string;
    location: string;
}
