import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interface/product.interface';

@Pipe({
  name: 'productByCategory'
})
export class ProductByCategoryPipe implements PipeTransform {

  transform(value: Array<IProduct>, args?: string): Array<IProduct> {
    if (!value) { return [] };
    if (!args) { return value };
    console.log(value)
    return value.filter((val:IProduct)=>{val.category.nameEN === args})
  }

}
