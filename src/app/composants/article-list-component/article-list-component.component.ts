import { Component } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-list-component',
  imports: [],
  templateUrl: './article-list-component.component.html',
  styleUrl: './article-list-component.component.scss'
})
export class ArticleListComponentComponent {
  articles!: Array<Article>

  constructor(private readonly articleService: ArticleService){

  }

  ngOnInit()
  {
    this.articles = this.articleService.getArticles();
  }
}
