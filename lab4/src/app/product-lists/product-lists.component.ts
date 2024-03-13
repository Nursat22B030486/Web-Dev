import { Component } from '@angular/core';
import {Product, products} from '../products'
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {ProductAlertsComponent} from "../product-alerts/product-alerts.component";

@Component({
  selector: 'app-product-lists',
  standalone: true,
  imports: [NgForOf, NgOptimizedImage, NgIf, ProductAlertsComponent,],
  templateUrl: './product-lists.component.html',
  styleUrl: './product-lists.component.css'
})
export class ProductListsComponent {
  products : Product[] = products;

  comeIn(product: Product){
    window.open(product.link);
  }

  share(product: Product) {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(product.link)}`;
    window.open(telegramUrl, '_blank');
  }

  onNotify(){
    window.alert('You will be notified when the product goes on sale');
  }

}
