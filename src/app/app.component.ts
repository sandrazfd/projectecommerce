import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@projectecommerce/layout';
import { CartService } from '@projectecommerce/product-data-access';
import { ProductSearchComponent } from '@projectecommerce/product-search';
import { CartComponent } from '@projectecommerce/product-ui';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    LayoutModule,
    ProductSearchComponent,
    MatSnackBarModule,
    CartComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'projectecommerce-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  quantity = inject(CartService).quantity;
}
