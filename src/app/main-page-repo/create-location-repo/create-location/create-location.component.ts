import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Location as MyLocation } from '../../../models/location.model';
import { LocationService } from '../../../services/location.service';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  styleUrls: ['./create-location.component.scss']
})
export class CreateLocationComponent {
  @Output() locationAdded = new EventEmitter<MyLocation>();

  locationForm = new FormGroup({
    locationName: new FormControl(''),
    street: new FormControl(''),
    city: new FormControl(''),
    zip: new FormControl(''),
    state: new FormControl('')
  });

  constructor(private locationService: LocationService) {}

  onCreateLocation() {
    if (this.locationForm.valid) {
      this.locationService.addLocation(this.locationForm.value as MyLocation).subscribe({
        next: (response: MyLocation) => {
          console.log('Location added:', response);
          this.locationAdded.emit(response);
          this.locationForm.reset(); // Optionally reset the form after successful submission
          // Consider showing a success message to the user
        },
        error: (error: any) => {
          console.error('Error adding location:', error);
          // Consider showing an error message to the user
        }
      });
    } else {
      console.error('Form is invalid');
      // Highlight the form fields with validation errors
      Object.keys(this.locationForm.controls).forEach(field => {
        const control = this.locationForm.get(field);
        control?.markAsTouched(); // This makes error messages visible if using *ngIf="control.touched"
      });
    }
  }
  
}
