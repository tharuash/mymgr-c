import { User } from './user';
import { Time } from '@angular/common';

export class CommentDto {
    id: number;
    seller: User;
    comment: string;
    rate: number;
    date: Date;
    time: Time;
}
