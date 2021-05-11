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
  movies = [];
  title;
  error;
  constructor(
    private movieService: FetchMoviesService,
    private bookmarkService: BookmarksService
  ) {}
  searchMovie(title) {
    this.movieService.getMovies(title).then((res) => {
      if (!res.Search) {
        this.error = 'Not Found';
      } else {
        this.error = '';
        this.movies = res.Search;
        console.log(this.movies);
        for (let i = 0; i < this.movies.length; i++) {
          this.movies[i].Bookmark = false;
        }
        for (let i = 0; i < this.movies.length; i++) {
          const curMovie = this.movies[i];
          this.bookmarkService.bookmarks.forEach((marked) => {
            if (marked.imdbID == curMovie.imdbID) {
              console.log(`${curMovie.title} present`)
              this.movies[i].Bookmark = true;
            }
          });
        }
      }
    });
  }
  ngOnInit(): void {
    this.bookmarkService.getBookmarks();
  }
}
