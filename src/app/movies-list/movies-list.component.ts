import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  moviesList = [];
  constructor(private movieService : MoviesService) { }

  ngOnInit(): void {

    this.getAllMovies();
  }

  getAllMovies(){
    
  }
}
