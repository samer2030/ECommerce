import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class AccountService {
    baseURL = "http://localhost:5000/user"
    constructor(private Http: HttpClient) { }
    login(user: any): Observable<any> {
        return this.Http.post<any>(`${this.baseURL}/login`, user)
    }
    register(user: any): Observable<any> {
        return this.Http.post<any>(`${this.baseURL}/register`, user)
    }
    logout() {

    }

}