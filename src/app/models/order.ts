import { User } from './user';
import { OrderedProduct } from './ordered_products';
import { Product } from './product';

export class Order {
    id: number;
    seller: User;
    product: Product;
    orderedProducts = [];
    orderExpirationDate: Date;
    orderStartDate: Date;
    orderStartTime: Date;
    totalPrice: number;
    currencyType: string;
    orderStatus: string;
    orderLocation: string;
    sellerConfirmation: boolean;
    buyerConfirmation: boolean;
    noOfProducts: number;
}
