import { Routes } from '@angular/router';

export const appRoutes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./public/home/home').then(m => m.Home)
  },

  {
    path: 'reviews',
    loadComponent: () =>
      import('./public/reviews/reviews').then(m => m.Reviews)
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./public/contact/contact').then(m => m.Contact)
  },

  {
  path: 'admin/login',
  loadComponent: () =>
    import('./private/admin-login/admin-login').then(m => m.AdminLogin)
},
{
  path: 'admin/dashboard',
  loadComponent: () =>
    import('./private/dashboard/dashboard').then(m => m.Dashboard)
},
{
  path: 'admin/sales',
  loadComponent: () => 
    import('./private/sales/sales').then(m => m.Sales)
},
{
  path: 'admin/lotes',
  loadComponent: () => 
    import('./private/lotes/lotes').then(m => m.Lotes)
},
{
  path: 'admin/calidad',
  loadComponent: () =>
    import('./private/calidad/calidad').then(m => m.Calidad)
}


];
