import { inject } from '@angular/core';
import { Author } from './author/author';
import { PostDetail } from './post-detail/post-detail';
import { PostList } from './post-list/post-list';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Posts } from './services/posts';

export const routes = [
  {
    path: '',
    component: PostList,
    children: [
      {
        path: ':id',
        resolve: {
          post: (route: ActivatedRouteSnapshot) => inject(Posts).getPostById(route.params['id'])
        },
        children: [
          {
            path: '',
            component: PostDetail,
          },
          {
            path: '',
            outlet: 'author',
            component: Author
          }
        ]
      }
    ]
  }
];