import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/Product';

import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent {
  product?: Product;
  constructor(private ActiveRoute: ActivatedRoute, private ProdServ: ProductService) {
    this.ActiveRoute.params.subscribe({
      next: (parms) => {
        this.product = ProdServ.getProductByID(parms['id']);
        console.log(this.product?.ID)
      }
    })
  }
  
}
