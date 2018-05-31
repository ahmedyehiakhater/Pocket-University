import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedCourse: any;
  icons: string[];
  courses: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedCourse = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.courses = [];
    for (let i = 1; i < 5; i++) {
      this.courses.push({
        title: 'Course ' + i,
        note: 'This is course #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  courseTapped(event, course) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      course: course
    });
  }
}
