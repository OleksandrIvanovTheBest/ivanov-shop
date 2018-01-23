import { ProductCategory } from './productCategory.enum';

export class Product {
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public category: ProductCategory,
        public inStock: number,
        public isAvailable?: boolean
    ) {
        if (inStock > 0) {
            this.isAvailable = true;
        } else {
            this.isAvailable = false;
        }
    }
}
