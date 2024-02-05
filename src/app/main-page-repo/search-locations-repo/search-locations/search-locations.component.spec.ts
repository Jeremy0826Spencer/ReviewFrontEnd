//search-locations.component.spec.ts
import { Component } from '@angular/core';
import { SearchLocationsComponent } from './search-locations.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SearchLocationsComponent' , () =>{
  let component: SearchLocationsComponent;
  let fixture: ComponentFixture<SearchLocationsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchLocationsComponent]
    }).compileComponents();
  })
  fixture = TestBed.createComponent(SearchLocationsComponent);
  component = fixture.componentInstance;
  fixture.detectChanges
})
it('should search', () => {
  expect(Component).toBeTruthy();
});