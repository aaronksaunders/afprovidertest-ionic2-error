import {Component} from "@angular/core";
import {NavController, ViewController } from 'ionic-angular';

import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';


@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
  constructor(public viewCtrl: ViewController,
    public af: AngularFire) {

  }
}
