import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {LucideAngularModule, Star} from "lucide-angular";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-review-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    LucideAngularModule,
    NgForOf
  ],
  templateUrl: './review-modal.component.html',
  styleUrl: './review-modal.component.css'
})
export class ReviewModalComponent {
  @Input() productId!: string;
  @Output() close = new EventEmitter<void>();
  @Output() submitReview = new EventEmitter<any>();

  protected readonly Star = Star;

  reviewForm: FormGroup;
  stars = Array(1,2,3,4,5);
  rating = 0;
  loading = false;

  constructor(private formBuilder: FormBuilder) {
    this.reviewForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      content: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]],
    });
  }

  setRating(value: number) {
    this.rating = value;
  }

  onSubmit() {
    if(this.reviewForm.valid){
      this.loading = true;
      this.submitReview.emit({
        productId: this.productId,
        rating: this.rating,
        userName: this.reviewForm.controls['username'].value,
        content: this.reviewForm.controls['content'].value
      });
    }
  }

  onClose(): void {
    this.close.emit();
  }


}
