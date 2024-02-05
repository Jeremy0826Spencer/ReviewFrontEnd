//app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: 'create-location', 
    loadComponent: () => import('./main-page-repo/create-location-repo/create-location/create-location.component').then(m => m.CreateLocationComponent) 
  },
  { 
    path: 'search-locations', 
    loadComponent: () => import('./main-page-repo/search-locations-repo/search-locations/search-locations.component').then(m => m.SearchLocationsComponent) 
  },
  {
    path: 'login-page',
    loadComponent: () => import('./main-page-repo/login-page/login-page.component').then(m => m.LoginPageComponent)
  },
  {
    path: 'register-page',
    loadComponent: () => import('./main-page-repo/register-page/register-page.component').then(m => m.RegisterPageComponent)
  },
  { 
    path: '', 
    redirectTo: 'create-location', 
    pathMatch: 'full' 
  }
  // Add any other routes here
];
