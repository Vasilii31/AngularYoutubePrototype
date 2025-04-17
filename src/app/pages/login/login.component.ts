import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthentificationService } from '../../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private readonly _authService: AuthentificationService,
    private readonly _router: Router
  ) {
  }

  errorMessage: string | null = null;


  onSubmit() {
    this.errorMessage = null;

    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      try {
        this._authService.login(username, password);
        //console.log('submit valid');
        
        this._router.navigate(['/home']);
      }
      catch(error: any)
      {
        this.errorMessage = "Identifiants incorrects";
      }
    }
  }
}
