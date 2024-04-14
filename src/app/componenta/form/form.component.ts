import { Component,Input,Output, EventEmitter } from '@angular/core';
import { Business } from 'moudels/Business';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class formComponent {
@Input()
  business!: Business;

  @Output() custAdded = new EventEmitter<Business>();
  onSubmit() {
    this.custAdded.emit(this.business);
    this.business = {BusinessName:"" ,BusinessCity: "",BusinessId:"",SeniorityBusiness:0};
  }
}







  

  


