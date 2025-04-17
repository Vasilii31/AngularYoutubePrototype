import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from "./composants/header-component/header-component.component";

import { ArticleListComponentComponent } from "./composants/article-list-component/article-list-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isAdmin: boolean = true;
  title = 'tp';

  
}
