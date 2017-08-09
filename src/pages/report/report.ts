import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as firebase from 'firebase';

import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase,FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';


/**
 * Generated class for the ReportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {

  year:any;
  dept:any;
  periods:any;
  semester:any;
  subject:any;
  sDate:any;
  sMonth:any;
  sYear:any;

  absentArray: Array<any> = [];

  attendanceDetails: FirebaseListObservable<any>;
  tabBarElement: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afauth:AngularFireAuth,private afData:AngularFireDatabase) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');

    this.year = this.navParams.get('param1');
    this.dept = this.navParams.get('param2');
    this.periods = this.navParams.get("param3");
    this.semester = this.navParams.get("param4");
    this.subject = this.navParams.get("param5")
    this.sDate = this.navParams.get("param6");
    this.sMonth = this.navParams.get("param7");
    this.sYear = this.navParams.get("param8");

    this.attendanceDetails = afData.list('Attendance/Attendance/'+this.dept+'/'+this.year+' Year/');
    
    this.attendanceDetails.subscribe(data =>
    {
      data.forEach(snapshot =>{
        if(snapshot.dept = this.dept && snapshot.year == this.year && snapshot.periodNo == this.periods && snapshot.semester ==this.semester &&
           snapshot.subjects == this.subject  && snapshot.currentDate == this.sDate && snapshot.currentMonth == this.sMonth && snapshot.currentYear == this.sYear){
          for(let i of snapshot.absentees){
            this.absentArray.push(i);
          }   

        }
      });
    });
    console.log("The absentees are "+this.absentArray);
  }

  ionViewWillEnter() {

    this.tabBarElement.style.display = 'none';
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ReportPage');
  }

}
