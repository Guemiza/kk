import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { EventInterface } from '../models/event';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) { 
  this.eventsCollection = afs.collection<EventInterface>('Event');
  this.events = this.eventsCollection.valueChanges();
  }
 
  private eventsCollection: AngularFirestoreCollection<EventInterface>;
  private events: Observable<EventInterface[]>;
  private eventdoc: AngularFirestoreDocument<EventInterface>;
  private event: Observable<EventInterface>;
 
  getAllEvents(){
    return this.events = this.eventsCollection.snapshotChanges()
    .pipe(map( changes =>{
      return changes.map(action => {
        const data = action.payload.doc.data() as EventInterface ;
        data.id = action.payload.doc.id;
        return data;
      });

    }));
  }
  getOneEvent(idEvent: string) {
    this.eventdoc = this.afs.doc<EventInterface>('events/${idEvent}');
    return this.event = this.eventdoc.snapshotChanges().pipe((map(action => {
    if (action.payload.exists == false){
      return null;
    }else{
      const data = action.payload.data() as EventInterface;
      data.id = action.payload.id;
      return data;
    }

    })));

  }
  addEvent(event : EventInterface):void{
   this.eventsCollection.add(event); 
  }
  updateEvent(event : EventInterface): void{
    let idEvent = event.id;
    this.eventdoc = this.afs.doc<EventInterface>('event/${idEvent}');
    this.eventdoc.update(event);
  }
  deleteEvent(idEvent: string): void{
    this.eventdoc = this.afs.doc<EventInterface>('event/${idEvent}');
    this.eventdoc.delete();
  }
}

