import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BookmarksService } from './bookmarks.service';
@Injectable({
  providedIn: 'root',
})
export class FetchMoviesService {
  constructor(private bookmarkService: BookmarksService) {}
  info = { error: '', movies: [], title: '' };
  getMovies(title) {
    const url = `https://www.omdbapi.com/?s=${title}&apikey=9668574`;
    return fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (!res.Search) {
          this.info.movies = [];
          this.info.error = 'Not Found';
        } else {
          this.info.error = '';
          this.info.movies = res.Search;
          console.log(this.info.movies);
          for (let i = 0; i < this.info.movies.length; i++) {
            this.info.movies[i].Bookmark = false;
          }
          for (
            let i = 0;
            i < this.info.movies.length && this.bookmarkService.bookmarks;
            i++
          ) {
            const curMovie = this.info.movies[i];
            if (!this.bookmarkService.bookmarks.length) continue;
            this.bookmarkService.bookmarks.forEach((marked) => {
              if (marked.imdbID == curMovie.imdbID) {
                console.log(`${curMovie.title} present`);
                this.info.movies[i].Bookmark = true;
              }
            });
          }
        }
      });
  }
}
