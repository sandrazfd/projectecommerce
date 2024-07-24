import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('@projectecommerce/home').then((c) => c.homeRoutes),
    // O LAZY LOADING SERÁ FEITO AQUI
    // Com loadChildren ou loadComponent
  },
  {
    path: 'product',
    loadChildren: () =>
      import('@projectecommerce/product-detail').then(
        (c) => c.productDetailRoutes
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@projectecommerce/auth-form').then((a) => a.authFormRoutes),
  },
];
