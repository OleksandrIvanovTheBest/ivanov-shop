import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() clickAdd: EventEmitter<Product> = new EventEmitter<Product>();

  color: string;

  constructor() {}

  ngOnInit() {
    if (!this.product.isAvailable) {
      this.color = 'brown';
    }
  }

  addToCart(product: Product) {
    console.log(this.product.name + ' was added to cart');
    this.clickAdd.emit(product);
  }
}
