import { Component, OnInit } from '@angular/core';
import { EventInterface } from '../../models/event';
import  { NgForm } from '@angular/forms';
import { DataApiService } from '../../services/data-api.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  
  ngOnInit() {
  
  }
  onSaveEvent(eventForm : NgForm): void {

     console.log('eventForm.value.id',eventForm.value.id);
     if (eventForm.value.id == null){
      
       this.dataApi.addEvent(eventForm.value);
     }
     else{
       //update 
      this.dataApi.updateEvent(eventForm.value);
     }
     eventForm.resetForm();
     }

}

