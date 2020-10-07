import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interface/product.interface';

@Pipe({
  name: 'productByCategory'
})
export class ProductByCategoryPipe implements PipeTransform {

  transform(value: Array<IProduct>, args: string): Array<IProduct> {
    if (!args) { return value; }    
    if (!value) { return []; }

    return value.filter(val => val.category.nameEN===args)
  }

}
