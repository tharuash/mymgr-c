import { Product } from './product';

export class Stock {
    id: string;
    product: Product;
    stockType: string;
    maximumQuantity: number;
    isAvailableOnSell: boolean;
    currentAvailability: number;
}
