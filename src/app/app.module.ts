import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


import { StudentPage } from '../pages/Student/Student';
import { TestTabPage } from '../pages/testtab/testtab';
import { ProfessorPage } from '../pages/Professor/Professor';
import {ReportPage} from '../pages/report/report';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import {ResetPage} from '../pages/reset/reset';
import {ProfileEditPage} from '../pages/profile-edit/profile-edit';
import {AttendancePage} from '../pages/attendance/attendance';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

export const config = {
   apiKey: "AIzaSyCwsZwBg8oiNGKvXP3TNGHsRpOyc2CmAVM",
   authDomain: "lapp-a4af3.firebaseapp.com",
   databaseURL: "https://lapp-a4af3.firebaseio.com",
   projectId: "lapp-a4af3",
   storageBucket: "lapp-a4af3.appspot.com",
   messagingSenderId: "545793665296"
 };



@NgModule({
  declarations: [
    MyApp,
    StudentPage,
    TestTabPage,
    ProfessorPage,
    ProfilePage,
    ReportPage,
    ResetPage,
    ProfileEditPage,
    AttendancePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    StudentPage,
    TestTabPage,
    ProfilePage,
    ReportPage,
    ResetPage,
    ProfileEditPage,
    AttendancePage,
    ProfessorPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
