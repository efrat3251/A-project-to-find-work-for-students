import { Component } from '@angular/core';
import { User1 } from 'moudels/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'project';
  constructor(private userService:UserService) {

  }
  public users: User1[] = [];
  public user: User1 = new User1();
  public getAllUsers() {
    this.userService.getUsers().subscribe(
      (res) => {
        this.users = res
        console.log(res)
      },
      (err) => { 
        console.log(err)
      }
    )
  }
  public getUser() {
    this.userService.getUsereById('1').subscribe(
      (res) => {
        this.user = res
        console.log(res)
      },
      (err) => { 
        console.log(err)
      }
    )
  }
}
