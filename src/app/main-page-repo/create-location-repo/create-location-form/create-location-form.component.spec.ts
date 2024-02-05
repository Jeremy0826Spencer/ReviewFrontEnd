//create_location_form.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLocationFormComponent } from './create-location-form.component';

describe('CreateLocationFormComponent', () => {
  let component: CreateLocationFormComponent;
  let fixture: ComponentFixture<CreateLocationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLocationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateLocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
