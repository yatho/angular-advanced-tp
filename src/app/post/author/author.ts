import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Authors } from '../services/authors';
import { AsyncPipe } from '@angular/common';
import { TplCard } from 'lib';

@Component({
  selector: 'app-author',
  templateUrl: './author.html',
  styleUrl: './author.css',
  imports: [AsyncPipe, TplCard],
})
export class Author {
  private authorService = inject(Authors);
  protected author$ = inject(ActivatedRoute).data.pipe(
    map((res) => res['post'].author),
    switchMap((authorId) => this.authorService.getAuthorById(authorId)),
  );
}
