import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product.model';
import { CartService } from '../../services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor(private cartService: CartService) {}

  ngOnInit() {}

  addToCart(product: Product) {
    console.log(this.product.name + ' was added to cart');
    this.cartService.addToCart(product);
  }
}
