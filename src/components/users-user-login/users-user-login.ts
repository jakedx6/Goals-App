import { Component } from '@angular/core';

/**
 * Generated class for the UsersUserLoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'users-user-login',
  templateUrl: 'users-user-login.html'
})
export class UsersUserLoginComponent {

  text: string;

  constructor() {
    console.log('Hello UsersUserLoginComponent Component');
    this.text = 'Hello World';
  }

}
