import { TestBed } from '@angular/core/testing';
import { provideRouter, RouterModule } from '@angular/router';
import { App } from './app';
import { provideZonelessChangeDetection } from '@angular/core';
import { describe, beforeEach, it, expect } from 'vitest';
import { Header } from './header/header';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
        Header,
        App
    ],
    providers: [
        provideZonelessChangeDetection(),
        provideRouter([])
    ]
}).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
