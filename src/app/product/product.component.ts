import { Component } from '@angular/core';
import { LucideAngularModule, Star } from 'lucide-angular';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  readonly Star = Star;
  stars = Array(5);
  rating = 0;
  hover = 0;
  totalStars = 5;


  setRating(value: number) {
    this.rating = value;
  }
}
