import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: ''
  };

  constructor() { }

  onSubmit(): void {
    console.log('User registered:', this.user);
    // Ajoutez ici la logique pour enregistrer l'utilisateur
  }
}
