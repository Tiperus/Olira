import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Subscription } from 'rxjs';
import { ICategory } from 'src/app/shared/interface/category.interface';
import { IProduct } from 'src/app/shared/interface/product.interface';
import { AllServiceService } from 'src/app/shared/services/all-service.service';

@Component({
  selector: 'app-embroidery',
  templateUrl: './embroidery.component.html',
  styleUrls: ['./embroidery.component.scss']
})
export class EmbroideryComponent implements OnInit {
  embroideryProduct:Array<IProduct>=[];
  cloudProduct: Array<IProduct>=[];
  subscription: Subscription;
  categoryName:string ='embroidery'
  constructor(
    private fireBaseStorage: AngularFireStorage,
    private productData: AllServiceService,
  ) { }

  ngOnInit(): void {
    this.getProducts(this.categoryName);
  }

  getProducts(categoryName:string): void {
    this.subscription = this.productData.getCategoryProducts(categoryName).subscribe(
      ( data: any) => {
       this.embroideryProduct = data;
       console.log(this.embroideryProduct)
        }
     )
   }
  // private getProducts(): void {
  //   this.productData.getFireBaseProductByCategory()
  // }
  // getCategory():void{
  //   this.subscription=this.productData.getFireBaseCategories().subscribe( data => {
  //     this.cloudCategories = data.map(
  //        cat => {
  //         const data = cat.payload.doc.data() as ICategory;
  //         return data;
  //       }
  //     )
  //   })


}
