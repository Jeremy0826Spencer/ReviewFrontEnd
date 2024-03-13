import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationService } from '../../services/location.service';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {
  locationId!: number;
  location: any; // Consider defining a more specific type
  reviews: any[] = []; // Consider defining a more specific type
  isLoading: boolean = true;
  error: any = null;
  reviewForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService,
    private reviewService: ReviewService,
    private fb: FormBuilder
  ) {
    // Initializing the form group with only the 'content' control
    this.reviewForm = this.fb.group({
      content: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.locationId = +id;
      this.fetchLocationDetails();
    } else {
      // Handle the case where 'id' is null or undefined
    }
  }

  fetchLocationDetails() {
    this.isLoading = true;
    this.locationService.getLocationDetails(this.locationId).subscribe({
      next: (data) => {
        this.location = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.error = error;
        this.isLoading = false;
      }
    });
  }

  getStarsWidth(rating: number): string {
    return `${rating * 20}%`;
  }
  

  loadReviews() {
    this.reviewService.getReviewsByLocationId(this.locationId).subscribe({
      next: (data) => {
        this.reviews = data;
      },
      error: (error) => {
        console.error('Error fetching reviews:', error);
      }
    });
  }

  submitReview() {
    if (this.reviewForm.valid) {
      // Prepare the payload with a placeholder for reviewUserId
      const payload = {
        reviewUserId: 1, // Placeholder or implement logic to get the actual user ID
        reviewLocationId: this.locationId,
        reviewText: this.reviewForm.value.content
      };
  
      this.reviewService.createReview(payload).subscribe({
        next: (review) => {
          console.log('Review posted:', review);
          this.reviews.push(review); // Optionally update the UI with the new review
          this.reviewForm.reset(); // Reset the form after successful submission
        },
        error: (error) => console.error('Error posting review:', error)
        // Handle submission error
      });
    }

    
  }
  
  
}
