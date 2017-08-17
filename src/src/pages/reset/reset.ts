import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import  {Emailreset} from "../../models/emailreset";
import {AngularFireAuth} from "angularfire2/auth";
import firebase from 'firebase/app';

import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ResetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html',
})
export class ResetPage {

  er={} as Emailreset;

  constructor(public navCtrl: NavController, public navParams: NavParams,private afauth:AngularFireAuth,private alertCtrl: AlertController)
  {
  }

  ionViewDidLoad() {
    console.log("resetpage fired");
  }

  async resetPassword(email: string): firebase.Promise<any>
  {
      console.log(email);
      try
      {
        const res=await this.afauth.auth.sendPasswordResetEmail(email);

            return this.navCtrl.pop();
        
      }
      catch (e)
      {
          console.log(e.message);
          let alert = this.alertCtrl.create
          ({
              title: e.message,
              subTitle: 'Please check your Information',
              buttons: ['OK']
          });
          alert.present();
      }

  }


}
