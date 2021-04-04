import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { NgForm } from '@angular/forms';
import { EventInterface } from 'src/app/models/event';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute ) { }
  public events: EventInterface[];

  ngOnInit() {
    const idEvent = this.route.snapshot.params['id'];
    this.getDetails(idEvent);

  }
  getDetails(idEvent: string): void{
    this.dataApi.getOneEvent(idEvent).subscribe(events=> {
    // this.events = events;
    });
  }
}