import { TestBed } from '@angular/core/testing';

import { Authors } from './authors';
import { describe, beforeEach, it, expect } from 'vitest';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

describe('Authors', () => {
  let service: Authors;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideHttpClient()],
    });
    service = TestBed.inject(Authors);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
