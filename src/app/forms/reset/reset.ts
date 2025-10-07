import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ResetInput } from 'lib';

@Component({
  selector: 'app-reset',
  imports: [ResetInput, ReactiveFormsModule],
  templateUrl: './reset.html',
  styleUrl: './reset.css',
})
export class Reset {
  protected formGroup = new FormGroup({
    formControl: new FormControl<string | null>(null),
  });

  submit(): void {
    console.log(this.formGroup.value);
  }
}
