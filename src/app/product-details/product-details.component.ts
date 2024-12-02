import {Component, OnInit} from '@angular/core';
import {LucideAngularModule, Star} from "lucide-angular";
import {CommonModule} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product.service";
import {ReviewModalComponent} from "../review-modal/review-modal.component";
import {SplitPricePipe} from "../split-price.pipe";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [LucideAngularModule, CommonModule, ReviewModalComponent, SplitPricePipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  productId!: string;
  product: any;
  showModal= false;
  readonly Star = Star;
  stars = Array(5);
  rating = 0;

  constructor(private route: ActivatedRoute,
              private productService: ProductService) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductWithReviewsById(this.productId).subscribe({
      next: (data) => {
        this.product = data;
      }, error: (error) => console.error('Error fetching product: ', error)
    });
  }

  get starsDistribution(): { star: number; count: number }[] {
    const stars = this.product?.reviews.map((review: { rating: number }) => review.rating) || [];
    return Array.from({ length: 5 }, (_, index) => {
      const star = index + 1;
      const count = stars.filter((rating: number) => rating === star).length||0;
      return { star, count };
    });
  }

  get totalReviews(): number {
    return this.starsDistribution.reduce((sum, item) => sum + item.count, 0);
  }

  hanldeReviewSubmit(review: any) {
    this.productService.createReview(review).subscribe({
      next: (data) => {
        //refresh product
        this.productService.getProductWithReviewsById(this.productId).subscribe({
          next: (data) => {
            this.product = data;
          }, error: (error) => console.error('Error fetching product: ', error)
        });
        this.showModal = false;
      }, error: (error) => console.error('Error adding review: ', error)
    });
  }
}
