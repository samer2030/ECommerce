import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/ICategory';
import { IProduct } from 'src/app/Models/IProduct';

@Component({
    selector: "productComp",
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {
    title = "productComp";
    storeName: string = 'Sam Store';
    storeLogo: string = '';
    clientName: string = '';
    
    Categories: Array<ICategory> = [
        {
            categeoryName: '',
            categoryID: 0,
            discription: ''
        }
    ];

    Products: Array<IProduct> = [
        {
            ID: 1,
            Name: "Lenvo thinpad X230",
            Price: 100000,
            Quantity: 3,
            categoryID: 1,
            Img: "https://picsum.photos/200"
        },
        {
            ID: 2,
            Name: "Dell",
            Price: 2002020,
            Quantity: 2,
            Img: "https://picsum.photos/200",
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
}