import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  register() {
    Swal.fire({
      title: 'Received Your Order?',
      text: 'Please confirm and comment and rate your seller.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm!'
    }).then((result) => {
      if (result.value) {
        Swal.mixin({
          confirmButtonText: 'Next &rarr;',
          showCancelButton: true,
          progressSteps: ['1', '2', '3']
        }).queue([
          {
            title: 'Order Confirmed',
            icon: 'success',
            confirmButtonText: 'Rate & Comment',
          },
          {
            title: 'Rate',
            text: 'Out of 5',
            input: 'number',
            confirmButtonText: 'Comment',
          },
          {
            title: 'Comment',
            text: 'About Seller',
            input: 'textarea',
            confirmButtonText: 'Done',
          },
        ]).then((result) => {
          if (result.value) {
            const answers = JSON.stringify(result.value)
            Swal.fire({
              title: 'All done!',
              html: `
                Your answers:
                <pre><code>${answers}</code></pre>
              `,
              confirmButtonText: 'Lovely!'
            })
          }
        })
      }
    })
  }
}
