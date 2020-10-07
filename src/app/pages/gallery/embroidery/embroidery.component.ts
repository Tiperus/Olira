import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Subscription } from 'rxjs';
import { ICategory } from 'src/app/shared/interface/category.interface';
import { IProduct } from 'src/app/shared/interface/product.interface';
import { AllServiceService } from 'src/app/shared/services/all-service.service';
import {PageEvent} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import {MatMenuModule} from '@angular/material/menu';


@Component({
  selector: 'app-embroidery',
  templateUrl: './embroidery.component.html',
  styleUrls: ['./embroidery.component.scss'],


})




export class EmbroideryComponent implements OnInit, OnDestroy {

  
  cloudProduct: Array<IProduct>=[];
  // categoryProduct: Array<IProduct>=[];
  pagedProduct: Array<number>= [];
  breakpoint: number;
  rowsCalc:number; 
  itemsPerPage:number;
  pageNumber:number=1;
  subscription: Subscription;
  categoryName:string ='embroidery';

  // length: Array<number> = [];
  innerWidth: any;
  innerHeight: any;



  constructor(
    private fireBaseStorage: AngularFireStorage,
    private productData: AllServiceService,
  ) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.onResize();
    this.calcRows();
    this.getProducts();
    
    
    // this.getProductbyCategory()
    // this.pagedProduct = this.categoryProduct.splice(0, 4);
    // this.length = this.categoryProduct.length;
    

  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  };


  private getProducts(): void {
    this.subscription=this.productData.getFireBaseProduct().subscribe( data => {
      this.cloudProduct = data.map(
         cat => {
          const data = cat.payload.doc.data() as IProduct;
          return data;
        })
        this.calcPages(this.cloudProduct);
    })
  }
  // getProductbyCategory():void{
  //   this.categoryProduct=this.cloudProduct.filter(val=>val.category.nameEN===this.categoryName)
  //   console.log(this.innerWidth)
  // }


  onResize():number { //to adjust to screen size
   if(+this.innerWidth<=500){
    return this.breakpoint=1
   }
   if(501<=+this.innerWidth&&+this.innerWidth<=800){
    return this.breakpoint=2
   }
   if(801<=+this.innerWidth&&+this.innerWidth<=1000){
    return this.breakpoint=3
   }
   if(1001<=+this.innerWidth&&+this.innerWidth<=1400){
    return this.breakpoint=4
   }
   if(1401<=+this.innerWidth){
    return this.breakpoint=5
   }
   console.log(this.breakpoint)
  }
  calcRows(){
    if(+this.innerHeight<=500){
      return this.rowsCalc=1
     }
    if(501<=+this.innerHeight&&+this.innerHeight<=800){
      return this.rowsCalc=2
     }
    if(801<=+this.innerHeight){
      return this.rowsCalc=3
     }
  }
  calcPages(arr:Array<IProduct>):void{
    let numberPages=Math.ceil(this.cloudProduct.filter(val=> val.category.nameEN===this.categoryName).length/(this.breakpoint*this.rowsCalc));

    for(let i=1; i<=numberPages; i++){
      this.pagedProduct.push(i)
    }
    console.log(this.pagedProduct)

    console.log(this.cloudProduct.filter(val=> val.category.nameEN===this.categoryName).length)
    console.log(this.cloudProduct.filter(val=> val.category.nameEN===this.categoryName).length/(this.breakpoint*this.rowsCalc))
    console.log('this.breakpoint*this.rowsCalc', this.breakpoint*this.rowsCalc)
    console.log('pageNumber',this.pageNumber)
  }
  cangePage(p:number):void{
    this.pageNumber=(p+1);
    console.log(p+1)
    // this.itemsPerPage=this.breakpoint*this.rowsCalc
    // this.pageNumber=Math.round(p/this.itemsPerPage)


  }
 
}
