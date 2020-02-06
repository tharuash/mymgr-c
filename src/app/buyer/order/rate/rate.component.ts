import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { CommentService } from '../../../services/comment.service';
import Swal from 'sweetalert2';
import { CommentDto } from '../../../models/comment_dto';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  seller: User;
  sellerId: number;
  commentDto = new CommentDto();
  constructor(private router: Router, private userService: UserService,
     private route: ActivatedRoute, private commentService: CommentService) { }

  ngOnInit() {
    this.sellerId = this.route.snapshot.params.id;
    this.userService.getSeller(this.sellerId).subscribe(
      data => {
        this.seller = data;
      }, error => {
        console.log(error);
      }
    );
  }

  addComment() {
    console.log(this.commentDto);
    this.commentService.addComment(this.commentDto, this.sellerId).subscribe(
      data => {
        if (data) {
          Swal.fire({
            title: 'Comment Added',
            icon: 'success'
          });

          this.router.navigate(['buyer/order/view']);
        }

      }, error => {
        Swal.fire(
          'Oops...',
          'An unknown error occures..',
          'error'
        );
      }
    );
  }

}
