import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';
import { ICategory } from '../Models/ICategory';

@Injectable()
export class ProductService {

    constructor() { }

    Products: Array<Product> = [
        {
            ID: 1,
            Name: "Lenvo thinpad X230",
            Price: 100000,
            Quantity: 3,
            categoryID: 1,
            Img: ""
        },
        {
            ID: 2,
            Name: "Dell",
            Price: 2002020,
            Quantity: 2,
            Img: "",
            categoryID: 2,
        },
        {
            ID: 3,
            Name: "Lenovo Tab",
            Price: 100888,
            Quantity: 10,
            categoryID: 2,
            Img: "https://picsum.photos/200"
        },
        {
            ID: 4,
            Name: "Samsung Tab",
            Price: 1000000,
            Quantity: 10,
            categoryID: 2,
            Img: "https://picsum.photos/200"
        },
        {
            ID: 5,
            Name: "Samsung note 10",
            Price: 100777,
            Quantity: 10,
            categoryID: 3,
            Img: "https://picsum.photos/200"
        },
        {
            ID: 6,
            Name: "Samsung S10",
            Price: 100,
            Quantity: 10,
            categoryID: 3,
            Img: "https://picsum.photos/200"
        },
        {
            ID: 7,
            Name: "tochiba Utlra",
            Price: 60000,
            Quantity: 14,
            Img: "https://fakeimg.pl/200x100",
            categoryID: 4
        },
        {
            ID: 8,
            Name: "Apple Utlra",
            Price: 7800060,
            Quantity: 6,
            Img: "https://fakeimg.pl/200x100",
            categoryID: 4
        },
        {
            ID: 9,
            Name: "test Utlra",
            Price: 7800060,
            Quantity: 3,
            Img: "https://fakeimg.pl/200x100",
            categoryID: 4
        },
        {
            ID: 10,
            Name: "jhgfjxz",
            Img: "https://picsum.photos/200",
            Quantity: 1,
            Price: 44444444,
            categoryID: 1
        },
        {
            Name: "fsdjhfgsdjhkgfsh",
            Price: 7800060,
            Quantity: 3,
            Img: "https://fakeimg.pl/200x100",
            categoryID: 4,
            ID: 11
        }
    ]
    Categories: Array<ICategory> = [
        {
            categeoryName: 'Laptops',
            categoryID: 0,
            discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore accusamus quasi quidem incidunt. Consequatur consequuntur sit officiis odit aperiam nam?'
        },
        {
            categeoryName: 'Phones',
            categoryID: 1,
            discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore accusamus quasi quidem incidunt. Consequatur consequuntur sit officiis odit aperiam nam?'
        },
        {
            categeoryName: 'Tablets',
            categoryID: 2,
            discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore accusamus quasi quidem incidunt. Consequatur consequuntur sit officiis odit aperiam nam?'
        },
        {
            categeoryName: 'PCs',
            categoryID: 3,
            discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore accusamus quasi quidem incidunt. Consequatur consequuntur sit officiis odit aperiam nam?'
        },
    ];

    filterByCategoryID(id: number): Product[] {
        if (id == 0) return this.Products;
        else return this.Products.filter(p => p.categoryID == id);
    }

    getProductByID(id: number) :Product | undefined{
        return this.Products.find((obj) => obj.ID == id); 
    }
}