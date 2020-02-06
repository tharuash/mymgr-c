import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../_path';
import { CommentDto } from '../models/comment_dto';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getComments(sellerId: number) {
    return this.http.get<CommentDto[]>(`${URL}/comments/${sellerId}`);
  }

  addComment(comment: CommentDto, sellerId: number) {
    return this.http.post<CommentDto>(`${URL}/comments/${sellerId}`, comment);
  }
}
