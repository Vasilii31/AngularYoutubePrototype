import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.scss'
})
export class HeaderComponentComponent {
  //@Input() isAdmin = false;
  isAdmin = input<boolean>(false);
}
