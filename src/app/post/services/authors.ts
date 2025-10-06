import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type Address = {
  number: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
}

export type Author = {
  name: string;
  photo: string;
  pseudo: string[];
  address: Address;
};

@Injectable({
  providedIn: 'root'
})
export class Authors {
  private http = inject(HttpClient);

  public getAuthorById(id: number): Observable<Author> {
    return this.http.get<Author>(`/api/authors/${id}`);
  }
}
