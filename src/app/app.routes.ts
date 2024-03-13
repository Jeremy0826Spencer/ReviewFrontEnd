//app.routes.ts
import { RouterModule, Routes } from '@angular/router';
import { LocationDetailsComponent } from './reviews-page-repo/location-details/location-details.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
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
    redirectTo: 'welcome-page', 
    pathMatch: 'full' 
  },
  { 
    path: 'create-location', 
    loadComponent: () => import('./main-page-repo/create-location-repo/create-location/create-location.component').then(m => m.CreateLocationComponent) 
  },
  { 
    path: 'welcome-page', 
    loadComponent: () => import('./main-page-repo/welcome-page/welcome-page.component').then(m => m.WelcomePageComponent) 
  },
  { path: 'location-details/:id', component: LocationDetailsComponent }, 
  // Add any other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
