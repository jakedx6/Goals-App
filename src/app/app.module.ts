import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { AuthMethods, AuthProvider, FirebaseUIAuthConfig, FirebaseUIModule, AuthProviderWithCustomConfig } from 'firebaseui-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

// AF2 Settings
export const firebaseConfig = {
	apiKey: "AIzaSyDnAX0CQbbsMYuOTJ66ox_F0GwzPM4XPXY",
	authDomain: "angularfire2-list-example.firebaseapp.com",
	databaseURL: "https://angularfire2-list-example.firebaseio.com",
	storageBucket: "",
	messagingSenderId: "609067141823"
};

// AF2UI Settings
const facebookCustomConfig: AuthProviderWithCustomConfig = {
  provider: AuthProvider.Facebook,
  customConfig: {
    scopes: [
      'public_profile',
      'email',
      'user_likes',
      'user_friends'
    ],
    customParameters: {
      // Forces password re-entry.
      auth_type: 'reauthenticate'
    }
  }
};
 
const firebaseUiAuthConfig: FirebaseUIAuthConfig = {
  providers: [
    AuthProvider.Google,
    facebookCustomConfig,
    AuthProvider.Twitter,
    AuthProvider.Github,
    AuthProvider.Password,
    AuthProvider.Phone
  ],
  method: AuthMethods.Popup,
  tos: '<your-tos-link>'
};

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		LoginPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule { }
