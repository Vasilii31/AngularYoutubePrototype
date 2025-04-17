import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponentComponent } from '../header-component/header-component.component';

@Component({
  selector: 'app-hello-world',
  imports: [FormsModule],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.scss'
})
export class HelloWorldComponent {
  isAdmin: boolean = true;
  title: string = "Hello world !";


  path: string = "https://angular.io/assets/images/logos/angular/angular.svg";

  pageType: string = "home";

  imageVisible: boolean = false;
  clickCount: number = 0;

  changeLogo(): void{
    this.path = "https://logowik.com/content/uploads/images/angular-a-letter-new-20243216.logowik.com.webp";
  }

  changeVisibility(): void{
    this.clickCount++;
    this.imageVisible = !this.imageVisible;
  }
}
