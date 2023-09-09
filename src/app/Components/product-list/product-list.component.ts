import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/ICategory';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
    selector: "productComp",
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    title = "productComp";

    Products: Product[];
    Categories: ICategory[];
    selectedCat: number = 0;

    constructor(private ProdServ: ProductService) {
        this.Products = this.ProdServ.Products
        this.Categories = this.ProdServ.Categories
    }

    changeCat() {
        this.Products = this.ProdServ.filterByCategoryID(this.selectedCat)
    }



}