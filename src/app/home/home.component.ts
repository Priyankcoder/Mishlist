//This component provide search functionality and fetch the searched movies
//data and pass that data to collection component via input.
//Collection component then render UI for those movies nicely on '/home' route.

import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { FetchMoviesService } from '../services/fetch-movies.service';
import { BookmarksService } from '../services/bookmarks.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies;
  title;
  constructor(
    public movieService: FetchMoviesService,
    private bookmarkService: BookmarksService
  ) {
    (this.movies = {}), (this.title = '');
  }

  ngOnInit(): void {
    this.movies = this.movieService.info.movies;
  }
}
