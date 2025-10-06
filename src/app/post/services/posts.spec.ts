import { TestBed } from '@angular/core/testing';

import { Posts } from './posts';
import { beforeEach, describe, expect, it } from 'vitest';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

describe('Posts', () => {
  let service: Posts;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideHttpClient()]
    });
    service = TestBed.inject(Posts);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
