import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts : Post[] = []

  constructor(private postService:PostService) {
    alert("test")
    this.postService.getAllPosts().subscribe(
      (response)=>{
        console.warn(response)
        if(response) this.posts=response;
      }
    );
  }

  ngOnInit(): void {

  }
}
