import { ICategory } from './../interface/category.interface';
import { IProduct } from './../interface/product.interface';



export class Product implements IProduct {
    constructor(
        public id: string,
        public category: ICategory,
        public nameUA: string,
        public nameEN: string,
        public description: string,
        public price: number,
        public count: number = 1,
        public image?: Array<string>
    ) {}
}