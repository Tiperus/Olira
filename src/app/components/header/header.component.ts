import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { Subscription } from 'rxjs';
import { ICategory } from 'src/app/shared/interface/category.interface';
import { AllServiceService } from 'src/app/shared/services/all-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class HeaderComponent implements OnInit {
  cloudCategories: Array<ICategory>=[];
  subscription: Subscription;
  constructor(
    private categoryData: AllServiceService,
  ) { }

  ngOnInit(): void {
    this.getCategory()
  }
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

  

}
