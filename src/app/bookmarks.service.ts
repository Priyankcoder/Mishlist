import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookmarksService {
  bookmarks = [];
  constructor() {}
  getBookmarks() {
    const data = JSON.parse(localStorage.getItem('bookmarks'));
    console.log(data);
    this.bookmarks = data;
    return data;
  }
  setBookmarks(movieData) {
    this.bookmarks.push(movieData);
    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
  }
  removeBookmarks(movieData) {
    const id = movieData.imdbID;
    this.bookmarks.filter(item => item.imdbID != id);
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
