import { NgModule } from '@angular/core';
import { UsersUserLoginComponent } from './users-user-login/users-user-login';
import { UsersUserProfileComponent } from './users-user-profile/users-user-profile';
@NgModule({
	declarations: [UsersUserLoginComponent,
    UsersUserProfileComponent],
	imports: [],
	exports: [UsersUserLoginComponent,
    UsersUserProfileComponent]
})
export class ComponentsModule {}
