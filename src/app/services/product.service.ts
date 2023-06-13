import { Injectable } from '@angular/core';
import {IProduct} from "../model/iProduct";
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private getAll: string = "https://api.escuelajs.co/api/v1/products?offset=0&limit=12";

  constructor(private http: HttpClient) { }


  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.getAll);
  }


}
