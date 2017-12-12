import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { NavController, NavParams, ActionSheetController, LoadingController, Loading, AlertController, Platform } from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthProvider, AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class Login {
  //email: any;
  //password: any;
  public loading: Loading;
  private browser;

  usuarioSelecionado = {email: '', password: ''};                 

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController,
    public navParams: NavParams, public platform: Platform, public actionsheetCtrl: ActionSheetController,
    public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
    
  }

  login() {
    if (this.usuarioSelecionado.email == '' || this.usuarioSelecionado.password == '') {
      let alert = this.alertCtrl.create({
        title: 'ADVERTENCIA!',
        subTitle: 'Debe completar todos los campos!',
        buttons: ['OK']
      });
      alert.present();
    }
    else {
      firebase.auth().signInWithEmailAndPassword(this.usuarioSelecionado.email, this.usuarioSelecionado.password).then(ok => {
        let loader = this.loadingCtrl.create({
          content: "Espere...",
          duration: 2600
        });
        this.navCtrl.push(TabsPage);
      },
        error => {
          let alert = this.alertCtrl.create({
            title: 'ERROR!',
            subTitle: 'Usuario y/o contraseña incorrectas!',
            buttons: ['OK']
          });
          alert.present();
        }
      );
    }

  }


  ingresarConFnodar(){
    this.usuarioSelecionado.email = "fnodar@fnodar.com";
    this.usuarioSelecionado.password = "fnodar";
  }
  
}
