//form-control.components.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Observable, of } from 'rxjs';
import { ButtonComponent } from "../../../components/button/button.component";

@Component({
    standalone: true,
    selector: 'app-search-form',
    templateUrl: './form-control.component.html',
    styleUrls: ['./form-control.component.scss'],
    imports: [ReactiveFormsModule, ButtonComponent]
})
export class FormControlComponent {
  city = new FormControl('');
  location_name = new FormControl('');

  constructor(private _apiService: ApiService) {}
  /*
  searchLocations(): Observable<any[]>  {
    if (this.city.value && !this.location_name.value) {
      return this._apiService.getAllLocations();
      
    }else 
    return of([]);
  }
  */
  @Output() getAllLocations = new EventEmitter<void>();

  onGetAllLocations() {
    this.getAllLocations.emit();
  }

}