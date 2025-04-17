import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || 'null'));
  public currentUser$: Observable<any> = this.currentUserSubject.asObservable();

  public usersJSON = localStorage.getItem('registeredUsers');
  public users = this.usersJSON ? JSON.parse(this.usersJSON) : [];

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  getRegisteredUsers(): any[] {
    const usersJSON = localStorage.getItem('registeredUsers');
    const users = usersJSON ? JSON.parse(usersJSON) : [];
    return Array.isArray(users) ? users : [];
  }

  login(username: string, password: string) {
    // // Ici, vous devriez normalement faire un appel API pour vérifier les identifiants
    // // TODO : Faire la validation
    // const user = { username, token: 'fake-jwt-token' };
    // sessionStorage.setItem('currentUser', JSON.stringify(user));
    // // Met à jour le currentUserSubject avec l'utilisateur connecté (BehaviorSubject)
    // this.currentUserSubject.next(user);
    // return user;

    const users = this.getRegisteredUsers();

    // Recherche d'un utilisateur correspondant
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
    } else {
      throw new Error('Utilisateur ou mot de passe incorrect');
    }
  }

  logout() {
    sessionStorage.removeItem('currentUser');
    // Met à jour le currentUserSubject avec null (BehaviorSubject)
    this.currentUserSubject.next(null);
  }

  register(user: any) {
    // Ici, vous devriez normalement faire un appel API pour enregistrer l'utilisateur
    // TODO : Faire la validation et l'enregistrement avec un appel API
    // this.users.push(user);
    // localStorage.setItem('registeredUsers', JSON.stringify(this.users));
    // return true;

    const users = this.getRegisteredUsers();

    users.push(user);
    localStorage.setItem('registeredUsers', JSON.stringify(users));
    return true;
  }
  
}
