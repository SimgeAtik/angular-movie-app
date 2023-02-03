import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { AlertifyService } from '../services/alertify.service';
import { MovieService } from '../services/movie.service';

declare let alertify:any;

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {

  pageSize = 16;
  page = 5;
 
  title= "Filmler";
  movies: Movie[] = [];
  FilteredMovies: Movie[] = [];
 
  filterText: string = "";
  error: any;

  loading: boolean = false;


  constructor(
    private alertify: AlertifyService, 
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

      this.loading = true;

      this.movieService.getMovies(params["categoryId"]).subscribe(data => {
        this.movies = data;
        this.FilteredMovies = this.movies;
        this.loading = false;
      }, error => {
        this.error = error;
        this.loading = false;
        console.log(this.error);
      });
    });
  }

 
  onInputChange() {
    this.FilteredMovies = this.filterText?
      this.movies.filter(m=> m.title.indexOf(this.filterText) !== -1 || 
                        m.description.indexOf(this.filterText) !== -1): this.movies;
  }

  addToList($event: any, movie: Movie) {
    if($event.target.classList.contains('btn-primary')) {
      $event.target.innerText = "Listeden Çıkar";
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');

      alertify.success(movie.title + ' listene eklendi');
    }else {
      $event.target.innerText = "Listeye Ekle";
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');

      alertify.error(movie.title + ' listeden çıkarıldı');
      
    }
  }

 
}
