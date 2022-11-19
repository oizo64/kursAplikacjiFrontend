import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'app-admin-product-form',
    template: `
    <div [formGroup]="parentForm" fxLayout="column">
        <mat-form-field appearance="fill">
        <mat-label>Nazwa</mat-label>
        <input matInput placeholder="Podaj nazwe produktu" formControlName="name">
        <div *ngIf="name?.invalid && (name?.dirty || name?.touched)" class="errorMessages">
                <div *ngIf="name?.errors?.['required']">
                    Nazwa jest wymagana
                </div>
                <div *ngIf="name?.errors?.['minlength']">
                    Nazwa musi mie przynajmniej cztery znaki
                </div>
            </div>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Opis</mat-label>
            <textarea matInput rows="20" placeholder="Podaj opis produktu" formControlName="description"></textarea>
            <div *ngIf="description?.invalid && (description?.dirty || description?.touched)" class="errorMessages">
                <div *ngIf="description?.errors?.['required']">
                    Opis jest wymagany
                </div>
                <div *ngIf="description?.errors?.['minlength']"> <!--minlength - musi byc z małych liter-->
                    Opis musi mie przynajmniej cztery znaki
                </div>
            </div>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Kategoria</mat-label>
            <input matInput placeholder="Podaj kategorię produktu" formControlName="category">
            <div *ngIf="category?.invalid && (category?.dirty || category?.touched)" class="errorMessages">
                <div *ngIf="category?.errors?.['required']">
                    Kategoria jest wymagana
                </div>
                <div *ngIf="category?.errors?.['minlength']"><!--minlength - musi byc z małych liter-->
                Kategoria musi mie przynajmniej cztery znaki
                </div>
            </div>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Cena</mat-label>
            <input matInput placeholder="Podaj cenę produktu" formControlName="price">
            <div *ngIf="price?.invalid && (price?.dirty || price?.touched)" class="errorMessages">
                <div *ngIf="price?.errors?.['required']">
                    Wartość jest wymagana
                </div>
                <div *ngIf="price?.errors?.['min']">
                    Cena musi by wieksza od 0
                </div>
            </div>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Waluta</mat-label>
            <input matInput placeholder="Podaj walutę produktu" formControlName="currency">
            <div *ngIf="currency?.invalid && (currency?.dirty || currency?.touched)" class="errorMessages">
                <div *ngIf="currency?.errors?.['required']">
                    Waluta jest wymagana
                </div>
            </div>
        </mat-form-field>

        <div fxLayoutAlign="end center">
            <button mat-flat-button color="primary" [disabled]="!parentForm.valid">Zapisz</button>
        </div>
    </div>`,
    styles: [`
        .errorMessages{
            color: red;
        }
        `]

})
export class AdminProductFormComponent implements OnInit {

    @Input() parentForm!: FormGroup

    ngOnInit(): void {

    }

    get name() {
        return this.parentForm.get("name");
    }
    get description() {
        return this.parentForm.get("description");
    }

    get category() {
        return this.parentForm.get("category");
    }

    get price() {
        return this.parentForm.get("price");
    }

    get currency() {
        return this.parentForm.get("currency");
    }
}