import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { NgForm } from '@angular/forms';
import { EventInterface } from '../../../models/event';
import  { AuthService } from '../../../services/auth.service';
import  {UserInterface } from '../../../models/user';
import { from } from 'rxjs';
@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private events: EventInterface[];
  private isAdmin: any = null;
  private userUid: string = null;

  ngOnInit() {
    this.getListEvents();
  }
getListEvents(){
  this.dataApi.getAllEvents().
  subscribe(events => {
    this.events = events; 

  });

}
  onDeleteEvent(idEvent: string): void{
  const conformation = confirm ('Are you sure ?');
  if (conformation){

    this.dataApi.deleteEvent(idEvent);
}
}

}