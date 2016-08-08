import {Component} from "@angular/core";
import {NavController, ModalController, ViewController } from 'ionic-angular';
import {LoginPage} from '../login/login'


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navController: NavController, 
  private modal:ModalController
  ) {

  }

  public openLoginModal() {
    const login = this.modal.create(LoginPage);
    login.present();
  }
}
