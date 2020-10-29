import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MOVIES } from '../mock-movies';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor() { }

  title = "Movie app"

  movies = MOVIES;

  term: string;
  selectedMovie: Movie;

  onSelectMovie(movie: Movie): void {
    this.selectedMovie = movie;
  }

  ngOnInit(): void {
  }

}
