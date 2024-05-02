import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductSearchService } from '@projectecommerce/product-data-access';
import { Product } from 'modules/data-access/product/src/lib/models/product.model';

import {
  Observable,
  debounceTime, distinctUntilChanged, filter,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'projectecommerce-product-search',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss',
})
export class ProductSearchComponent implements OnInit {
  control = new FormControl('',{nonNullable:true});
  products$!:Observable <Product[]>

  constructor(private productSearchService: ProductSearchService) {}

  ngOnInit() {
   this.products$= this.control.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter(text => text.length > 0),
      switchMap((text)=> this.productSearchService.searchByName(text))
      
    )
  }
}
