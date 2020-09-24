import { Component, OnInit } from '@angular/core';
import {AllServiceService} from './../../../shared/services/all-service.service';
import { Observable, Subscription } from 'rxjs';
import { ICategory } from './../../../shared/interface/category.interface';
import { Category } from './../../../shared/models/category.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  items: Observable<any>;
  nameUA: string;
  nameEN: string;
  cloudCategories: Array<ICategory>=[];
  subscription: Subscription;
  nameValidUA: boolean=false;
  nameValidEN: boolean=false;
  
  public addCategoryForm = new FormGroup({
    nameUA: new FormControl('', [Validators.required, Validators.pattern('^[А-Яа-я ]+$')]),
    nameEN: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
    
  })

  constructor(
    private categoryData: AllServiceService,


  ) { }

  ngOnInit(): void {this.getCategory()}

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }
  
  getCategory():void{
    this.subscription=this.categoryData.getFireBaseCategories().subscribe( data => {
      this.cloudCategories = data.map(
         cat => {
          const data = cat.payload.doc.data() as ICategory;
          return data;
        }
      )
    })

  }

  addCategory(): void {
    // this.nameUA=this.addCategoryForm.value.nameUA;
    // this.nameUA=this.addCategoryForm.value.nameEN;
    // console.log(this.addCategoryForm)
    const category: ICategory = new Category("1", this.addCategoryForm.value.nameUA, this.addCategoryForm.value.nameEN);
    if(this.cloudCategories.length > 0) {
      category.id = (+this.cloudCategories.slice(-1)[0].id + 1).toString();
     
      // console.log(category.id)

    }
    // console.log(this.addCategoryForm)
    this.categoryData.addFirebaseCategory(category)
    .then(
      () => {
        console.log('success');
        this.addCategoryForm.reset();
      }
    )
    .catch(
      error => console.log(error)
  )
  }
  
  deleteCategory(item:ICategory): void {

    // const category: ICategory = new Category(this.editedFireID, this.editedNameUA, this.editedNameEN, this.editedImage);
    this.categoryData.deleteFirebaseCategory(item.id, item)

    .then(
      () => {
        console.log('successfully');
        // this.editedForm.reset();
        this.getCategory();
      }
    )
    .catch(
      error => console.log(error)
    )
  }

  checkNameUA(addCategoryForm: any):boolean{
     return this.nameValidUA=this.cloudCategories.some((item:ICategory,  index:number, arr: Array<ICategory>)=>arr[index].nameUA===addCategoryForm.value.nameUA)
     
   }
  checkNameEN(addCategoryForm: any):boolean{
     return this.nameValidEN=this.cloudCategories.some((item:ICategory,  index:number, arr: Array<ICategory>)=>arr[index].nameEN===addCategoryForm.value.nameEN)
   }


}
