import {Component, Input} from '@angular/core';
import {IProduct} from "../../model/iProduct";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input('p') public product:IProduct = {
    id: -1,
    title: "",
    price: -1
  };

}
