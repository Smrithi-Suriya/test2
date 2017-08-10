import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import  {User} from "../../models/user";
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase,FirebaseObjectObservable} from 'angularfire2/database';
import {ProfileDetails} from '../../models/profileDetails';

import { AlertController } from 'ionic-angular';


import {ProfilePage} from '../profile/profile';
import {ResetPage} from '../reset/reset';
import {ProfileEditPage} from '../profile-edit/profile-edit';



@Component({
  selector: 'page-professor',
  templateUrl: 'Professor.html',


})
export class ProfessorPage {

  proDetails:FirebaseObjectObservable<ProfileDetails>;

  user={} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams,private afauth:AngularFireAuth ,
    private alertCtrl: AlertController,private afData:AngularFireDatabase)
  {
      console.log(this.user.email);

  }

  ionViewDidLoad()
   {
    console.log('ionViewDidLoad LoginPage');

  }

  async login(user:User)
  {
    console.log("login fired:"+user.email,user.password);


    try
    {
        const res= await this.afauth.auth.signInWithEmailAndPassword(user.email,user.password);
        console.log(res);

        this.proDetails=this.afData.object('Professor/'+res.uid);
        this.proDetails.subscribe(data=>
          {
                console.log(data.fname);
                if(data.fname!=undefined)
                {
                    this.navCtrl.push(ProfilePage);
                }
                else
                {
                    this.navCtrl.push(ProfileEditPage);
                }
          });

      /*  if(res)
        {

              this.navCtrl.setRoot(ProfilePage);

        }
        else
        {
            console.log("ud not found");
        }*/


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

  reset()
  {
      console.log("Reset page fired");
      this.navCtrl.push(ResetPage);
  }



  }
