import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-movies',
  templateUrl: './add-edit-movies.component.html',
  styleUrls: ['./add-edit-movies.component.css']
})
export class AddEditMoviesComponent implements OnInit {

  movieId:any = null;
  movieData:any = {
    "title" : null,
    "director" : null,
    "releaseYear" : null
  };
  constructor(private movieService:MoviesService,private _route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this._route.params.subscribe((param: any) => {
      this.movieId = param.id;
    });

    if(this.movieId){
      this.getMovieById();
    }
  }

  getMovieById(){
    this.movieService.getMovieById(this.movieId).subscribe((res:any) => {
      if(res.data){
        this.movieData = res.data;
      }
    })
  }

  submitData(){
    this.movieService.createMovies(this.movieData).subscribe((res:any) => {
      if(res.data){
        alert("Movie Created");
        this.router.navigate([""])
      }
    })
  }

  updateData(){
    this.movieService.editMovieData(this.movieId,this.movieData).subscribe((res:any) => {
      if(res.data){
        alert("Movie Updated");
        this.router.navigate([""])
      }
    })
  }

  back(){
    this.router.navigate([""]);
  }

}
