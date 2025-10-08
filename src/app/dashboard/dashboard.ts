import { Component, inject } from '@angular/core';
import { Logger } from 'lib';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor() {
    inject(Logger).warn('Dashboard component created');
    inject(Logger).debug('Dashboard component created');
    inject(Logger).info('Dashboard component created');
    inject(Logger).error('Dashboard component created');
  }
}
