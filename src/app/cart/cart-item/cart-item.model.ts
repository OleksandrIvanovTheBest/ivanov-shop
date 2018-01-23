import { ProductCategory } from '../../products/product/productCategory.enum';

export class CartItem {
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public category: ProductCategory,
        public inStock: number,
        public quantity?: number
    ) {
        this.quantity = quantity || 1;
    }
}
