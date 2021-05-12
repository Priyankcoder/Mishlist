import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { FetchMoviesService } from '../fetch-movies.service';
import { BookmarksService } from '../bookmarks.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
//Poster, Title, Imageurl, imdbID;
export class HomeComponent implements OnInit {
  // movies = this.movieService.movies;
  // title = this.movieService.title;
  // error = this.movieService.error;
  movies;
  title;
  constructor(
    public movieService: FetchMoviesService,
    private bookmarkService: BookmarksService
  ) {
    this.movies = {}, this.title = "";
  }

  ngOnInit(): void {
    this.bookmarkService.getBookmarks();
    this.movies = this.movieService.info.movies;
  }
}
