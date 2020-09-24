import { ICategory } from 'src/app/shared/interface/category.interface';

export interface IProduct {
    id: string;
    category: ICategory;
    nameUA: string;
    nameEN: string;
    description: string;
    price: number;
    count: number;
    image?: Array<string>;
    
}