import { inject, NgModule } from '@angular/core';
import { Author } from './author/author';
import { PostDetail } from './post-detail/post-detail';
import { PostList } from './post-list/post-list';
import { ActivatedRouteSnapshot, RouterModule } from '@angular/router';
import { Posts } from './services/posts';

const routes = [
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


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PostRoutingModule { }
