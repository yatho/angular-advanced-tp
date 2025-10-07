import { Directive, ElementRef, inject, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[libBoldSearchText]',
})
export class BoldSearchText implements OnChanges {
  @Input('libBoldSearchText')
  searchText?: string;

  private el = inject(ElementRef);

  ngOnChanges(change: SimpleChanges) {
    const content = this.el.nativeElement.innerText;
    if (!content || !this.searchText) return;
    const highlightedContent = content.replace(
      new RegExp(change['searchText'].currentValue, 'gi'),
      (match: string) => `<strong>${match}</strong>`,
    );
    this.el.nativeElement.innerHTML = highlightedContent;
  }
}
