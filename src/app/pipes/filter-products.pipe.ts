import {Pipe,PipeTransform} from "@angular/core";
import {IProduct} from "src/app/models/product";
import {products} from "src/app/data/products";
@Pipe({
  name:'filterProducts'
})
export class FilterProductsPipe implements PipeTransform{
  transform(value: IProduct[], search:string): IProduct[] {
    return products.filter(el=>el.title.toLowerCase().includes(search.toLowerCase()))
  }
}
