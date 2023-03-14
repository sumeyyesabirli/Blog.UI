import { Component, OnInit } from '@angular/core';
import { AddPostRequest } from 'src/app/models/add-post-model';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-add-post',
  templateUrl: './admin-add-post.component.html',
  styleUrls: ['./admin-add-post.component.css']
})
export class AdminAddPostComponent {

  constructor(private postService: PostService){  }

  post: AddPostRequest = {
    author: '',
    context: '',
    featuredImageUrl:'',
    publishDate:'',
    sunmary:'',
    title:'',
    updatedDate:'',
    urlHandle:'',
    visible: true,
  }

  onSubmit(): void {
    this.postService.addPost(this.post).subscribe(
      response =>{
        console.log(response)
        alert('Oluşturuldu');
      }
    );
  }

}
