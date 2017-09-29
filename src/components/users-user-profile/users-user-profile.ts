import { Component } from '@angular/core';

/**
 * Generated class for the UsersUserProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'users-user-profile',
  templateUrl: 'users-user-profile.html'
})
export class UsersUserProfileComponent {

  text: string;

  constructor() {
    console.log('Hello UsersUserProfileComponent Component');
    this.text = 'Hello World';
  }

}
