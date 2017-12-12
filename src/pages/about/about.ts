import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../login/login';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  cerrarSesion(){
    this.navCtrl.push(Login);
  }

}
