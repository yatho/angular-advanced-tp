import { Component, inject } from '@angular/core';
import { Posts } from '../services/posts';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.html',
    styleUrl: './post-list.css',
    imports: [RouterOutlet, NgIf, NgFor, RouterLinkActive, RouterLink, AsyncPipe]
})
export class PostList {
  protected posts$ = inject(Posts).getPosts();
}
