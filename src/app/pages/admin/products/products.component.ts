import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ICategory } from './../../../shared/interface/category.interface';
import { IProduct } from './../../../shared/interface/product.interface';
import { Product } from './../../../shared/models/product.model';
import {AllServiceService} from './../../../shared/services/all-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  uploadProgress:Observable<number>;
  cloudCategories: Array<ICategory>=[];
  subscription: Subscription;
  productImagesArray: Array<string>=[];
  cloudProduct: Array<IProduct>=[];

    public addProductForm = new FormGroup({
    nameProductUA: new FormControl('', [Validators.required, Validators.pattern('^[А-Яа-я ]+$')]),
    nameProductEN: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
    descriptionProductUA: new FormControl('', [Validators.required]),
    productCategory: new FormControl('', Validators.required),
    priceProductUA: new FormControl(null, Validators.required),
    productImage: new FormControl('', Validators.required),
    
  })
  constructor(
    private fireBaseStorage: AngularFireStorage,
    private productData: AllServiceService,
  ) { }

  ngOnInit(): void {
    this.getCategory();
    this.getProduct();
  }
  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

    getCategory():void{
    this.subscription=this.productData.getFireBaseCategories().subscribe( data => {
      this.cloudCategories = data.map(
         cat => {
          const data = cat.payload.doc.data() as ICategory;
          return data;
        }
      )
    })

  }
  uploadFile(event):void {
    const file = event.target.files[0];
    const filePath = `images/${this.uuid()}.${file.type.split('/')[1]}`;
    const task = this.fireBaseStorage.upload(filePath, file);
    this.uploadProgress=task.percentageChanges();
    console.log(this.uploadProgress)
    task.then( e => {
      this.fireBaseStorage.ref(`${e.metadata.fullPath}`)
      // images/${e.metadata.name}
       .getDownloadURL()
         .subscribe( url => {
           this.productImagesArray.push(url);
           console.log(this.productImagesArray)
      })
    })
    }
  uuid():string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  addProduct():void{
    const product:IProduct = new Product ('1', this.addProductForm.value.productCategory, this.addProductForm.value.nameProductUA, this.addProductForm.value.nameProductEN, this.addProductForm.value.descriptionProductUA, this.addProductForm.value.priceProductUA, 1, this.productImagesArray )
    console.log(product)
    if(this.cloudProduct.length > 0) {
      product.id = (+this.cloudProduct.slice(-1)[0].id + 1).toString();
    }
      this.productData.addFirebaseProduct(product)
      .then(
        () => {
          console.log('success');
          this.addProductForm.reset();
        }
      )
      .catch(
        error => console.log(error)
    )
  
}



  getProduct():void{
    this.subscription=this.productData.getFireBaseProduct().subscribe( data => {
      this.cloudProduct = data.map(
         cat => {
          const data = cat.payload.doc.data() as IProduct;
          return data;
        }
      )
    })

  }





}



