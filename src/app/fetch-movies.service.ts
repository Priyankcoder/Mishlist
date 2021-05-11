import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FetchMoviesService {

  constructor() { }

  getMovies(title) {
    const url = `https://www.omdbapi.com/?s=${title}&apikey=9668574`;
    return fetch(url).then(res => res.json()).catch(error =>console.log("Something Went Wrong", error))
    
  } 
}
