import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookmarksService {
  //bookmarks store bookmarked movies data
  bookmarks = [];
  //types store information about bookmarked items
  types = {movie: [], series: [], episode: []}
  constructor() {}

  //this function fetch bookmarked movies from user local storage
  getBookmarks() {
    const data = JSON.parse(localStorage.getItem('bookmarks'));
    data.forEach(item => {
      this.types[item.Type].push(item); 
    });
    // console.log(data);
    this.bookmarks = data;
    return data;
  }

  //this function set the bookmarks
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

  //this fucntion removes the bookmarks
  removeBookmarks(movieData) {
    movieData.Bookmark = false;
    const id = movieData.imdbID;
    console.log(id);
    this.bookmarks = this.bookmarks.filter(item => item.imdbID != id);
    // console.log(this.bookmarks);
    const type = movieData.Type;
    this.types[type] = this.types[type].filter(item => item.imdbID != id);
    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
  }
  
  //this function toggle bookmarks
  toggleBookmarks(movieData) {
    const marked = movieData.Bookmark;
    if (!marked) {
      this.setBookmarks(movieData);
    } else {
      this.removeBookmarks(movieData);
    }
  }
}
