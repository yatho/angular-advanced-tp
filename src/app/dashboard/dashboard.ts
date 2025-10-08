import { Component, inject } from '@angular/core';
import { Logger, Toaster } from 'lib';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  private toastService = inject(Toaster);

  constructor() {
    inject(Logger).warn('Dashboard component created');
    inject(Logger).debug('Dashboard component created');
    inject(Logger).info('Dashboard component created');
    inject(Logger).error('Dashboard component created');
  }

  displayNotif() {
    this.toastService.show({
      text: "Affichage d'un texte",
    });
  }
}
