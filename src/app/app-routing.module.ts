import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestroMenuComponent } from './components/restro-menu/restro-menu.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [ { path: '', component: HomeComponent },
{ path: 'restrolist', component: RestaurantListComponent },
{ path: 'menu/:restaurantName', component: RestroMenuComponent },
{ path: 'payment-form', component: PaymentFormComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
] // Default route to HomeComponent;


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
