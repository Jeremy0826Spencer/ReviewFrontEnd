import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HeaderComponent } from './components/header/header.component';
import { SearchLocationsComponent } from './main-page-repo/search-locations-repo/search-locations/search-locations.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Corrected import here
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { LoginPageComponent } from './main-page-repo/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    // Declare other components, directives, and pipes here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppMaterialModule,
    LoginPageComponent,
    HeaderComponent,
    SearchLocationsComponent,
    ButtonComponent,
    // Import other modules here
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
