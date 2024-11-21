import { Component } from '@angular/core';
import {LucideAngularModule, Star} from "lucide-angular";
import {CommonModule, NgClass} from "@angular/common";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [LucideAngularModule, NgClass,CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  readonly Star = Star;
  stars = Array(5);
  rating = 0;
  hover = 0;
  totalStars = 5;

  setRating(value: number) {
    this.rating = value;
  }
  activeAccordion: number | null = null;

  toggleAccordion(index: number): void {
    // Toggle the accordion state
    this.activeAccordion = this.activeAccordion === index ? null : index;
  }

  starsDistribution = [
    { star: 5, count: 50 },
    { star: 4, count: 30 },
    { star: 3, count: 15 },
    { star: 2, count: 5 },
    { star: 1, count: 2 },
  ];

  // Calculate the total number of reviews
  get totalReviews(): number {
    return this.starsDistribution.reduce((sum, item) => sum + item.count, 0);
  }

}
