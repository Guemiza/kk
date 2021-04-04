import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';
import { DetailsBookComponent } from './components/details-book/details-book.component';
import{ListEventsComponent} from './components/admin/list-events/list-events.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { SearshEventComponent } from './components/admin/searsh-event/searsh-event.component';
const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'offers' , component:OffersComponent }, 
  { path: 'event/:id', component:DetailsBookComponent },
  { path: 'admin/list-events', component:ListEventsComponent }, 
  { path: 'admin/searsh-event', component:SearshEventComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register' , component:RegisterComponent },
  { path: 'user/profile' , component: ProfileComponent},  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
