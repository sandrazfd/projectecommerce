import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RecommendedProductsService } from '@projectecommerce/product-data-access';
import { ProductCardComponent } from '@projectecommerce/product-ui';

@Component({
  selector: 'projectecommerce-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products$ = this.recommendedProductsService.getProducts();
  constructor(private recommendedProductsService: RecommendedProductsService) {}
}
