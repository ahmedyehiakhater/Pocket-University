import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  userID: number;
  userPassword: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserServiceProvider) {
  }
  signIn(): void {
    this.userService.userLogin(this.userID, this.userPassword).subscribe(
      result => {
        console.log("This is the login result " + result);
      },
      err => console.log("Error login" + err)
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
