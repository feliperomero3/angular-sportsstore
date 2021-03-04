import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthComponent, AdminComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
