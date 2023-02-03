import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { AlertifyService } from '../services/alertify.service';
import { MovieService } from '../services/movie.service';

declare let alertify:any;

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers: [MovieService]
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie;
  loading: boolean = false;

  constructor(private alertify: AlertifyService, 
              private movieService: MovieService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.loading = true;
      this.movieService.getMoviesId(params["movieId"]).subscribe(data => {
        this.movie = data;
        this.loading = false;
      });
    })
  }

  addList() {
    alertify.error( 'Listeye ekle butonu kullanılamamaktadır');
  }
 

}
