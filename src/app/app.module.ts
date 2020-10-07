import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
// import { PaginationModule } from 'ngx-bootstrap/pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ClothingModelingComponent } from './pages/gallery/clothing-modeling/clothing-modeling.component';
import { ReconstructionOfClothesComponent } from './pages/gallery/reconstruction-of-clothes/reconstruction-of-clothes.component';
import { EmbroideryComponent } from './pages/gallery/embroidery/embroidery.component';
import { ChildrensClothingComponent } from './pages/gallery/childrens-clothing/childrens-clothing.component';
import { InteriorDecorComponent } from './pages/gallery/interior-decor/interior-decor.component';
import { CostumesForGroupsComponent } from './pages/gallery/costumes-for-groups/costumes-for-groups.component';
import { MapComponent } from './pages/map/map.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CategoryComponent } from './pages/admin/category/category.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { ProductByCategoryPipe } from './shared/pipe/product-by-category.pipe';
import { MatTableModule } from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import { ChangePagePipe } from './shared/pipe/change-page.pipe';
// import { PaginationModule } from 'ngx-bootstrap/pagination';
// import { FormatPipe} from './format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    GalleryComponent,
    ClothingModelingComponent,
    ReconstructionOfClothesComponent,
    EmbroideryComponent,
    ChildrensClothingComponent,
    InteriorDecorComponent,
    CostumesForGroupsComponent,
    MapComponent,
    AdminComponent,
    CategoryComponent,
    ProductsComponent,
    ProductByCategoryPipe,
    ChangePagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    PopoverModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatMenuModule
    // PaginationModule.forRoot()

  ],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3500, noPause: true, showIndicators: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

