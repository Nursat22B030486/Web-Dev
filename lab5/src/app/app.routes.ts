import { Routes } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductItemComponent} from "./product-item/product-item.component";

export const routes: Routes = [
  {path: '', redirectTo: 'products/:category', pathMatch: 'full' },
  {path: 'products/:category', component: ProductListComponent},
  {path: 'products/:category/:id', component: ProductItemComponent},
];
