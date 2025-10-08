import { Component, inject } from '@angular/core';
import { Posts, Post } from '../services/posts';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { TplCardList } from 'lib';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
  imports: [RouterOutlet, RouterLink, AsyncPipe, TplCardList],
})
export class PostList {
  private postService = inject(Posts);
  protected posts$ = this.postService.getPosts();

  protected selectedPost(post: Post): void {
    this.postService.selectPost(post);
  }
}
