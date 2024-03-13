import {Component, OnInit} from '@angular/core';
import {ProductListComponent} from "../product-list/product-list.component";
import {Product, products} from "../products";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent extends ProductListComponent implements OnInit{
  items !: Product[];
  id!: number | undefined;


  override ngOnInit() {
    this.route.paramMap.subscribe((params) =>{
      if(params.get('id')) {
        this.id = Number(params.get('id'));
        this.items = products.filter(p => p.id === this.id);
      }
    });
  }

  override share(product: Product) {
    super.share(product);
  }

  override like(product: Product) {
    super.like(product);
  }
}
