import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/Models/IProduct';

import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent {
  product?: IProduct;
  constructor(private ActiveRoute: ActivatedRoute, private ProdServ: ProductService) {
    this.ActiveRoute.params.subscribe({
      next: (parms) => {
        ProdServ.getProductByID(parms['id']).subscribe((response) => {
          this.product = response
          console.log(response)
        })
        // console.log(this.product?.ID)
      }
    })
  }

}
