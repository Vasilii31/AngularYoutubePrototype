import { Component, Input, input, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-component',
  imports: [RouterLink],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.scss'
})
export class HeaderComponentComponent implements OnInit {
  isLoggedIn = false;

  constructor(private readonly _authService: AuthentificationService, private readonly _router: Router){}

  ngOnInit(){
    this._authService.currentUser$.subscribe(user => {
      // Vérification si l'utilisateur est connecté
      // !!user : Convertit user en boolean
      this.isLoggedIn = !!user;
    });
  }

  logout() {
    this._authService.logout();
    this._router.navigate(['/login']);
  }
}
