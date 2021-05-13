// This component fetch bookmarked movies and renders them nicely on '/bookmark'
// route
import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../services/bookmarks.service';
import { FetchMoviesService } from '../services/fetch-movies.service';

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
  
  //This function provide the length for each type in progress bar
  setStyle(cnt) {
    const total = this.bookmarkService.bookmarks.length;
    let val = 0;
    if (!total) {
      val = 0;
    } else {
      val = (cnt * 100) / total;
    }
    let styles = {
      width: val + '%',
    };
    return styles;
  }
  ngOnInit(): void {}
}
