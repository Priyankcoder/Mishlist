import { Component, OnInit } from '@angular/core';
import { BookmarksService } from './services/bookmarks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'movie-app';
  
  //Fetch Bookmarks from local storage on app initialisation
  constructor(private bookmarkService: BookmarksService) {}
  ngOnInit() {
    this.bookmarkService.getBookmarks();
  }
}
