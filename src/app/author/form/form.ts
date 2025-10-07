import { Component, inject, input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { Address, AddressInput } from 'lib';
import { take } from 'rxjs';
import { Author, Authors } from '../../post/services/authors';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, AddressInput],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  private authorService = inject(Authors);
  public id = input<number>();

  protected formGroup = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    photo: new FormControl<string>('', {
      nonNullable: true,
    }),
    pseudo: new FormArray<FormControl<string>>([]),
    address: new FormControl<Address>(
      {
        postalCode: '',
        city: '',
        country: '',
      },
      {
        nonNullable: true,
      },
    ),
  });

  ngOnInit(): void {
    if (!this.id()) return;

    this.authorService
      .getAuthorById(this.id()!)
      .pipe(take(1))
      .subscribe((author) => {
        author.pseudo.forEach(() => this.addPseudo());
        this.formGroup.patchValue(author);
      });
  }

  protected saveAuthor(): void {
    if (this.formGroup.invalid) return;

    const author: Author = this.formGroup.getRawValue();
    console.log(author);
    // if (this.id()) {
    //   this.authorService.update(this.id()!, author).pipe(take(1)).subscribe();
    //   return;
    // }
    // this.authorService.create(author).pipe(take(1)).subscribe();
  }

  protected addPseudo(): void {
    this.formGroup.controls.pseudo.push(new FormControl<string>('', { nonNullable: true }));
  }

  protected deletePseudo(index: number): void {
    this.formGroup.controls.pseudo.removeAt(index);
  }
}
