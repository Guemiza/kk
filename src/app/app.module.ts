import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEventsComponent } from './components/admin/list-events/list-events.component';
import { DetailsBookComponent } from './components/details-book/details-book.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OffersComponent } from './components/offers/offers.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';

import { FormsModule} from '@angular/forms';
import  {environment} from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { Observable} from 'rxjs/internal/Observable';
import { AngularFirestore } from '@angular/fire/firestore';
import { SearshEventComponent } from './components/admin/searsh-event/searsh-event.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEventsComponent,
    DetailsBookComponent,
  
    HomeComponent,
    ModalComponent,
    NavbarComponent,
    OffersComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,

    ModalComponent,
    SearshEventComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [AngularFireAuth,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
