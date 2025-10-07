import { TestBed } from '@angular/core/testing';
import { Author } from './author';
import { describe, beforeEach, afterEach, it, expect } from 'vitest';
import { provideZonelessChangeDetection } from '@angular/core';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import type { Author as AuthorType } from '../services/authors';

describe('Author', () => {
  let harness: RouterTestingHarness;
  let httpTesting: HttpTestingController;

  const mockAuthor: AuthorType = {
    name: 'John Doe',
    photo: 'https://example.com/photo.jpg',
    pseudo: ['johndoe', 'jdoe'],
    address: {
      number: '123',
      street: 'Main Street',
      postalCode: '12345',
      city: 'Paris',
      country: 'France'
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [Author],
    providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([
            {
                path: 'author',
                component: Author,
                resolve: {
                    post: () => ({ author: 1 })
                }
            }
        ])
    ]
}).compileComponents();

    harness = await RouterTestingHarness.create('/author');
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should create', () => {
    const req = httpTesting.expectOne('/api/authors/1');
    req.flush(mockAuthor);

    expect(harness.routeDebugElement?.componentInstance).toBeTruthy();
  });

  it('should fetch and display author data', async () => {
    const req = httpTesting.expectOne('/api/authors/1');
    req.flush(mockAuthor);

    await harness.fixture.whenStable();
    const compiled = harness.routeNativeElement!;

    const img = compiled.querySelector('img') as HTMLImageElement;
    expect(img.src).toBe(mockAuthor.photo);
    expect(img.alt).toBe('Auteur');

    const h2 = compiled.querySelector('h2');
    expect(h2?.textContent?.trim()).toBe(mockAuthor.name);
  });

  it('should display all pseudos', async () => {
    const req = httpTesting.expectOne('/api/authors/1');
    req.flush(mockAuthor);

    await harness.fixture.whenStable();
    const compiled = harness.routeNativeElement!;

    const pseudos = Array.from(compiled.querySelectorAll('p i')).map(el => el.textContent?.trim());
    expect(pseudos).toEqual(mockAuthor.pseudo);
  });

  it('should display address when present', async () => {
    const req = httpTesting.expectOne('/api/authors/1');
    req.flush(mockAuthor);

    await harness.fixture.whenStable();
    const compiled = harness.routeNativeElement!;

    const addressParagraphs = Array.from(compiled.querySelectorAll('p')).filter(p => !p.querySelector('i'));
    const addressText = addressParagraphs[0]?.textContent?.trim().replace(/\s+/g, ' ');

    expect(addressText).toContain(mockAuthor.address.number);
    expect(addressText).toContain(mockAuthor.address.street);
    expect(addressText).toContain(mockAuthor.address.postalCode);
    expect(addressText).toContain(mockAuthor.address.city);
    expect(addressText).toContain(mockAuthor.address.country);
  });

  it('should not display address when not present', async () => {
    const authorWithoutAddress = { ...mockAuthor, address: null as any };

    const req = httpTesting.expectOne('/api/authors/1');
    req.flush(authorWithoutAddress);

    await harness.fixture.whenStable();
    const compiled = harness.routeNativeElement!;

    const addressParagraphs = Array.from(compiled.querySelectorAll('p')).filter(p => !p.querySelector('i'));
    expect(addressParagraphs.length).toBe(0);
  });

  it('should handle multiple pseudos correctly', async () => {
    const authorWithManyPseudos = {
      ...mockAuthor,
      pseudo: ['pseudo1', 'pseudo2', 'pseudo3']
    };

    const req = httpTesting.expectOne('/api/authors/1');
    req.flush(authorWithManyPseudos);

    await harness.fixture.whenStable();
    const compiled = harness.routeNativeElement!;

    const pseudoElements = compiled.querySelectorAll('p i');
    expect(pseudoElements.length).toBe(3);
    expect(pseudoElements[0].textContent?.trim()).toBe('pseudo1');
    expect(pseudoElements[1].textContent?.trim()).toBe('pseudo2');
    expect(pseudoElements[2].textContent?.trim()).toBe('pseudo3');
  });

  it('should extract author id from route data', async () => {
    const req = httpTesting.expectOne('/api/authors/1');
    expect(req.request.url).toBe('/api/authors/1');
    req.flush(mockAuthor);
  });
});
