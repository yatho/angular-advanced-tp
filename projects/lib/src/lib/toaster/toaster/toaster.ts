import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { TOAST_DATA } from '../toaster';

@Component({
  selector: 'lib-toaster',
  imports: [NgTemplateOutlet, MatCard],
  templateUrl: './toaster.html',
  styleUrl: './toaster.css',
})
export class Toaster {
  protected readonly data = inject(TOAST_DATA);
}
