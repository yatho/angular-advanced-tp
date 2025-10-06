import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Authors } from '../services/authors';

@Component({
  selector: 'app-author',
  standalone: false,
  templateUrl: './author.html',
  styleUrl: './author.css'
})
export class Author {
  private authorService = inject(Authors);
  protected author$ = inject(ActivatedRoute).data.pipe(
    map(res => res['post'].author),
    switchMap(authorId => this.authorService.getAuthorById(authorId))
  );
}
