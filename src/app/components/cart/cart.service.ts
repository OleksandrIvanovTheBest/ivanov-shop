import { Injectable} from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { Product } from '../product-list';

@Injectable()
export class CartService {
    productsInCart = new Array<Product>();

    private channel = new Subject<Array<Product>>();
    channel$ = this.channel.asObservable();

    constructor() {}

    addToCart(product: Product) {
        product.isAvailable = false;
        this.productsInCart.push(product);
        this.channel.next(this.productsInCart);
    }
}
