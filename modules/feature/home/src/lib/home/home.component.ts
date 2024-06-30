import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RecommendedProductsService } from '@projectecommerce/product-data-access';

@Component({
  selector: 'projectecommerce-home',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products$ = this.recommendedProductsService.getProducts();
  constructor(private recommendedProductsService: RecommendedProductsService) {}
}
