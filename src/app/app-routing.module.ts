import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';
import { AdminViewPostComponent } from './admin/admin-view-post/admin-view-post.component';

const routes: Routes = [
  {
    path: 'admin/posts',
    component: AdminPostsComponent
  },
  {
    path: "admin/posts/:id",
    component: AdminViewPostComponent
  },{
    path:"**", redirectTo:'admin/posts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
