import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
