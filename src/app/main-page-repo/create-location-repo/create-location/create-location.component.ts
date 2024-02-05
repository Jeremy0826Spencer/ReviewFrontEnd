//create-location.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { HeaderComponent } from '../../../components/header/header.component';
import { CreateLocationFormComponent } from '../create-location-form/create-location-form.component';
import { ApiService } from '../../../services/api.service';
import { Location as MyLocation } from '../../../Classes/Location';
import { FormGroup, FormControl } from '@angular/forms';
//import { Location as ExternalLocation } from 'your-external-library'; // If you have an external 'Location' type, provide its path or library name

@Component({
  selector: 'app-create-location',
  standalone: true,
  imports: [
    ButtonComponent,
    HeaderComponent,
    CreateLocationFormComponent,
  ],
  templateUrl: './create-location.component.html',
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

  constructor(private apiService: ApiService) {}

  onCreateLocation(formData: MyLocation) {
    this.apiService.addLocation(formData).subscribe({
      next: (response) => {
        console.log('Location added:', response);
        this.locationAdded.emit(response); // Emit the response
      },
      error: (error) => console.error('Error adding location:', error)
    });
  }
}
