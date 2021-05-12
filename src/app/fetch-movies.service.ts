import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BookmarksService } from './bookmarks.service';
@Injectable({
  providedIn: 'root',
})
export class FetchMoviesService {
  constructor(private bookmarkService: BookmarksService) {}
  error;
  movies = [];
  title;
  getMovies() {
    const url = `https://www.omdbapi.com/?s=${this.title}&apikey=9668574`;
    return fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (!res.Search) {
          this.movies = [];
          this.error = 'Not Found';
        } else {
          this.error = '';
          this.movies = res.Search;
          console.log(this.movies);
          for (let i = 0; i < this.movies.length; i++) {
            this.movies[i].Bookmark = false;
          }
          for (let i = 0; i < this.movies.length && this.bookmarkService.bookmarks; i++) {
            const curMovie = this.movies[i];
              if (!this.bookmarkService.bookmarks.length) continue;
                this.bookmarkService.bookmarks.forEach((marked) => {
                  if (marked.imdbID == curMovie.imdbID) {
                    console.log(`${curMovie.title} present`);
                    this.movies[i].Bookmark = true;
                  }
                });
          }
        }
      });
  }
}
