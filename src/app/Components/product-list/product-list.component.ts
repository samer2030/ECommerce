import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
    selector: "productComp",
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    title = "productComp";

    Products: any[];

    constructor(private ProdServ: ProductService) {
        this.Products = []
    }

    ngOnInit() {
        this.ProdServ.getAll().subscribe((response) => {
            this.Products = response
            // console.log(response)
        })
    }

}