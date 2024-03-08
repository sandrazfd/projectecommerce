import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@projectecommerce/layout';
import { ProductSearchComponent } from '@projectecommerce/product-search';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    LayoutModule,
    ProductSearchComponent,
  ],
  selector: 'projectecommerce-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'projectecommerce';
}
