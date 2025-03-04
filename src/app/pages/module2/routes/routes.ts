import { Route } from '@angular/router';

export const MODULE2_ROTES: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('../module2.component').then((c) => c.Module2Component),
  },
];
