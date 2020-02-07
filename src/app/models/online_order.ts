import { Time } from '@angular/common';
import { Product } from './product';
import { User } from './user';
import { CommentDto } from './comment_dto';

export class OnlineOrder {
    id: number;
    orderExpirationDate: Date;
    orderStartDate: Date;
    orderStartTime: Time;
    totalPrice: number;
    currencyType: string;
    orderStatus: string;
    orderLocation: string;
    sellerConfirmation: boolean;
    buyerConfirmation: boolean;
    productDto: Product;
    orderProductId: number;
    requiredQuantity: number;
    subTotal: number;
    userDto: User;
    cancellation: string;
    sellerRatings: number;
    latestComments = new Array<CommentDto>(2);
  }
  