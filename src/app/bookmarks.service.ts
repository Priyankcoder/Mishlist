import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookmarksService {
  bookmarks = [];
  types = {movie: [], series: [], episode: []}
  constructor() {}
  getBookmarks() {
    const data = JSON.parse(localStorage.getItem('bookmarks'));
    console.log(data);
    this.bookmarks = data;
    for (let i = 0; this.bookmarks && i < this.bookmarks.length; i++) {
      const movie = this.bookmarks[i];
      const type = movie.Type;
      this.types[type].push(movie);
    }
    return data;
  }
  setBookmarks(movieData) {
    movieData.Bookmark = true;
    for (let i = 0; this.bookmarks && i < this.bookmarks.length; i++) {
      if (this.bookmarks[i].imdbID == movieData.imdbID) {
        return;
      }
    }
    this.bookmarks.push(movieData);
    const type = movieData.Type;
    this.types[type].push(movieData);
    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
  }
  removeBookmarks(movieData) {
    movieData.Bookmark = false;
    const id = movieData.imdbID;
    this.bookmarks.filter(item => item.imdbID != id);
    const type = movieData.Type;
    this.types[type].filter(item => item.imdbID != id);
    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
  }
  
  toggleBookmarks(movieData) {
    const marked = movieData.Bookmark;
    if (!marked) {
      this.setBookmarks(movieData);
    } else {
      this.removeBookmarks(movieData);
    }
  }
}
