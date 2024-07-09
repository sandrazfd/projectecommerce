import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@projectecommerce/layout';
import { ProductSearchComponent } from '@projectecommerce/product-search';

import { MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  standalone: true,
  imports: [
    RouterModule,
    LayoutModule,
    ProductSearchComponent,
    MatSnackBarModule,
  ],
  selector: 'projectecommerce-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'projectecommerce';
}
