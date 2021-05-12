import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../bookmarks.service';
import { FetchMoviesService } from '../fetch-movies.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css'],
})
export class BookmarkComponent implements OnInit {
  constructor(
    public bookmarkService: BookmarksService,
    private movieService: FetchMoviesService
  ) {}
  ngOnInit(): void {
    this.bookmarkService.getBookmarks();
  }
}
