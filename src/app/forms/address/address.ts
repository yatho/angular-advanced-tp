import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AddressInput } from 'lib';

@Component({
  selector: 'app-address',
  imports: [ReactiveFormsModule, AddressInput],
  templateUrl: './address.html',
  styleUrl: './address.css',
})
export class Address {
  protected formGroup = new FormGroup({
    address: new FormControl<Address | null>(null),
  });

  public test = new FormControl<Address | null>(null);

  submit(): void {
    console.log(this.formGroup.value);
  }
}
