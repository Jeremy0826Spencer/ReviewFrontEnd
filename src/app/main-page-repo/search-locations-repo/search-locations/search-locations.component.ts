//search-locations.component.ts
import { Component, OnInit } from '@angular/core';
import { CreateLocationComponent } from '../../create-location-repo/create-location/create-location.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { HeaderComponent } from '../../../components/header/header.component';
import { FormControlComponent } from "../search-locations-form/form-control.component";
import { NgFor } from '@angular/common';
import { ApiService } from '../../../services/api.service';

@Component({
    selector: 'app-search-locations',
    standalone: true,
    templateUrl: './search-locations.component.html',
    styleUrls: ['./search-locations.component.scss'],
    imports: [
        ButtonComponent,
        HeaderComponent,
        FormControlComponent,
        NgFor
    ]
})
export class SearchLocationsComponent {
  lstLocations: any[] = [];

  constructor(private apiService: ApiService) {}


  /*
  onSearchTriggered() {
    this.apiService.getLocationByCity()
      
  }
  */
  onGetAllLocations() {
    this.loadAllLocations();
  }

  private loadAllLocations() {
    this.apiService.getAllLocations().subscribe(locations => {
      this.lstLocations = locations;
    }, error => {
      console.error('Error fetching locations:', error);
    });
  }

}
