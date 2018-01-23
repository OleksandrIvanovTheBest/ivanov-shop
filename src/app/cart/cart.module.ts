import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartComponent } from './';
import { ProductsModule } from '../products/products.module';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsModule
  ],
  declarations: [
    CartComponent,
    CartItemComponent
  ],
  exports: [
    CartComponent
  ],
  providers: [
    CartService
  ]
})
export class CartModule { }
