import { Component, OnInit, Input, Output, HostBinding, HostListener } from '@angular/core';

import { Product, ProductService } from './';
import { CartService } from '../cart';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
