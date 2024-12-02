import {Component, Input} from '@angular/core';
import { LucideAngularModule, Star } from 'lucide-angular';
import {SplitPricePipe} from "../split-price.pipe";
import {DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [LucideAngularModule, SplitPricePipe, DecimalPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  readonly Star = Star;
  stars = Array(5);
  rating = 0;
  hover = 0;
  totalStars = 5;
  @Input() product!: any;


  setRating(value: number) {
    this.rating = value;
  }
}
