import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';
import { MovieService } from '../services/movie.service';
import ImageValidator from '../validators/image.validator';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
  providers: [CategoryService, MovieService]
})
export class MovieCreateComponent implements OnInit {

  categories: Category[];
  model: any = {
    categoryId: ''
  };

  constructor(private categoryService: CategoryService,
              private movieService: MovieService,
              private router: Router,
              private alertify: AlertifyService ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }
 
  movieForm = new FormGroup({ title : new FormControl("", [Validators.required]),
    description : new FormControl("", [Validators.required]),
    imageUrl  : new FormControl("", [Validators.required, ImageValidator.isValidExtention]),
    categoryId : new FormControl("", [Validators.required]),
    director : new FormControl("", [Validators.required]),
    actors : new FormControl("", [Validators.required]),
    releaseDate : new FormControl("", [Validators.required]),
    categoryName : new FormControl("", [Validators.required]),
    imdb : new FormControl("", [Validators.required]),
    trailer: new FormControl("", [Validators.required])
    

  })

  get title(){
    return this.movieForm.get("title");
  }

  get description(){
    return this.movieForm.get("description");
  }

  get director(){
    return this.movieForm.get("director");
  }

  get actors(){
    return this.movieForm.get("actors");
  }

  get releaseDate(){
    return this.movieForm.get("releaseDate");
  }

  get categoryName(){
    return this.movieForm.get("categoryName");
  }

  get imdb(){
    return this.movieForm.get("imdb");
  }

  
  get imageUrl() {
    return this.movieForm.get("imageUrl");
  }

  get trailer() {
    return this.movieForm.get("trailer");
  }

  get categoryId() {
    return this.movieForm.get("categoryId");
  }

  
  clearForm() {
    this.movieForm.patchValue({
      title: '',
      description: '',
      imageUrl: '',
      categoryId: '',
      director: '',
      actors: '',
      releaseDate:'',
      categoryName:'',
      imdb:'',
      trailer:''
     
    })
  }

  createMovie() {

    const movie = {
       id: 0,
       title: this.movieForm.value.title,
       description: this.movieForm.value.description,
       imageUrl: this.movieForm.value.imageUrl,
       isPopular: false,
       categoryId:this.movieForm.value.categoryId,
       director:this.movieForm.value.director,
       actors:this.movieForm.value.actors,
       releaseDate:this.movieForm.value.releaseDate,
       categoryName:this.movieForm.value.categoryName,
       imdb:this.movieForm.value.imdb,
       trailer:this.movieForm.value.trailer
     };

    this.movieService.createMovie(movie).subscribe(data => 
      this.router.navigate(['/movies', data.id])
    );

      console.log(movie);

  }

  log(value: any) {
    console.log(value);
  }

}
