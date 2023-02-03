import { Component, OnInit } from '@angular/core';


import { MovieService } from '../services/movie.service';



@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
  providers: [MovieService]

})
export class ListeComponent implements OnInit {
 
  // constructor(private router: Router ) {}
  ngOnInit(): void {
    
    }

   
   
  }
  


