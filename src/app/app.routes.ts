import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/module1/module1.component').then(
        (c) => c.Module1Component
      ),
  },
  {
    path: 'module2',
    loadChildren: () =>
      import('./pages/module2/routes/routes').then((r) => r.MODULE2_ROTES),
  },
];
