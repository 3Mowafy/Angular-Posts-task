import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseLink: string =
    'https://task.astra-tech.net/fronendtask/public/api/';

  public posts!: Post[];

  private sharedData: Subject<any> = new Subject<any>();
  sharedData$: Observable<any> = this.sharedData.asObservable();

  setData(updatedData: any) {
    this.sharedData.next(updatedData);
  }

  constructor(private _http: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this._http.get<Post[]>(`${this.baseLink}getposts`);
  }

  showAllPosts() {
    return this.getAllPosts().subscribe((posts) => (this.posts = posts));
  }

  addPost(postData: FormData): Observable<Post> {
    return this._http.post<Post>(`${this.baseLink}create`, postData);
  }

  editPost(editedData: FormData): Observable<Post> {
    return this._http.post<Post>(`${this.baseLink}updatepost`, editedData);
  }

  removePost(id: number): Observable<number> {
    return this._http.post<number>(`${this.baseLink}deletepost`, { id });
  }
}
