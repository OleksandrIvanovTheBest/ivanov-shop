import { Injectable} from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { Product } from '../products/product/product.model';
import { CartItem } from './cart-item/cart-item.model';

@Injectable()
export class CartService {
    private channel = new Subject<CartItem>();
    channel$ = this.channel.asObservable();

    constructor() {}

    addToCart(product: Product) {
        product.inStock -= 1;
        if (product.inStock === 0 ) {
            product.isAvailable = false;
        }
        this.channel.next(this.createNewItem(product));
    }

    createNewItem(product: Product): CartItem {
        return new CartItem(
            product.name,
            product.description,
            product.price,
            product.category,
            product.inStock,
            1
        );
    }

    recalculateTotalPrice(itemsInCart: Array<CartItem>) {
        let totalPrice = 0;
        itemsInCart.forEach(item => {
            totalPrice += item.price * item.quantity;
        });

        return totalPrice;
    }

    getTotalQuantity(itemsInCart: Array<CartItem>) {
        let total = 0;
        itemsInCart.forEach(item => {
            total += item.quantity;
        });

        return total;
    }
}
