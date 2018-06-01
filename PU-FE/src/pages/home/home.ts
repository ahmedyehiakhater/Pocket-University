import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public user: {
    userFullName: string;
    userID: number;
    userEmail: any;
    achievedCredits: number;
    registeredCredits: number;
    cummulativeGpa: number;
    semesterGpa: number;
    ukGpa: number;
  };
  constructor(public navCtrl: NavController) {
    this.user = {
    userFullName : "Ahmed Yehia Khater",
    userID : 136471,
    userEmail : "ahmedyehiakhater@gmail.com",
    achievedCredits : 136,
    registeredCredits : 18,
    cummulativeGpa : 2.9,
    semesterGpa : 2.5,
    ukGpa : 2.7
    };
    console.log(this.user);
  }

}
