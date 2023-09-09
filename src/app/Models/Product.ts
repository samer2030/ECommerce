export class Product {
    ID: number;
    Name: string
    Price: number
    Quantity: number
    categoryID: number
    Img: string

    constructor(
        _id: number,
        _n: string,
        _p: number,
        _q: number,
        _Cid: number,
        _img: string,

    ) {
        this.ID = _id;
        this.categoryID = _Cid
        this.Img = _img
        this.Name = _n
        this.Price = _p
        this.Quantity = _q
    }
}