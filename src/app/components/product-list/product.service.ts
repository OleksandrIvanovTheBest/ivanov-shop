import { Injectable } from '@angular/core';

import { Product } from './product/product.model';
import { ProductCategory } from './product/productCategory.enum';

@Injectable()
export class ProductService {
    getProducts(): Array<Product> {
        return [
            new Product('Lenovo', 'Chinese Computer', 10000, ProductCategory.Computer, true),
            new Product('Razer', 'Hear everything', 5000, ProductCategory.Headset, true),
            new Product('MSI', 'Mechanical keyboard', 2000, ProductCategory.Keyboard, true),
            new Product('Samsung', '144HZ', 9000, ProductCategory.Monitor, true),
            new Product('Zowie', 'Just optical mouse', 1000, ProductCategory.Mouse, true)
        ];
    }

    getProduct(): Product {
        return new Product('Dell', 'American Computer', 20000, ProductCategory.Computer, true);
    }
}
