import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  moviesList: any = [];
  constructor(private movieService: MoviesService, private router: Router) { }

  ngOnInit(): void {

    this.getAllMovies();
  }

  getAllMovies() {

    this.movieService.getAllMovies().subscribe((res: any) => {
      if (res.data) {
        this.moviesList = res.data;
      }
    })
  }

  addmovie() {
    this.router.navigate(["add"]);
  }

  editMovie(movie: any) {
    this.router.navigate(["edit/" + movie._id]);
  }

  deleteMovie(movie: any) {
    this.movieService.deleteMovies(movie._id).subscribe((res: any) => {
      if (res.data) {
        alert("Movie Deleted");
        this.getAllMovies();
      }
    })
  }
}
