import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard,
  },
  {
    path: 'author',
    loadChildren: () => import('./author/author.routes'),
  },
  {
    path: 'posts',
    loadChildren: () => import('./post/post.routes').then((m) => m.routes),
  },
  {
    path: 'form',
    loadChildren: () => import('./forms/form.routes'),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];
