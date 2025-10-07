import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AutoFilterDropdown } from 'lib';

@Component({
  selector: 'app-autocomplete',
  imports: [ReactiveFormsModule, AutoFilterDropdown],
  templateUrl: './autocomplete.html',
  styleUrl: './autocomplete.css',
})
export class Autocomplete {
  protected categories = ['angular', 'react', 'vuejs', 'svelte', 'elm', 'other'];

  public formGroup = new FormGroup({
    category: new FormControl(),
  });

  submit(): void {
    console.log(this.formGroup.value);
  }
}
