import {Component, Input} from '@angular/core';
import {IProduct} from "../../model/iProduct";

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {

  @Input('p') public product:IProduct = {
    id: -1,
    title: "",
    price: -1
  };

}
