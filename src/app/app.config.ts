//app.config.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    // ... other declarations
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    // ... other imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
