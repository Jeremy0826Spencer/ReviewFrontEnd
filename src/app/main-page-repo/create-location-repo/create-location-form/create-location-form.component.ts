//create location form component
import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../components/button/button.component';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-create-location-form',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './create-location-form.component.html',
  styleUrl: './create-location-form.component.scss'
})
export class CreateLocationFormComponent {

  @Output() formSubmit = new EventEmitter<any>();

  constructor(private apiService: ApiService) {} 

  //locationId = new FormControl('');
  locationName = new FormControl('');
  street = new FormControl('');
  city = new FormControl('');
  zip = new FormControl('');
  state = new FormControl('');

  @Output() createLocation = new EventEmitter<void>();

  onCreateLocation() {

    const formData = {
      locationName: this.locationName.value,
      street: this.street.value,
      city: this.city.value,
      zip: this.zip.value,
      state: this.state.value
    };
    console.log('Form Values:', formData);
    this.formSubmit.emit(formData);
  }
}
