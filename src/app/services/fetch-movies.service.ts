import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BookmarksService } from './bookmarks.service';
@Injectable({
  providedIn: 'root',
})
export class FetchMoviesService {
  constructor(private bookmarkService: BookmarksService) {}
  info = { error: '', movies: [], title: '' };

  //Function to fetch movies from omDB 
  getMovies(title) {
    const url = `https://www.omdbapi.com/?s=${title}&apikey=9668574`;
    return fetch(url)
      .then((res) => res.json())
      .then((res) => {
        //if response is not valid (contains error message)
        if (!res.Search) {
          //initialise movies array to empty
          this.info.movies = [];
          //initialise error to "Not found"
          this.info.error = 'Not Found';
        } else {
          // if response is valid
          //initialise error to empty and movies array equal to response
          this.info.error = '';
          this.info.movies = res.Search;
          // console.log(this.info.movies);
          //initialise each fetched movie as unbookmarked 
          for (let i = 0; i < this.info.movies.length; i++) {
            this.info.movies[i].Bookmark = false;
          }
          //If user have bookmarked movies and those bookmarked movies
          //is present in the fetched movies then mark such movies.
          //This bool value will be used to show star on such movies.
          for (
            let i = 0;
            i < this.info.movies.length;
            i++
          ) {
            const curMovie = this.info.movies[i];
            if (!this.bookmarkService.bookmarks || !this.bookmarkService.bookmarks.length) continue;
            this.bookmarkService.bookmarks.forEach((marked) => {
              if (marked.imdbID == curMovie.imdbID) {
                // console.log(`${curMovie.title} present`);
                this.info.movies[i].Bookmark = true;
              }
            });
          }
        }
      });
  }
}
