import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@projectecommerce/layout';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, LayoutModule],
  selector: 'projectecommerce-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'projectecommerce';
}
