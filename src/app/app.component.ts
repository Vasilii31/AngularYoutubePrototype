import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from "./composants/hello-world/hello-world.component";
import { HeaderComponentComponent } from "./composants/header-component/header-component.component";
import { FormTaskComponent } from './composants/form-task/form-task.component';
import { Task } from './models/Task';
import { UserComponent } from "./composants/user/user.component";
import { ArticleListComponentComponent } from "./composants/article-list-component/article-list-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloWorldComponent, HeaderComponentComponent, FormTaskComponent, UserComponent, ArticleListComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isAdmin: boolean = true;
  title = 'tp';

  
}
