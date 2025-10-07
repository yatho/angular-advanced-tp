import { Component } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-reset-input',
  imports: [FormsModule],
  templateUrl: './reset-input.html',
  styleUrl: './reset-input.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ResetInput,
      multi: true,
    },
  ],
})
export class ResetInput implements ControlValueAccessor {
  private _val?: string;

  protected get val() {
    return this._val ?? '';
  }

  protected set val(val: string) {
    this._val = val;
    this.onTouched();
    this.onChange(val);
  }

  private onTouched = () => {};
  private onChange = (val: any) => {};

  writeValue(obj?: string): void {
    this._val = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  protected reset(): void {
    delete this._val;
    this.onTouched();
    this.onChange(this._val);
  }
}
