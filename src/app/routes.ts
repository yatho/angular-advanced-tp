import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'posts',
    loadChildren: () => import('./post/post.routes').then(m => m.routes)
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
