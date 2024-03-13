//app.component.ts
import { Component, OnInit } from '@angular/core';
import { LocationService } from './services/location.service';
import { ReviewService } from './services/review.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Front-End';

  constructor(
    private locationService: LocationService,
    private reviewService: ReviewService
  ) {}

  ngOnInit() {
    // You can use the services here or in any other method
  }
}
