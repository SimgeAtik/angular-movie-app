import { Category } from "./category";

export class CategoryRepository {
    private categories: Category[];


    constructor() {
        this.categories = [
            {id: 1, name: "Aksiyon"},
            {id: 2, name: "Animasyon"},
            {id: 3, name: "bilim kurgu"},
            {id: 4, name: "Dram"},
            {id: 5, name: "Fantastik"},
            {id: 6, name: "korku"},
            {id: 7, name: "savaş"},
            {id: 8, name: "Macera"},
          ]
    }

    getCategories(): Category[] {
        return this.categories;
    }
}