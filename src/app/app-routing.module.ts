import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {path:'',  pathMatch: 'full', redirectTo: 'about'},
  {path:'about',  component:AboutUsComponent },
  {path:'gallery',  component:GalleryComponent, children: [
    {path:'',  pathMatch: 'full', redirectTo: 'embroidery'},
    {path:'models', component:ClothingModelingComponent},
    {path:'reconstruction', component:ReconstructionOfClothesComponent},
    {path:'embroidery', component:EmbroideryComponent},
    {path:'children', component:ChildrensClothingComponent },
    {path:'decor', component:InteriorDecorComponent  },
    {path:'choir', component:CostumesForGroupsComponent  }

  ]},
  {path:'map', component: MapComponent},
  {path:'admin', component: AdminComponent, children: [
    {path:'', pathMatch: 'full', redirectTo: 'products'},
    {path:'category', component:CategoryComponent },
    {path:'products', component:ProductsComponent },
  ]},
  {path: '**' , component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
