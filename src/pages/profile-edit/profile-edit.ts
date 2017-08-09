import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ProfileDetails} from '../../models/profileDetails';

import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase,FirebaseObjectObservable} from 'angularfire2/database';

import { AlertController } from 'ionic-angular';

import {ProfilePage} from '../profile/profile';

/**
 * Generated class for the ProfileEditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile-edit',
  templateUrl: 'profile-edit.html',
})

export class ProfileEditPage {

  tabBarElement: any;
  profiledetails = {} as ProfileDetails;

  constructor(public navCtrl: NavController, public navParams: NavParams,private afauth:AngularFireAuth ,private alertCtrl: AlertController,
    private afData:AngularFireDatabase)
  {
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileEditPage');
  }

  create(profiledetails:ProfileDetails)
  {
        console.log(profiledetails.lname && profiledetails.fname && profiledetails.dept);
        if(profiledetails.lname && profiledetails.fname && profiledetails.dept)
        {
              this.afauth.authState.take(1).subscribe( data =>
                {
                    this.afData.object('Professor/'+data.uid).set(profiledetails).then(()=> this.navCtrl.setRoot(ProfilePage));
                }
              );
        }
        else
        {
            let alert = this.alertCtrl.create
            ({
                title: "Update Failed",
                subTitle: 'Please Enter all the required Information',
                buttons: ['OK']
            });
            alert.present();
        }
  }



}
