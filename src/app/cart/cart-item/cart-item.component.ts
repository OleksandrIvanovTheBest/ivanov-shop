import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, HostListener, HostBinding } from '@angular/core';

import { CartItem } from './cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit, OnDestroy {
  @Input() item: CartItem;
  @Output() removeItem: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() changeQuantity: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  @HostBinding('class') class = 'product-info';

  @HostListener('mouseenter', ['$event']) onMouseEnter(event) {
    this.class = 'product-info-red';
  }

  @HostListener('mouseleave', ['$event']) onMouseleave(event) {
    this.class = 'product-info';
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log(`${this.item.name} was destroyed`);
  }

  removeFromCart() {
    this.removeItem.emit(this.item);
  }

  changeItemsQuantity(newQuantity: HTMLInputElement) {
    this.item.quantity = Number(newQuantity.value);
    this.changeQuantity.emit(this.item);
  }
}
