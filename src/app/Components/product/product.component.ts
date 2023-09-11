import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private prodServ: ProductService){

  }
  @Input() product?: IProduct;

  addtoCart() {
    console.log('added: ' + this.product?.title)
    this.prodServ.cartLocal.push(this.product)
    localStorage.setItem('cart', JSON.stringify(this.prodServ.cartLocal))
  }
}
