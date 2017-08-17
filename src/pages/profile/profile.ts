import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase,FirebaseObjectObservable} from 'angularfire2/database';
import {ProfileDetails} from '../../models/profileDetails';
import {AttendancePage} from '../attendance/attendance';
import {ReportPage} from '../report/report';
import { AlertController } from 'ionic-angular';
import {BarcodeScanner,BarcodeScannerOptions} from '@ionic-native/barcode-scanner';



import {ProfessorPage} from '../Professor/Professor';
import * as moment from 'moment';
/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profiledetails:FirebaseObjectObservable<ProfileDetails>;
  tabBarElement: any;

  periods(): string[] {
    return [
      "1","2","3","4","5","6","7","8"
    ];
  }
  period: string = "1";

  constructor(public navCtrl: NavController, public navParams: NavParams,private bar:BarcodeScanner,private afauth:AngularFireAuth,private alertCtrl: AlertController, private afData:AngularFireDatabase) {

    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.initializeYear();
    this.initializeDepartment();
    this.initializeSemester();
    this.today = new Date().toISOString();
    this.year = this.today.substr(0, 4);
    this.month = this.today.substr(5, 2);
    this.date = this.today.substr(8, 2)
  }

  test(){
    this.sYear = '4';
    this.sSemester = "Odd";
    this.setDepartmentValues("4","Odd","CSE");
    this.sDepartment = "CSE";
    //this.setSubjectValues("4","Odd","CSE");
    this.sSubject = "RMT";
  }
  
  async scancode()
  {
    const scanRes = await this.bar.scan();
    console.log(scanRes);
    let splitArray = scanRes.text.split("-");

    this.sYear = splitArray[0];
    this.sSemester = splitArray[1];
    this.setDepartmentValues(splitArray[0],splitArray[1],splitArray[2]);
    this.sDepartment = splitArray[2];
    this.sSubject = splitArray[3];
    
  }

  years: any[];
  departments: any[];
  subjects: FirebaseObjectObservable<any>;
  semesters: any[];
  data:any[];
  today:any;
  year:any;
  month:any;
  date:any;

  selectedDepartments: any[];
  selectedSubjects: Array<any> = [];
  finalizedSubject: any;
  selectedPeriods:any[];
  selectedSemester: any[];
  public Key:Array<any> = [];

  sYear: any;
  sDepartment: any;
  sSubject: any;
  sSemester: any;
  sPeriod:any;

  dateChange(today){
    this.year = today.substr(0, 4);
    this.month = today.substr(5, 2);
    this.date = today.substr(8, 2)
    console.log(this.date + ' '+ this.month+' '+this.year);
  }

  initializeYear(){
    /*
    this.years = [
      {id: 1, name: '1'},
      {id: 2, name: '2'},
      {id: 3, name: '3'},
      {id: 4, name: '4'}
    ];*/
    this.years = ["1","2","3","4"];
  }

  initializeSemester(){
   /* this.semesters = [
      {id: 1, name: 'Odd'},
      {id: 2, name: 'Even'}
    ];*/
    this.semesters = ["Odd","Even"];
    
  }

  initializeDepartment(){
    /*
    this.departments = [
      {id: 1, name: 'CSE'},
      {id: 2, name: 'EEE'},
      {id: 3, name: 'ECE'},
      {id: 4, name: 'MECH'},
      {id: 5, name: 'IT'}
    ];*/
    this.departments = ["CSE","EEE","ECE","MECH","IT"];
  }

  setPeriod(sPeriod) {
      this.selectedPeriods = this.sPeriod;
  }

  setDepartmentValues(sYear,sSemester,sDepartment) {
    if(sSemester!=undefined && sDepartment!=undefined){
      this.setSubjectValues(sYear,sSemester,sDepartment);
    }
    this.selectedDepartments = this.departments;
  }

  setSubjectValues(sYear,sSemester,sDepartment) {
      this.selectedSubjects = [];
      this.selectedSemester = sSemester;
    if(sSemester!=undefined && sDepartment!=undefined && sYear!=undefined){
      this.subjects = this.afData.object('Subject/Subject/Year'+sYear+'/'+sSemester+'/'+sDepartment+'/');
      this.subjects.subscribe(data =>
      {

            let keys = Object.keys(data);
            this.data=keys;
            for (let i of keys)
            {
                this.Key.push(i);
                this.subjects = this.afData.object('Subject/Subject/Year'+sYear+'/'+sSemester+'/'+sDepartment+'/'+i);
                this.subjects.subscribe(data1 =>
                {

                      this.selectedSubjects.push(data1.$value);
                      console.log(this.selectedSubjects);
                });
            }
      });
    }
  }

  finalizeSubjectValue(sSubject){
    this.finalizedSubject = sSubject;
  }
  ionViewWillEnter() {

    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');

    var time = moment();

    var format = 'hh:mm:ss'

    var period1 = moment('0:00:00', format);
    var period2 = moment('9:00:00', format);
    var period3 = moment('10:10:00', format);
    var period4 = moment('11:00:00', format);
    var period5 = moment('11:50:00', format);
    var period6 = moment('13:20:00', format);
    var period7 = moment('14:20:00', format);
    var period8 = moment('15:10:00', format);
    var period9 = moment('23:59:59', format);

    if (time.isBetween(period1, period2)) {
      this.sPeriod = '1';
    }
    if (time.isBetween(period2, period3)) {
      this.sPeriod = '2';
    }
    if (time.isBetween(period3, period4)) {
      this.sPeriod = '3';
    }
    if (time.isBetween(period4, period5)) {
      this.sPeriod = '4';
    }
    if (time.isBetween(period5, period6)) {
      this.sPeriod = '5';
    }
    if (time.isBetween(period6, period7)) {
      this.sPeriod = '6';
    }
    if (time.isBetween(period7, period8)) {
      this.sPeriod = '7';
    }
    if (time.isBetween(period8, period9)) {
      this.sPeriod = '8';
    }

    this.afauth.authState.subscribe(data =>
    {
        if(data && data.email && data.uid)
        {
            console.log(data.email);

			this.profiledetails = this.afData.object('Professor/'+data.uid);

          }
          else
          {

          }
    } );
  }

  isEmpty(obj) {
  for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
          return false;
  }
  return true;
};

  logout()
  {
      console.log("logout button fired");
      this.afauth.auth.signOut();
      this.navCtrl.pop();
  }

  markAttendance(sYear, sDepartment, sSubject)
  {
    if("undefined" === typeof sYear || "undefined" === typeof sDepartment || "undefined" === typeof sSubject){
      let alert = this.alertCtrl.create
      ({
          title: 'Insufficient Details',
          subTitle: 'Please enter all the details',
          buttons: ['OK']
      });
      alert.present();
    }
    else{
      console.log("attendance firered"+sYear+sDepartment+this.sPeriod);
      this.navCtrl.push(AttendancePage,{
        param1: sYear,
        param2: sDepartment,
        param3:this.sPeriod,
        param4:this.selectedSemester,
        param5:this.finalizedSubject,
        param6:this.date,
        param7:this.month,
        param8:this.year
      });
    }
  }

  checkAttendance(sYear,sDepartment,sSemester,sSubject){

    if("undefined" === typeof sYear || "undefined" === typeof sDepartment || "undefined" === typeof sSubject){
      let alert = this.alertCtrl.create
      ({
          title: 'Insufficient Details',
          subTitle: 'Please enter all the details',
          buttons: ['OK']
      });
      alert.present();
    }
    else{

      this.navCtrl.push(ReportPage,{
        param1: sYear,
        param2: sDepartment,
        param3:this.sPeriod,
        param4:this.selectedSemester,
        param5:this.finalizedSubject,
        param6:this.date,
        param7:this.month,
        param8:this.year

      });
    }

  }


}
