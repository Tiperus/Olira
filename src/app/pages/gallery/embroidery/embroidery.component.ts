import { Component, OnInit, OnDestroy } from '@angular/core';
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


  // embroideryProduct:Array<IProduct>=[];
  cloudProduct: Array<IProduct>=[];
  cloudProductImage:Array<string>=[];
  subscription: Subscription;
  categoryName:string ='embroidery'
  // totalItems = 64;
  // currentPage = 1;
 
  // setPage(pageNo: number): void {
  //   this.currentPage = pageNo;
  // }

  constructor(
    private fireBaseStorage: AngularFireStorage,
    private productData: AllServiceService,
  ) { }

  ngOnInit(): void {
    this.getProducts();

  }
  // ngOnDestroy(): void {
  //   //Called once, before the instance is destroyed.
  //   //Add 'implements OnDestroy' to the class.
  //   this.subscription.unsubscribe();
  // }


  private getProducts(): void {
    this.subscription=this.productData.getFireBaseProduct().subscribe( data => {
      this.cloudProduct = data.map(
         cat => {
          const data = cat.payload.doc.data() as IProduct;
          return data;
        })

    })
  }



}
