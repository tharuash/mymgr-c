import { User } from './user';
import { Stock } from './stock';

export class Product {
    id: number;
    name: string;
    type: string;
    unitPrice: number;
    currencyType: string;
    unitQuantity: number;
    siUnit: string;
    user: User;
    stock: Stock;
    stockDto;
    userDto;
    requiredQuantity = 0;
}
