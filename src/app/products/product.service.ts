import { Injectable } from '@angular/core';

import { Product } from './product/product.model';
import { ProductCategory } from './product/productCategory.enum';

@Injectable()
export class ProductService {
    getProducts(): Array<Product> {
        return [
            new Product('Lenovo', 'Chinese Computer', 10000, ProductCategory.Computer, 5),
            new Product('Razer', 'Hear everything', 5000, ProductCategory.Headset, 5),
            new Product('MSI', 'Mechanical keyboard', 2000, ProductCategory.Keyboard, 9),
            new Product('Samsung', '144HZ', 9000, ProductCategory.Monitor, 0),
            new Product('Zowie', 'Just optical mouse', 1000, ProductCategory.Mouse, 6)
        ];
    }

    getProduct(): Product {
        return new Product('Dell', 'American Computer', 20000, ProductCategory.Computer, 1);
    }
}
