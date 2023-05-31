import { Injectable } from '@angular/core';
import {Product} from "./../model/product";
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private getAll: string = "https://api.escuelajs.co/api/v1/products?offset=0&limit=12";

  constructor(private http: HttpClient) { }


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.getAll);
  }


}
