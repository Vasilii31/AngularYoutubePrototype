import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articles: Array<Article> = [
      {id: 1,label: "jouet", description: 'jouet ancien', prix: 15, dateCreation: new Date(), stock: 10},
      {id: 2,label: "Robe d'été", description: 'peu portée, rose à pois vert', prix: 19, dateCreation: new Date(), stock: 10},
      {id: 3,label: "Ordinateur", description: 'Lenovo, 12 Go de Ram', prix: 699, dateCreation: new Date(), stock: 10}

    ];

  getArticles(): Array<Article> {
      return this.articles;
    }
}
