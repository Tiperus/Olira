import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
// import { AngularFirestore} from '@angular/fire/firestore';
import { ICategory } from '../interface/category.interface';
// import { Observable } from 'rxjs';
// import { Category } from '../models/category.model';
import { IProduct } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class AllServiceService {
  // cloudCategories:any;
  // cloudArrayCategory:Array<ICategory>=[];
  // categoryObjc:ICategory={id:'', nameUA:'', nameEN:''};

  constructor(
    
    private firestore: AngularFirestore,
    // private database: firebase.User
    
  ) { }

  getFireBaseCategories() {
    return this.firestore.collection('categories').snapshotChanges();  

  }

  
  addFirebaseCategory(category: ICategory) {
    // return this.firestore.collection('arr').doc('arrCategory').set({category{ }});
      return this.firestore.collection('categories').doc(category.id).set({...category})
    
  }
 
  deleteFirebaseCategory(id: string, category: ICategory) {
    return this.firestore.collection('categories').doc(category.id).delete()
  }

  addFirebaseProduct(product: IProduct) {

      return this.firestore.collection('product').doc(product.id).set({...product})
    
  }

  getFireBaseProduct() {
    return this.firestore.collection('product').snapshotChanges();  

  }
  // getFireBaseProductByCategory() {
  //   return this.firestore.collection('product').get().forEach()  

  // }
  getCategoryProducts(categoryName: string) {
    const data = this.firestore.collection('product', ref => 
      
      ref.where('category', '==', categoryName)).valueChanges();
      console.log(data)
    return data;
}

  }

  


