import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostList } from './post-list';
import { describe, beforeEach, it, expect } from 'vitest';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, RouterModule } from '@angular/router';

describe('PostList', () => {
  let component: PostList;
  let fixture: ComponentFixture<PostList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PostList],
    providers: [provideZonelessChangeDetection(),
        provideHttpClient(),
        provideRouter([])
    ]
})
    .compileComponents();

    fixture = TestBed.createComponent(PostList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
