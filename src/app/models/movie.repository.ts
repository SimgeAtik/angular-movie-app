// import { Movie } from "./movie";

// export class MovieRepository {
//     private movies: Movie[];


//     constructor() {
//         this.movies =[
//             {id: 1, title: "film 1", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim ut et excepturi vitae aliquam ipsa facilis commodi, consequuntur incidunt at exercitationem veritatis. Modi eaque iure officiis suscipit perferendis iusto?", imageUrl: "images1.jpeg", isPopular: false, datePublished: new Date(1990,10,10)},
//             {id: 2, title: "film 2", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim ut et excepturi vitae aliquam ipsa facilis commodi, consequuntur incidunt at exercitationem veritatis. Modi eaque iure officiis suscipit perferendis iusto?", imageUrl: "images2.jpeg", isPopular: true, datePublished: new Date(1990,10,10)},
//             {id: 3, title: "film 3", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim ut et excepturi vitae aliquam ipsa facilis commodi, consequuntur incidunt at exercitationem veritatis. Modi eaque iure officiis suscipit perferendis iusto?", imageUrl: "images3.jpeg", isPopular: true, datePublished: new Date(1990,10,10)},
//             {id: 4, title: "film 4", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim ut et excepturi vitae aliquam ipsa facilis commodi, consequuntur incidunt at exercitationem veritatis. Modi eaque iure officiis suscipit perferendis iusto?", imageUrl: "images4.jpeg", isPopular: true, datePublished: new Date(1990,10,10)},
//             {id: 5, title: "film 5", description: "film 5 açıklama", imageUrl: "images5.jpeg", isPopular: false, datePublished: new Date(1990,10,10)},
//             {id: 6, title: "film 6", description: "film 6 açıklama", imageUrl: "images6.jpeg", isPopular: true, datePublished: new Date(1990,10,10)},
//             {id: 7, title: "film 7", description: "film 7 açıklama", imageUrl: "images7.jpeg", isPopular: true, datePublished: new Date(1990,10,10)},
//             {id: 8, title: "film 8", description: "film 8 açıklama", imageUrl: "images8.jpeg", isPopular: false, datePublished: new Date(1990,10,10)},
//             {id: 9, title: "film 9", description: "film 9 açıklama", imageUrl: "images9.jpeg", isPopular: true, datePublished: new Date(1990,10,10)},
//             {id: 10, title: "film 10", description: "film 10 açıklama", imageUrl: "images11.jpeg", isPopular: true, datePublished: new Date(1990,10,10)},
//             {id: 11, title: "film 11", description: "film 11 açıklama", imageUrl: "images12.jpeg", isPopular: true, datePublished: new Date(1990,10,10)},
//             {id: 12, title: "film 12", description: "film 12 açıklama", imageUrl: "images13.jpeg", isPopular: true, datePublished: new Date(1990,10,10)},
//             {id: 13, title: "film 13", description: "film 13 açıklama", imageUrl: "images14.jpeg", isPopular: true, datePublished: new Date(1990,10,10)},
//             {id: 14, title: "film 14", description: "film 14 açıklama", imageUrl: "images15.jpeg", isPopular: true, datePublished: new Date(1990,10,10)},
//             {id: 15, title: "film 15", description: "film 15 açıklama", imageUrl: "images16.jpeg", isPopular: true, datePublished: new Date(1990,10,10)},
//             {id: 16, title: "film 16", description: "film 15 açıklama", imageUrl: "images16.jpeg", isPopular: true, datePublished: new Date(1990,10,10)},
//             {id: 17, title: "film 17", description: "film 15 açıklama", imageUrl: "images16.jpeg", isPopular: true, datePublished: new Date(1990,10,10)},
//             {id: 18, title: "film 18", description: "film 15 açıklama", imageUrl: "images16.jpeg", isPopular: true, datePublished: new Date(1990,10,10)},
//             {id: 19, title: "film 19", description: "film 15 açıklama", imageUrl: "images16.jpeg", isPopular: true, datePublished: new Date(1990,10,10)}


//           ]
//     }


//     getMovies(): Movie[] {
//         return this.movies;
//     }

//     getPopularMovies(): Movie[] {
//         return this.movies.filter(i=>i.isPopular);
//     }

//     getFilmler(): Movie[] {
//         return this.movies;
//     }



//     getMovieById(id: number): Movie {
//         return this.movies.find(i=>i.id==id);
//     }
// }