// This component renders fetched movies nicely.
import { Component, Input, OnInit } from '@angular/core';
import { FetchMoviesService } from '../services/fetch-movies.service';
import { BookmarksService } from '../services/bookmarks.service';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})

export class CollectionComponent implements OnInit {
  @Input() movies;
  info;
  constructor(
    private movieService: FetchMoviesService,
    private bookmarkService: BookmarksService
  ) {}

  ngOnInit(): void {
    this.info = this.movieService.info;
  }
}
