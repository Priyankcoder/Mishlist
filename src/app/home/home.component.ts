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
  movies = [];
  title;
  error;
  getMovies = this.movieService.getMovies;
  toggleBookmarks = this.bookmarkService.toggleBookmarks;
  constructor(
    public movieService: FetchMoviesService,
    private bookmarkService: BookmarksService
  ) {}

  ngOnInit(): void {
    this.bookmarkService.getBookmarks();
  }
}
