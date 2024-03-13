import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {TopBarComponent} from "./top-bar/top-bar.component";
import {ProductListsComponent} from "./product-lists/product-lists.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, TopBarComponent, ProductListsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab4';
}
