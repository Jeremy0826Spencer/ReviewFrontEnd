//app.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'Front-End';

  constructor(private _apiService: ApiService) {

    
  }

  ngOnInit() {

  }

}

