import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../bookmarks.service';
@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css'],
})
export class BookmarkComponent implements OnInit {
  totalBookmarks = 0;
  bookmarks = [];
  types = { movie: [], series: [], episode: [] };
  movies = 0;
  series = 0;
  episodes = 0;
  constructor(private bookmarkService: BookmarksService) {}
  ngOnInit(): void {
    this.bookmarkService.getBookmarks();
    this.totalBookmarks = this.bookmarkService.bookmarks.length;
    this.movies = this.bookmarkService.types.movie.length;
    this.series = this.bookmarkService.types.series.length;
    this.episodes = this.bookmarkService.types.episode.length;
    console.log(this.bookmarks);

  }
}
