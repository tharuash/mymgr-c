import { Product } from './product';

export class Stock {
    id: string;
    product: Product;
    stockType: string;
    productName: string;
    maximumQuantity: number;
    isAvailableOnSell: boolean;
    availableQuantity: number;
    unitPrice: number;

}
