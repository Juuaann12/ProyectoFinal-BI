import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-login.html',
  styleUrls: ['./admin-login.css']
})
export class AdminLogin {

  email = '';
  password = '';
  error = '';

  // credenciales
  private readonly validEmail = 'admin@gmail.com';
  private readonly validPassword = '1234';

  constructor(private router: Router) {}

  submit() {
    this.error = '';

    if (!this.email || !this.password) {
      this.error = 'Por favor ingresa email y contraseña.';
      return;
    }

    // Validación 
    if (this.email === this.validEmail && this.password === this.validPassword) {
      this.router.navigate(['/admin/dashboard']);
      return;
    }

    this.error = 'Credenciales incorrectas. Intente de nuevo.';
  }
}