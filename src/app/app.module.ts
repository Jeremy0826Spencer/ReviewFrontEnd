import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HeaderComponent } from './components/header/header.component';
import { SearchLocationsComponent } from './main-page-repo/search-locations-repo/search-locations/search-locations.component';
import { ButtonComponent } from './components/button/button.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './main-page-repo/login-page/login-page.component';
// Import LocationService and ReviewService if they are not provided in 'root'
import { LocationService } from '../app/services/location.service';
import { ReviewService } from '../app/services/review.service';
import { LocationDetailsComponent } from './reviews-page-repo/location-details/location-details.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        LocationDetailsComponent,
        //HeaderComponent,
        //SearchLocationsComponent,
        //ButtonComponent,
        //LoginPageComponent,
        // Add other components, directives, and pipes here
    ],
    providers: [
    // Remove ApiService if it's split and add LocationService, ReviewService if needed
    // If these services use providedIn: 'root', they can be omitted here
    // LocationService,
    // ReviewService,
    ],
    bootstrap: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        AppMaterialModule,
        HeaderComponent,
        RouterModule.forRoot([]),
    ]
})
export class AppModule { }
