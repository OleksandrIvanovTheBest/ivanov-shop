import { Component, OnInit, OnDestroy, ViewChildren, QueryList } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { CartItem } from './cart-item/cart-item.model';
import { CartService} from './cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  @ViewChildren(CartItemComponent)
  children: QueryList<CartItemComponent>;

  itemsInCart: Array<CartItem>;
  totalPrice: number;
  isEmpty: boolean;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.itemsInCart = new Array<CartItem>();
    this.isEmpty = true;
    this.totalPrice = 0;

    this.sub = this.cartService.channel$.subscribe(
      newItem => {
          this.itemsInCart.push(newItem);
          this.totalPrice += newItem.price;
          this.isEmpty = this.checkIsEmpty();
          console.log(this.isEmpty);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.children.destroy();
  }

  onRemoveFromCart(item: CartItem) {
    const index: number = this.itemsInCart.indexOf(item);
    if (index !== -1) {
        this.itemsInCart.splice(index, 1);
        this.isEmpty = this.checkIsEmpty();
        this.totalPrice = this.cartService.recalculateTotalPrice(this.itemsInCart);
    }
  }

  checkIsEmpty(): boolean {
    if (this.itemsInCart.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  onChangeQuantity(item: CartItem): void {
    const index: number = this.itemsInCart.indexOf(item);
    if (index !== -1) {
      this.itemsInCart[index].quantity = item.quantity;
    }
    this.totalPrice = this.cartService.recalculateTotalPrice(this.itemsInCart);
  }
}
