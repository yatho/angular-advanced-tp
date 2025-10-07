import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ClickOutside } from '../click-outside';
import { FilteredListPipe } from '../filtered-list-pipe';
import { BoldSearchText } from '../bold-search-text';

@Component({
  selector: 'lib-auto-filter-dropdown',
  imports: [FormsModule, FilteredListPipe, BoldSearchText, ClickOutside],
  templateUrl: './auto-filter-dropdown.html',
  styleUrl: './auto-filter-dropdown.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AutoFilterDropdown,
      multi: true,
    },
  ],
})
export class AutoFilterDropdown implements ControlValueAccessor {
  protected searchValue?: string;
  protected openned = false;

  set value(value: string) {
    this.searchValue = value;
    this.openned = false;
    this.onChange(value);
    this.onTouched();
  }

  @Input()
  options: string[] = [];
  @Input()
  placeholder: string = 'Search ...';

  private onChange = (value: string) => {};
  private onTouched = () => {};

  writeValue(obj?: string): void {
    if (obj) this.searchValue = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onOptionClick(option: string) {
    this.value = option;
  }
}
