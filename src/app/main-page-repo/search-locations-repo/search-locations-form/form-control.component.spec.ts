//form.control.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlComponent } from './form-control.component';

describe('FormControlComponent', () => {
  let component: FormControlComponent;
  let fixture: ComponentFixture<FormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
