import { NgTemplateOutlet } from '@angular/common';
import { Component, contentChild, input, TemplateRef } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'lib-tpl-card-list',
  imports: [MatCard, NgTemplateOutlet],
  templateUrl: './tpl-card-list.html',
  styleUrl: './tpl-card-list.css',
})
export class TplCardList<T> {
  list = input.required<T[]>();
  title = input.required<string>();

  rowTemplate = contentChild('rowRef', { read: TemplateRef });
}
