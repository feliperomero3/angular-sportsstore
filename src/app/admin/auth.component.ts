import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: ['']
})
export class AuthComponent implements OnInit {
  username: string;
  password: string;
  errorMessage: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  authenticate(form: NgForm): void {
    if (form.valid) {
      // perform authentication
      this.router.navigateByUrl('/admin/main');
    } else {
      this.errorMessage = 'Form Data Invalid';
    }
  }

}
