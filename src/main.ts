/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config';

bootstrapApplication(App, config)
  .catch(err => console.error(err));
