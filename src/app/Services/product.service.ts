import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ProductService {
    apiLink: string = 'https://fakestoreapi.com/products'

    constructor(private http: HttpClient) { }
    getAll() {
        return this.http.get<any>(this.apiLink)
    }

    getProductByID(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiLink}/${id}`)
    }
}