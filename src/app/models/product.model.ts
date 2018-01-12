import { ProductCategory } from './productCategory.enum';

export class Product {
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public category: ProductCategory,
        public isAvailable: boolean
    ) {}
}
