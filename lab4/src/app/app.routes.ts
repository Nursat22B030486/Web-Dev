import { Routes } from '@angular/router';
import {ProductListsComponent} from "./product-lists/product-lists.component";
import {ProductAlertsComponent} from "./product-alerts/product-alerts.component";


export const routes: Routes = [
  {path: 'products', component: ProductListsComponent, title: "Products"},
  {path: 'notify', component: ProductListsComponent, title: "Notify"},
];
