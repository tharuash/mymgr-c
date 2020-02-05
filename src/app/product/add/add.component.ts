import {
  Component,
  OnInit
} from '@angular/core';
import {
  Product
} from '../../models/product';
import {
  Stock
} from '../../models/stock';
import {
  ProductService
} from '../../services/product.service';
import {
  Router
} from '@angular/router';
import Swal, {
  SweetAlertIcon
} from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  product = new Product();
  stock = new Stock();
  imgURL: any;
  image: any;
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {}

  register() {
    this.product.stock = this.stock;
    console.log(this.product);
    const productData: FormData = new FormData();
    productData.append('product', JSON.stringify(this.product));
    productData.append('image', this.image);
    this.productService.addProduct(this.product).subscribe(
      data => {
        Swal.fire({
          title: 'Product Successfully Added.',
          text: 'A stock has been reserved for the product. Please update it.',
          icon: 'success',
          showCancelButton: true,
          cancelButtonText: 'Add Another Product',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Go to Stock',
        }).then((result) => {
          if (result.value) {
            this.router.navigate(['stock/view']);
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            this.ngOnInit();
          }
        });
      }, error => {
        Swal.fire(
          'Ooops...',
          'Something went wrong. Please Retry.',
          'error'
        );
      }
    );
  }

  onEvent(event) {
    console.log(event);
    this.image = event.target.files[0];
    console.log(this.image);

    // Below part is used to display the selected image
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };
  }
}
