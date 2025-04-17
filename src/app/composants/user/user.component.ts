import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  users!: Array<User>

  constructor(private readonly userService: UserService){

  }

  ngOnInit(){
    this.users = this.userService.getUsers();

  }
}
