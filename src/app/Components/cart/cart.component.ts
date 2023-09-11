import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { ProductComponent } from '../product/product.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart!: any[];

  constructor(private prodServ: ProductService) {
    console.log(prodServ.cartLocal)
    console.log(JSON.parse(localStorage.getItem('cart')!))
    this.cart = JSON.parse(localStorage.getItem('cart')!)
  }

}
