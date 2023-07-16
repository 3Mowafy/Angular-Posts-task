import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() posts = new EventEmitter();

  filterPosts(search: any) {
    setTimeout(() => {
      this.posts.emit(search);
    }, 400);
  }
}
