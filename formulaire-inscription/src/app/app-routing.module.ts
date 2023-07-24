import { HeroFormComponent } from './hero-form/hero-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { NewProductComponent } from './new-product/new-product.component';
// import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path : "home", component: HomeComponent},
  { path : "product", component: ProductComponent},
  { path : "new-product", component: NewProductComponent},
  { path : "hero-form", component: HeroFormComponent},
  // { path : "menu", component: MenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
