import {Component, inject, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import { HttpClient } from "@angular/common/http";
import {ProductService} from "../../services/product.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit{
  http = inject(HttpClient);
  productList: Product[] = [];
  aux!: Observable<Product[]>;

  constructor(private productService: ProductService) {
  }

  ngOnInit(){
    console.log("CARGADO");
    this.getProduct();
  }

  getProduct(){
    this.aux = this.productService.getProducts();
    this.aux.subscribe((data) => {
      this.productList = data;
    })
  }

}
