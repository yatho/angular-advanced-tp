import { Component, inject } from '@angular/core';
import { Posts, Post } from '../services/posts';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Logger, LoggerLevel, provideLogger, TplCardList } from 'lib';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
  imports: [RouterOutlet, RouterLink, AsyncPipe, TplCardList],
  providers: [provideLogger(LoggerLevel.DEBUG)],
})
export class PostList {
  private postService = inject(Posts);
  protected posts$ = this.postService.getPosts();

  constructor() {
    inject(Logger).debug('PostList created');
    inject(Logger).error('PostList created');
    inject(Logger).warn('PostList created');
    inject(Logger).info('PostList created');
  }

  protected selectedPost(post: Post): void {
    this.postService.selectPost(post);
  }
}
