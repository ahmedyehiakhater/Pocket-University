import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }
  getUser(userId) {
    console.log('Inside getUser');
    return this.http.get('http://localhost:3000/getuser', { params: { userID: userId } });
    // return http.get('')
  }
  userLogin(userId:number, userPassword:any) {
    console.log("Inside check user");
    return this.http.post('http://localhost:3000/login', { params: { username: userId, password: userPassword } });
  }

}
