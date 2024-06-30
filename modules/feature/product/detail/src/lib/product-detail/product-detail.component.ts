import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { getParams } from './get-params';

@Component({
  selector: 'projectecommerce-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  @Input() id!: string;
  id$ = getParams();
}
