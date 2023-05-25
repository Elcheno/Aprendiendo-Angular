import { Component } from '@angular/core';
import {Product} from "../product";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  productList: Product[] = [
    {
      id: 0,
      name: 'Pan'
    },
    {
      id: 1,
      name: 'Leche'
    },
    {
      id: 2,
      name: 'Huevos'
    },
    {
      id: 3,
      name: 'Agua'
    },
  ];

}
