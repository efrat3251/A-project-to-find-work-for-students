import { Component } from '@angular/core';
import { User1 } from 'moudels/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
selectedUser:User1=new User1();
users:User1[]=[new User1(),new User1()];
index:number=0;
editUser(user:User1){
let tmp:User1=new User1(user.Name1);
this.selectedUser=tmp;
this.index=this.users.indexOf(user);

}
save(){
  this.users[this.index]=this.selectedUser;
  this.selectedUser=new User1();
}

}
