import { Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {ProductComponent} from "./product/product.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {AboutComponent} from "./about/about.component";

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'product',
    component: ProductDetailsComponent
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];
