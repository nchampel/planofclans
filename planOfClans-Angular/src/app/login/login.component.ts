import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private router:Router) {
    this.username = '';
    this.password = '';
  }

  onSubmit(): void {
    console.log('Nom d\'utilisateur :', this.username);
    console.log('Mot de passe :', this.password);
    // Ajouter la logique d'authentification ici
  }
}
