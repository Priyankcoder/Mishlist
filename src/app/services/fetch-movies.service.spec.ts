import { TestBed } from '@angular/core/testing';

import { FetchMoviesService } from './fetch-movies.service';

describe('FetchMoviesService', () => {
  let service: FetchMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
