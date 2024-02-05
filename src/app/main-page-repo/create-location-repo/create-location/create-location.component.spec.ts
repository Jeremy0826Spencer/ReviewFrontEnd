//create location component spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateLocationComponent } from './create-location.component';

describe('CreateLocationComponent', () => {
  let component: CreateLocationComponent;
  let fixture: ComponentFixture<CreateLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Directly import the standalone component
      imports: [CreateLocationComponent]
    }).compileComponents();
    
    fixture = TestBed.createComponent(CreateLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
