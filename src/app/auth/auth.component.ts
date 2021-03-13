import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  username: string;
  password: string;
  errorMessage: string;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  authenticate(form: NgForm): void {
    if (form.valid) {
      // perform authentication
      this.auth.authenticate(this.username, this.password).subscribe({
        next: (res) => {
          if (res) {
            this.router.navigateByUrl('/admin/main');
          } else {
            this.errorMessage = 'Authentication failed.';
          }
        },
        error: (err) => console.error('An error ocurred during authentication: ' + err)
      });
    } else {
      this.errorMessage = 'Form Data Invalid.';
    }
  }
}
