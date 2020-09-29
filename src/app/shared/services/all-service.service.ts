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
  // cloudProductByCategory:Array<IProduct>=[];
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
  //   return this.firestore.firestore.collection('product').get().then(function(querySnapshot) {
  //     querySnapshot.forEach(function(doc) {
  //       if(doc.data().category.nameEN== "embroidery"){
          // let x:IProduct = doc.data() as IProduct
          // this.cloudProductByCategory.push(x)
          
        // }
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data().category.nameEN );
          // console.log(this.cloudProductByCategory)
  //     });
  // })
  // }
  // db.collection("cities").where("capital", "==", true)
  // .get()
  // .then(function(querySnapshot) {
  //     querySnapshot.forEach(function(doc) {
  //         // doc.data() is never undefined for query doc snapshots
  //         console.log(doc.id, " => ", doc.data());
  //     });
  // })
  // .catch(function(error) {
  //     console.log("Error getting documents: ", error);
  // });

  // getCategoryProducts(categoryName: string) {
  //   const data = this.firestore.firestore.collection('product')
  // }

}

  


