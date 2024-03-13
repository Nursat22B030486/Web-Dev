import {Component, OnInit} from '@angular/core';
import {Product, products} from "../products";
import {ActivatedRoute, RouterLink} from "@angular/router";
// import {compareNumbers} from "@angular/compiler-cli/src/version_helpers";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products = [...products];
  category!: string | null;
  likes = new Set<number>();


  constructor(public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) =>{
      if(params.get('category')) {
        this.category = params.get('category');
        this.products = products.filter(p => p.category === this.category)
      }
    });
  }


  like (product: Product){
    if (!this.likes.has(product.id)) {
      // Если продукта нет в списке лайков, увеличиваем счетчик и добавляем его в Set
      product.like++;
      this.likes.add(product.id);
    } else {
      // Если продукт уже в списке лайков, уменьшаем счетчик и удаляем его из Set
      product.like--;
      this.likes.delete(product.id);
    }
  }

  remove(product: Product){
    this.products = this.products.filter(p => p !== product)
  }


  share(product: Product){
    window.open(`https://t.me/share/url?url=${encodeURIComponent(product.link)}`);
  }

  comeIn(product: Product){
    window.open(product.link);
  }


}
