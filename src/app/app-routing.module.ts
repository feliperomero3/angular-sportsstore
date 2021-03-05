import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartDetailComponent } from './cart/cart-detail.component';
import { StoreGuard } from './store/store.guard';
import { CheckoutComponent } from './store/checkout.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { path: 'store', component: StoreComponent, canActivate: [StoreGuard] },
  { path: 'cart', component: CartDetailComponent, canActivate: [StoreGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [StoreGuard] },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [StoreGuard] },
  { path: '**', redirectTo: '/store' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
