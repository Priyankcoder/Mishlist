import { Component, Input, OnInit } from '@angular/core';
import { FetchMoviesService } from '../fetch-movies.service';
import { BookmarksService } from '../bookmarks.service';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
  @Input() movies;
  info;
  setBookmarks = this.bookmarkService.setBookmarks;
  removeBookmarks = this.bookmarkService.removeBookmarks;
  toggleBookmarks = this.bookmarkService.toggleBookmarks;
  bookmarks = this.bookmarkService.bookmarks;
  types = this.bookmarkService.types;
  
  constructor(
    public movieService: FetchMoviesService,
    private bookmarkService: BookmarksService
  ) {}

  ngOnInit(): void {
    this.bookmarkService.getBookmarks();
    this.info = this.movieService.info;
  }
}
