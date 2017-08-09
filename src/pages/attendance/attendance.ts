import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProfilePage} from '../profile/profile'
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import * as firebase from 'firebase';

import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase,FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';

import {NameDetails} from '../../models/namedetails';

import 'rxjs/add/operator/map';

/**
 * Generated class for the AttendancePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
})

export class AttendancePage {

  year:any;
  dept:any;
  periods:any;
  semester:any;
  subjects:any;
  sDate:any;
  sMonth:any;
  sYear:any;
  data:any[];
  data1:any[];
  public name:Array<any> = [];
  public attendance:Array<any> = [];
  public regNo:Array<any> = [];
  attendanceArray: Array<any> = [];
  public presentArray: Array<any> = [];
  public absentArray: Array<any> = [];
  public index: number;
  attendanceObject: any = {};

  form: FormGroup;
  tabBarElement: any;

  selectedStudents: string[] = [''];
  
  attendanceDetails: FirebaseListObservable<any>;
  namedetails:FirebaseObjectObservable<NameDetails>;
  
  namedetails2:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private afauth:AngularFireAuth,private afData:AngularFireDatabase, fb: FormBuilder)
  {

    
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');

    this.year = this.navParams.get('param1');
    this.dept = this.navParams.get('param2');
    this.periods = this.navParams.get("param3");
    this.semester = this.navParams.get("param4");
    this.subjects = this.navParams.get("param5");
    this.sDate = this.navParams.get("param6");
    this.sMonth = this.navParams.get("param7");
    this.sYear = this.navParams.get("param8");


    this.attendanceDetails = afData.list('Attendance/Attendance/'+this.dept+'/'+this.year+' Year/');
   
    this.namedetails = this.afData.object('Namelist/Namelist/'+this.dept+'/'+this.year+' Year/');
    this.namedetails.subscribe(data =>
    {

          let keys = Object.keys(data);
          this.data=keys;
          for (let i of keys)
          {
              this.regNo.push(i);
              this.namedetails2 = this.afData.object('Namelist/Namelist/'+this.dept+'/'+this.year+' Year/'+i);
              this.namedetails2.subscribe(data1 =>
              {

                    this.attendance.push(data1.Attendance);
                    this.name.push(data1.Name);

              });
          }
    });


  }



markAttendance(test,attendanceArray){
  if(attendanceArray){
    this.presentArray.push(test);
  }
  else{
    this.presentArray.splice(this.presentArray.indexOf(test),1);
  }
}

confirmAttendance(){
  this.absentArray = this.regNo.filter(item => this.presentArray.indexOf(item) < 0);


  this.attendanceObject.periodNo = this.periods;
  this.attendanceObject.year = this.year;
  this.attendanceObject.dept = this.dept;
  this.attendanceObject.semester = this.semester;
  this.attendanceObject.absentees = this.absentArray;
  this.attendanceObject.subjects = this.subjects;
  this.attendanceObject.currentDate = this.sDate;
  this.attendanceObject.currentMonth = this.sMonth;
  this.attendanceObject.currentYear = this.sYear;
  
  console.log(this.attendanceObject);
  
  this.attendanceDetails.push(this.attendanceObject);

}

  ionViewWillEnter() {

    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendancePage');

  }
}
