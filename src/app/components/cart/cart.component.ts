import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { Product } from '../../models/product.model';
import { CartService} from '../../services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private sub: Subscription;

  productsInCart: Array<Product>;
  isEmpty: boolean;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.productsInCart = new Array<Product>();
    this.isEmpty = true;
    this.sub = this.cartService.channel$.subscribe(
      products => {
          this.productsInCart = products; this.isEmpty = products.length === 0; console.log(this.isEmpty);
      }
    );
  }

}
