import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Lib } from 'lib';
import { Header } from './header/header';
import { Dashboard } from './dashboard/dashboard';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    Header,
    Dashboard
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Lib
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
