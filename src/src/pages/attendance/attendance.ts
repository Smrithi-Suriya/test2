import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {ProfilePage} from '../profile/profile'
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import * as firebase from 'firebase';

import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase,FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';

import {NameDetails} from '../../models/namedetails';
import {Http ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import {SMS} from 'ionic-native';


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
  attendanceArray2: Array<any> = [];

  public presentArray: Array<any> = [];
  public absentArray: Array<any> = [];
  public index: number;
  attendanceObject: any = {};
  message:string;
  absentName:Array <any>=[];
  absentNumber:Array <any>=[];
  flag:any;
  date:string;

  form: FormGroup;
  tabBarElement: any;

  selectedStudents: string[] = [''];

  attendanceDetails: FirebaseListObservable<any>;
  namedetails:FirebaseObjectObservable<NameDetails>;

  namedetails2:any;
  constructor(public navCtrl: NavController,private alertCtrl: AlertController, public navParams: NavParams,private afauth:AngularFireAuth,private afData:AngularFireDatabase, fb: FormBuilder)
  {
    this.flag = 0;

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
checkAll(){
   for(let i in this.regNo){
       this.attendanceArray[i] = "true";
       this.markAttendance(this.data[i],this.attendanceArray[i]);
       this.absentArray = [];

   }
}






markAttendance(test,attendanceArray){
    if(attendanceArray){
      this.presentArray.push(test);
    }
    else{
      this.presentArray.splice(this.presentArray.indexOf(test),1);
    }

  //console.log("Present Array: "+this.presentArray);
  //console.log("Absent Array: "+this.absentArray);
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


  let alert = this.alertCtrl.create({
    title: 'Confirm ',
    message: 'Do you want to Confirm?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'OK',
        handler: () =>
        {
              console.log('OK clicked');
              try
              {
                      this.date=this.attendanceObject.currentDate+"."+this.attendanceObject.currentMonth+"." +this.attendanceObject.currentYear;
                      this.namedetails2=this.afData.object("Attendance/Attendance/"+this.attendanceObject.year+" Year/"+this.attendanceObject.dept+"/"+(this.attendanceObject.currentDate+this.attendanceObject.currentMonth+this.attendanceObject.currentYear+this.attendanceObject.subjects+"/")).set(this.absentArray);
                      console.log(this.date);
                  for (let i of this.absentArray)
                  {
                        console.log(i);
                        this.namedetails2=this.afData.object('Namelist/Namelist/'+this.dept+'/'+this.year+' Year/'+i);
                        this.namedetails2.subscribe(data =>
                          {
                                this.absentName.push(data.Name);
                                this.absentNumber.push(data.Phno);
                          });
                        //this.message="This is to inform you that your Ward "+ +" is found Absent today dated "+this.attendanceObject.currentDate + " duing the period "+this.attendanceObject.periodNo;
                       //SMS.send('9444978521','message');
                 }
                 for (let i=0;i<this.absentName.length;i++)
                 {

                      this.message="This is to inform you that your Ward "+this.absentName[i] +" is found Absent today dated "+this.attendanceObject.currentDate +"/"+this.attendanceObject.currentMonth +"/"+this.attendanceObject.currentYear + " duing period "+this.attendanceObject.periodNo;
                      SMS.send(this.absentNumber[i],this.message);
                      console.log(this.absentName[i],this.absentNumber[i],this.message);
                 }
              }
              catch(e)
              {
                console.log(e);
              }

        }
      }
    ]
  });
  alert.present();

}
goBack(){

  this.navCtrl.pop();
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
