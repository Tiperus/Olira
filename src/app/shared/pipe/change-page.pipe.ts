import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interface/product.interface';

@Pipe({
  name: 'changePage'
})
export class ChangePagePipe implements PipeTransform {

  transform(value: Array<IProduct>, p: string, row:string, column:string): Array<IProduct> {
    if (!p) { return []; } 
    if (!row) { return value; } 
    if (!column) { return value; } 
    if (!value) { return []; }
    let index=+row*(+column);
    
    switch(+p){ 
    // case(0): return value.slice(+p, index)
    // break
    case(1): return value.slice(0, index)
    break
    case(2): return value.slice(index, index*(+p))
    break
    case(3): return value.slice(index*(+p-1), index*(+p))
    break
    case(4): return value.slice(index*(+p-1), index*(+p))
    break
    case(5): return value.slice(index*(+p-1), index*(+p))
    break
    case(6): return value.slice(index*(+p-1), index*(+p))
    break
    case(7): return value.slice(index*(+p-1), index*(+p))
    break
    }
  }

}
