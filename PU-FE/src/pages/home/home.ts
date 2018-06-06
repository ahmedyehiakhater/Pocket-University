import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  user;
  userId = 136471;
  constructor(public navCtrl: NavController, private userService: UserServiceProvider) {
  }
  ngOnInit() {
    this.getUser();
  }
  getUser(): void {
    this.userService.getUser(this.userId).subscribe(
      data => {
        // console.log(data);
        this.user = data;
        // this.user = this.user[0];
        // console.log("First console log" + this.user);
      },
      err => console.log("Error log"+err)
    );
    // console.log("Second console log" + this.user);
  }

}
