import {Component, OnInit} from '@angular/core';
import {ProductComponent} from "../product/product.component";
import {ProductService} from "../services/product.service";
import {HttpClientModule} from "@angular/common/http";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ProductComponent, HttpClientModule, FormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
  products: any[] = [];
  searchTerm: string = '';
  filteredProducts: any[] = [...this.products];

  constructor(private productsService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.productsService.getProductsWithReviews().subscribe({
      next: (data) => {
        this.products = data
      }, error: (error) => console.error('Error fetching products: ', error)
    });
  }

  goToProductDetails(product: any) {
    console.log('product', product);
    this.router.navigate(['/product-details', product.id]);
  }

  onSearch():void {
    this.filteredProducts = this.products.filter((product) => product.productName.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}
