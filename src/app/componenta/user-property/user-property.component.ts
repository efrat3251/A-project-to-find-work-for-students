import { Component } from '@angular/core';

@Component({
  selector: 'app-user-property',
  templateUrl: './user-property.component.html',
  styleUrls: ['./user-property.component.scss']
})
export class UserPropertyComponent {
  text = 'login';
  isShow: boolean = false;
  myType = 'number';
  // src = '../../assets/img.jpg';
  bornDate = new Date(2000, 1, 1);
  age: number | undefined;
  myName:string="";
  changeName(){
this.myName="new name";
  }

  calcAge(year: number) {
    this.age = new Date().getFullYear() - year;
    return this.age;
    // this.age=new Date().getFullYear()-this.bornDate.getFullYear();
    // return this.age;
    // return "age";
  }

  getText(event: any) {
    console.log(event.target.value);
  }

  getTextByRefernce(text:string){
    console.log(text);
  }
}

