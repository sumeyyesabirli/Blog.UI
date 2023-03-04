import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private readonly http: HttpClient) { }

  apiBaseUrl = environment.apiBaseUrl;

  getAllPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.apiBaseUrl + '/api/post');
  }

  getPostById(id:string):Observable<Post>{
    return this.http.get<Post>(this.apiBaseUrl + '/api/posts' + id );
  }
}
