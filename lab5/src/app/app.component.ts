import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {TopBarComponent} from "./top-bar/top-bar.component";
import {categories, products} from "./products";
import {NgForOf} from "@angular/common";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductItemComponent} from "./product-item/product-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, TopBarComponent, NgForOf, ProductListComponent, ProductItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab5';
  protected readonly products = products;

  protected readonly categories = categories;
}
