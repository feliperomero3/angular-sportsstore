import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from '../auth/auth.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { ProductTableComponent } from '../admin/product-table.component';
import { ProductEditorComponent } from '../admin/product-editor.component';
import { OrderTableComponent } from '../admin/order-table.component';

@NgModule({
  declarations: [
    AuthComponent,
    AdminComponent,
    ProductTableComponent,
    ProductEditorComponent,
    OrderTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
