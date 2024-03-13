// search-locations.component.ts
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LocationService } from '../../../services/location.service';
import { HeaderComponent } from "../../../components/header/header.component";
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-search-locations',
    standalone: true,
    templateUrl: './search-locations.component.html',
    styleUrls: ['./search-locations.component.scss'],
    imports: [
        ReactiveFormsModule,
        HeaderComponent,
        CommonModule,
        RouterModule,
        
    ]
})
export class SearchLocationsComponent{
  lstLocations: any[] = [];
  searchedCity: string = '';
  mostReviewedLocation: any = null;

  // Define the form controls
  searchForm = new FormGroup({
    city: new FormControl(''),
    locationName: new FormControl(''),
  });

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    const placeholderCity = "Example City"; // Your placeholder city
    this.searchedCity = placeholderCity;
    this.searchForm.get('city')?.setValue(placeholderCity);
  
    // Fetch the most reviewed location for the placeholder city
    this.locationService.getMostReviewedLocation(placeholderCity).subscribe({
      next: (location) => {
        this.mostReviewedLocation = location;
      },
      error: (error) => {
        console.error('Error fetching most reviewed location for placeholder city:', error);
        this.mostReviewedLocation = null; // Reset or handle error
      }
    });
  }
  

  onGetAllLocations() {
    this.locationService.getAllLocations().subscribe(locations => {
      this.lstLocations = locations;
    }, error => {
      console.error('Error fetching locations:', error);
    });
  }
 
  onSearchLocations() {
    const { city, locationName } = this.searchForm.value;
    this.searchedCity = city ?? ''; // Keep track of the searched city
    if (city) {
      this.locationService.getMostReviewedLocation(city).subscribe({
        next: (location) => {
          this.mostReviewedLocation = location;
        },
        error: (error) => {
          console.error('Error fetching most reviewed location:', error);
          this.mostReviewedLocation = null; // Reset or handle error
        }
      });
    }
    if (city && locationName) {
      // Search by both city and location name
      this.locationService.getLocationByCityAndName(city, locationName).subscribe(locations => {
        this.lstLocations = locations;
      }, error => {
        console.error('Error searching for locations:', error);
      });
    } else if (city) {
      // Search by city only
      this.locationService.getLocationByCity(city).subscribe(locations => {
        this.lstLocations = locations;
      }, error => {
        console.error('Error searching for locations by city:', error);
      });
    } else if (locationName) {
      // Search by location name only
      this.locationService.getLocationByName(locationName).subscribe(locations => {
        this.lstLocations = locations;
      }, error => {
        console.error('Error searching for locations by name:', error);
      });
    } else {
      // Fallback to show all locations if no search criteria are provided
      this.onGetAllLocations();
    }
  }
  
  
  // Optionally, include the findReviews function here if it's related
}
