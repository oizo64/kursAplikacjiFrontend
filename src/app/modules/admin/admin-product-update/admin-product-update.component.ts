import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AdminMessageService } from '../admin-message.service';
import { AdminProductUpdateService } from './admin-product-update.service';
import { AdminProductUpdate } from './model/adminProductUpdate';

@Component({
  selector: 'app-admin-product-update',
  templateUrl: './admin-product-update.component.html',
  styleUrls: ['./admin-product-update.component.scss']
})
export class AdminProductUpdateComponent implements OnInit {
  product!: AdminProductUpdate;
  productForm!: FormGroup;
  //router: ActivatedRoute umozliwia pobranie wartosci z URL (id)
  constructor(
    private router: ActivatedRoute,
    private adminProductUpdateService: AdminProductUpdateService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private adminMessageService: AdminMessageService
  ) { }

  ngOnInit(): void {
    this.getProducts();
    this.productForm = this.formBuilder.group({
      name: [''],
      description: [''],
      category: [''],
      price: [''],
      currency: ['PLN'],
    });
  }
  getProducts() {
    //let to zmienna dostępna lokanie (nie globalnie jak var)
    let id = Number(this.router.snapshot.params['id']);
    this.adminProductUpdateService.getProduct(id)
      .subscribe(product => this.mapFromValues(product));
  }
  submit() {
    let id = Number(this.router.snapshot.params['id']);
    this.adminProductUpdateService.saveProduct(id, {
      name: this.productForm.get('name')?.value,
      description: this.productForm.get('description')?.value,
      category: this.productForm.get('category')?.value,
      price: this.productForm.get('price')?.value,
      currency: this.productForm.get('currency')?.value,
    } as AdminProductUpdate).subscribe({
      next: product => {
        this.mapFromValues(product);
        this.snackBar.open("Zapisano", '', { duration: 3000 });
      },
      error: err => this.adminMessageService.addSpringErrors(err.error)
    });
  }

  private mapFromValues(product: AdminProductUpdate): void {
    return this.productForm.setValue({
      name: product.name,
      description: product.description,
      category: product.category,
      price: product.price,
      currency: product.currency,
    });
  }
}
