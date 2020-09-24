import { ICategory } from '../interface/category.interface';

export class Category implements ICategory {
    constructor(
        public id: string,
        public nameUA: string,
        public nameEN: string
    ) {}
}