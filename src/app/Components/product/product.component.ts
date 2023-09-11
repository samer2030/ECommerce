import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product?: IProduct;

  addtoCart(id: number, prod: IProduct) {
    console.log('added: ' + prod.id)
    localStorage.setItem(id.toString(), prod.id.toString())
  }
}
