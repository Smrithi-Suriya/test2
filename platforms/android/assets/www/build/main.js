webpackJsonp([0],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__attendance_attendance__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__report_report__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, bar, afauth, alertCtrl, afData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bar = bar;
        this.afauth = afauth;
        this.alertCtrl = alertCtrl;
        this.afData = afData;
        this.period = "1";
        this.selectedSubjects = [];
        this.Key = [];
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.initializeYear();
        this.initializeDepartment();
        this.initializeSemester();
        this.today = new Date().toISOString();
        this.year = this.today.substr(0, 4);
        this.month = this.today.substr(5, 2);
        this.date = this.today.substr(8, 2);
    }
    ProfilePage.prototype.periods = function () {
        return [
            "1", "2", "3", "4", "5", "6", "7", "8"
        ];
    };
    ProfilePage.prototype.test = function () {
        this.sYear = '4';
        this.sSemester = "Odd";
        this.setDepartmentValues("4", "Odd", "CSE");
        this.sDepartment = "CSE";
        //this.setSubjectValues("4","Odd","CSE");
        this.sSubject = "RMT";
    };
    ProfilePage.prototype.scancode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var scanRes, splitArray;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bar.scan()];
                    case 1:
                        scanRes = _a.sent();
                        console.log(scanRes);
                        splitArray = scanRes.text.split("-");
                        this.sYear = splitArray[0];
                        this.sSemester = splitArray[1];
                        this.setDepartmentValues(splitArray[0], splitArray[1], splitArray[2]);
                        this.sDepartment = splitArray[2];
                        this.sSubject = splitArray[3];
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.dateChange = function (today) {
        this.year = today.substr(0, 4);
        this.month = today.substr(5, 2);
        this.date = today.substr(8, 2);
        console.log(this.date + ' ' + this.month + ' ' + this.year);
    };
    ProfilePage.prototype.initializeYear = function () {
        /*
        this.years = [
          {id: 1, name: '1'},
          {id: 2, name: '2'},
          {id: 3, name: '3'},
          {id: 4, name: '4'}
        ];*/
        this.years = ["1", "2", "3", "4"];
    };
    ProfilePage.prototype.initializeSemester = function () {
        /* this.semesters = [
           {id: 1, name: 'Odd'},
           {id: 2, name: 'Even'}
         ];*/
        this.semesters = ["Odd", "Even"];
    };
    ProfilePage.prototype.initializeDepartment = function () {
        /*
        this.departments = [
          {id: 1, name: 'CSE'},
          {id: 2, name: 'EEE'},
          {id: 3, name: 'ECE'},
          {id: 4, name: 'MECH'},
          {id: 5, name: 'IT'}
        ];*/
        this.departments = ["CSE", "EEE", "ECE", "MECH", "IT"];
    };
    ProfilePage.prototype.setPeriod = function (sPeriod) {
        this.selectedPeriods = this.sPeriod;
    };
    ProfilePage.prototype.setDepartmentValues = function (sYear, sSemester, sDepartment) {
        if (sSemester != undefined && sDepartment != undefined) {
            this.setSubjectValues(sYear, sSemester, sDepartment);
        }
        this.selectedDepartments = this.departments;
    };
    ProfilePage.prototype.setSubjectValues = function (sYear, sSemester, sDepartment) {
        var _this = this;
        this.selectedSubjects = [];
        this.selectedSemester = sSemester;
        if (sSemester != undefined && sDepartment != undefined && sYear != undefined) {
            this.subjects = this.afData.object('Subject/Subject/Year' + sYear + '/' + sSemester + '/' + sDepartment + '/');
            this.subjects.subscribe(function (data) {
                var keys = Object.keys(data);
                _this.data = keys;
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var i = keys_1[_i];
                    _this.Key.push(i);
                    _this.subjects = _this.afData.object('Subject/Subject/Year' + sYear + '/' + sSemester + '/' + sDepartment + '/' + i);
                    _this.subjects.subscribe(function (data1) {
                        _this.selectedSubjects.push(data1.$value);
                        console.log(_this.selectedSubjects);
                    });
                }
            });
        }
    };
    ProfilePage.prototype.finalizeSubjectValue = function (sSubject) {
        this.finalizedSubject = sSubject;
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    ProfilePage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ProfilePage');
        var time = __WEBPACK_IMPORTED_MODULE_7_moment__();
        var format = 'hh:mm:ss';
        var period1 = __WEBPACK_IMPORTED_MODULE_7_moment__('0:00:00', format);
        var period2 = __WEBPACK_IMPORTED_MODULE_7_moment__('9:00:00', format);
        var period3 = __WEBPACK_IMPORTED_MODULE_7_moment__('10:10:00', format);
        var period4 = __WEBPACK_IMPORTED_MODULE_7_moment__('11:00:00', format);
        var period5 = __WEBPACK_IMPORTED_MODULE_7_moment__('11:50:00', format);
        var period6 = __WEBPACK_IMPORTED_MODULE_7_moment__('13:20:00', format);
        var period7 = __WEBPACK_IMPORTED_MODULE_7_moment__('14:20:00', format);
        var period8 = __WEBPACK_IMPORTED_MODULE_7_moment__('15:10:00', format);
        var period9 = __WEBPACK_IMPORTED_MODULE_7_moment__('23:59:59', format);
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
        this.afauth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                console.log(data.email);
                _this.profiledetails = _this.afData.object('Professor/' + data.uid);
            }
            else {
            }
        });
    };
    ProfilePage.prototype.isEmpty = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }
        return true;
    };
    ;
    ProfilePage.prototype.logout = function () {
        console.log("logout button fired");
        this.afauth.auth.signOut();
        this.navCtrl.pop();
    };
    ProfilePage.prototype.markAttendance = function (sYear, sDepartment, sSubject) {
        if ("undefined" === typeof sYear || "undefined" === typeof sDepartment || "undefined" === typeof sSubject) {
            var alert_1 = this.alertCtrl.create({
                title: 'Insufficient Details',
                subTitle: 'Please enter all the details',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            console.log("attendance firered" + sYear + sDepartment + this.sPeriod);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__attendance_attendance__["a" /* AttendancePage */], {
                param1: sYear,
                param2: sDepartment,
                param3: this.sPeriod,
                param4: this.selectedSemester,
                param5: this.finalizedSubject,
                param6: this.date,
                param7: this.month,
                param8: this.year
            });
        }
    };
    ProfilePage.prototype.checkAttendance = function (sYear, sDepartment, sSemester, sSubject) {
        if ("undefined" === typeof sYear || "undefined" === typeof sDepartment || "undefined" === typeof sSubject) {
            var alert_2 = this.alertCtrl.create({
                title: 'Insufficient Details',
                subTitle: 'Please enter all the details',
                buttons: ['OK']
            });
            alert_2.present();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__report_report__["a" /* ReportPage */], {
                param1: sYear,
                param2: sDepartment,
                param3: this.sPeriod,
                param4: this.selectedSemester,
                param5: this.finalizedSubject,
                param6: this.date,
                param7: this.month,
                param8: this.year
            });
        }
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"E:\Work\Mini Project\LicetApp\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n        <ion-title class="toolbar-background"><strong>Profile page</strong></ion-title>\n    <!--<ion-buttons right color="danger">\n      <button ion-button (click)="logout()">Logout</button>\n    </ion-buttons>-->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list>\n		<ion-item>\n			<ion-label class="parameter"><strong>Username:{{(profiledetails|async)?.fname}}</strong></ion-label>\n		</ion-item>\n\n  <ion-item >\n    <ion-label class="parameter">Period No</ion-label>\n    <ion-select (ionChange)="setPeriod(sPeriod)" [(ngModel)]="sPeriod" >\n      <ion-option  *ngFor="let period of periods()">{{period}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n     <ion-label class="parameter"><strong>Year</strong></ion-label>\n     <ion-select (ionChange)="setDepartmentValues(sYear,sSemester,sDepartment)" [(ngModel)]="sYear">\n          <ion-option  [value]="selYear" *ngFor = "let selYear of years">{{selYear}}  </ion-option>\n    </ion-select>\n    </ion-item>\n\n\n\n<ion-item>\n    <ion-label class="parameter">Semester</ion-label>\n    <ion-select  [(ngModel)]="sSemester" (ionChange)="setSubjectValues(sYear,sSemester,sDepartment)">\n      <ion-option  [value]="selSemester" *ngFor="let selSemester of semesters ">{{selSemester}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n\n\n\n<ion-item>\n      <ion-label class="parameter">Department</ion-label>\n      <ion-select (ionChange)="setSubjectValues(sYear,sSemester,sDepartment)" [(ngModel)]="sDepartment">\n         <ion-option  [value]="selDepartment" *ngFor = "let selDepartment of selectedDepartments">{{selDepartment}}</ion-option>\n      </ion-select>\n </ion-item>\n\n\n\n\n\n  <ion-item >\n    <ion-label class="parameter"> Subject </ion-label>\n      <ion-select [(ngModel)]="sSubject" (ionChange)="finalizeSubjectValue(sSubject)">\n        <ion-option  [value]="selSubject" *ngFor="let selSubject of selectedSubjects" >{{selSubject}}</ion-option>\n      </ion-select>\n\n  </ion-item>\n\n\n  <ion-item>\n    <ion-label class="parameter"> Date </ion-label>\n    <ion-datetime displayFormat="DD-MM-YYYY"  [(ngModel)]="today" (ionChange)="dateChange(today)"></ion-datetime>\n  </ion-item>\n\n  <button ion-button block style="background-color: #e60000  " (click)="markAttendance(sYear,sDepartment,sSubject)" class="log">\n    MARK ATTENDANCE</button>\n\n\n  <button ion-button block style="background-color: #e60000  " (click)="checkAttendance(sYear,sDepartment,sSemester,sSubject)" class="log">\n    GENERATE REPORT</button> <!--\n  <button ion-button block style="background-color: navy;" type="button" (click)="test()">Test Btn</button>\n    \n  <br>-->\n  <button ion-button block style="background-color: navy;" type="button" (click)="scancode()">Scan Barcode</button>\n\n </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\Work\Mini Project\LicetApp\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 195;

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Student_Student__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__testtab_testtab__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Professor_Professor__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__Professor_Professor__["a" /* ProfessorPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__Student_Student__["a" /* StudentPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__testtab_testtab__["a" /* TestTabPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Work\Mini Project\LicetApp\src\pages\tabs\tabs.html"*/'<ion-tabs color="mycolor1">\n  <ion-tab [root]="tab1Root" tabTitle="Professors Login" ></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Students Login" ></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Test Tab"  ></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\Work\Mini Project\LicetApp\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentPage = (function () {
    function StudentPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return StudentPage;
}());
StudentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-student',template:/*ion-inline-start:"E:\Work\Mini Project\LicetApp\src\pages\Student\Student.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Students Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class="text animated pulse">\n    \n    <ion-card-content>\n      <ion-list no-lines>\n      <ion-item>\n            <img class="circle" src="../img/logo.jpg" alt="your image">\n        </ion-item>\n        <ion-item>\n          <ion-label floating style="color: #00004d; font-weight: 900;">Username <ion-icon name="lock"></ion-icon>\n          </ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating style="color: #00004d; font-weight: 900;">Password <ion-icon ios="ios-key" md="md-key"></ion-icon>\n           </ion-label>\n          <ion-input type="password"></ion-input>\n        </ion-item>\n        <ion-item>\n          <p style="color: #000000; font-weight: 900; font-size: 15px;">Forgot Password ? <a style="color: #000000; font-weight: 900; font-size: 15px;">Get Your password</a></p>\n        </ion-item>\n        <button ion-button block style="background-color: navy;">Login</button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\Work\Mini Project\LicetApp\src\pages\Student\Student.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], StudentPage);

//# sourceMappingURL=Student.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestTabPage = (function () {
    function TestTabPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return TestTabPage;
}());
TestTabPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-testtab',template:/*ion-inline-start:"E:\Work\Mini Project\LicetApp\src\pages\testtab\testtab.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Test Tabs\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\Work\Mini Project\LicetApp\src\pages\testtab\testtab.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], TestTabPage);

//# sourceMappingURL=testtab.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reset_reset__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_edit_profile_edit__ = __webpack_require__(527);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var ProfessorPage = (function () {
    function ProfessorPage(navCtrl, navParams, afauth, alertCtrl, afData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afauth = afauth;
        this.alertCtrl = alertCtrl;
        this.afData = afData;
        this.user = {};
        console.log(this.user.email);
    }
    ProfessorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    ProfessorPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var res, e_1, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("login fired:" + user.email, user.password);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afauth.auth.signInWithEmailAndPassword(user.email, user.password)];
                    case 2:
                        res = _a.sent();
                        console.log(res);
                        this.proDetails = this.afData.object('Professor/' + res.uid);
                        this.proDetails.subscribe(function (data) {
                            console.log(data.fname);
                            if (data.fname != undefined) {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
                            }
                            else {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__profile_edit_profile_edit__["a" /* ProfileEditPage */]);
                            }
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1.message);
                        alert_1 = this.alertCtrl.create({
                            title: e_1.message,
                            subTitle: 'Please check your Information',
                            buttons: ['OK']
                        });
                        alert_1.present();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProfessorPage.prototype.reset = function () {
        console.log("Reset page fired");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__reset_reset__["a" /* ResetPage */]);
    };
    return ProfessorPage;
}());
ProfessorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-professor',template:/*ion-inline-start:"E:\Work\Mini Project\LicetApp\src\pages\Professor\Professor.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title class="toolbar-background"><strong>Professors Login</strong></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class="text animated pulse">\n\n    <ion-card-content>\n      <ion-list no-lines>\n\n        <ion-item>\n          <div class="logoImage"></div>​\n           <!-- <img class="circle" src="../img/logo.jpg" alt="your image"> -->\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating style="color: #00004d; font-weight: 900;">Username   <ion-icon ios="ios-lock" md="md-lock"></ion-icon>\n          </ion-label>\n          <ion-input type="text" name="email" [(ngModel)]="user.email"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating style="color: #00004d; font-weight: 900;">Password  <ion-icon ios="ios-key" md="md-key"></ion-icon>\n          </ion-label>\n          <ion-input type="password" name="password" [(ngModel)]="user.password"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <p style="color: #000000; font-weight: 900; font-size: 15px;">Forgot Password ? <a style="color:#000000;font-weight: 900; font-size: 15px; " (click)="reset()">Get Your password</a></p>\n        </ion-item>\n        <button ion-button  block  id="loginBtn" (click)="login(user)" style="background-color: #e60000  ">Login</button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\Work\Mini Project\LicetApp\src\pages\Professor\Professor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], ProfessorPage);

//# sourceMappingURL=Professor.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_native__ = __webpack_require__(592);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the AttendancePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AttendancePage = (function () {
    function AttendancePage(navCtrl, alertCtrl, navParams, afauth, afData, fb) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.afauth = afauth;
        this.afData = afData;
        this.name = [];
        this.attendance = [];
        this.regNo = [];
        this.attendanceArray = [];
        this.attendanceArray2 = [];
        this.presentArray = [];
        this.absentArray = [];
        this.attendanceObject = {};
        this.absentName = [];
        this.absentNumber = [];
        this.selectedStudents = [''];
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
        this.attendanceDetails = afData.list('Attendance/Attendance/' + this.dept + '/' + this.year + ' Year/');
        this.namedetails = this.afData.object('Namelist/Namelist/' + this.dept + '/' + this.year + ' Year/');
        this.namedetails.subscribe(function (data) {
            var keys = Object.keys(data);
            _this.data = keys;
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var i = keys_1[_i];
                _this.regNo.push(i);
                _this.namedetails2 = _this.afData.object('Namelist/Namelist/' + _this.dept + '/' + _this.year + ' Year/' + i);
                _this.namedetails2.subscribe(function (data1) {
                    _this.attendance.push(data1.Attendance);
                    _this.name.push(data1.Name);
                });
            }
        });
    }
    AttendancePage.prototype.checkAll = function () {
        for (var i in this.regNo) {
            this.attendanceArray[i] = "true";
            this.markAttendance(this.data[i], this.attendanceArray[i]);
            this.absentArray = [];
        }
    };
    AttendancePage.prototype.markAttendance = function (test, attendanceArray) {
        if (attendanceArray) {
            this.presentArray.push(test);
        }
        else {
            this.presentArray.splice(this.presentArray.indexOf(test), 1);
        }
        //console.log("Present Array: "+this.presentArray);
        //console.log("Absent Array: "+this.absentArray);
    };
    AttendancePage.prototype.confirmAttendance = function () {
        var _this = this;
        this.absentArray = this.regNo.filter(function (item) { return _this.presentArray.indexOf(item) < 0; });
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
        var alert = this.alertCtrl.create({
            title: 'Confirm ',
            message: 'Do you want to Confirm?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'OK',
                    handler: function () {
                        console.log('OK clicked');
                        try {
                            _this.date = _this.attendanceObject.currentDate + "." + _this.attendanceObject.currentMonth + "." + _this.attendanceObject.currentYear;
                            _this.namedetails2 = _this.afData.object("Attendance/Attendance/" + _this.attendanceObject.year + " Year/" + _this.attendanceObject.dept + "/" + (_this.attendanceObject.currentDate + _this.attendanceObject.currentMonth + _this.attendanceObject.currentYear + _this.attendanceObject.subjects + "/")).set(_this.absentArray);
                            console.log(_this.date);
                            for (var _i = 0, _a = _this.absentArray; _i < _a.length; _i++) {
                                var i = _a[_i];
                                console.log(i);
                                _this.namedetails2 = _this.afData.object('Namelist/Namelist/' + _this.dept + '/' + _this.year + ' Year/' + i);
                                _this.namedetails2.subscribe(function (data) {
                                    _this.absentName.push(data.Name);
                                    _this.absentNumber.push(data.Phno);
                                });
                                //this.message="This is to inform you that your Ward "+ +" is found Absent today dated "+this.attendanceObject.currentDate + " duing the period "+this.attendanceObject.periodNo;
                                //SMS.send('9444978521','message');
                            }
                            for (var i = 0; i < _this.absentName.length; i++) {
                                _this.message = "This is to inform you that your Ward " + _this.absentName[i] + " is found Absent today dated " + _this.attendanceObject.currentDate + "/" + _this.attendanceObject.currentMonth + "/" + _this.attendanceObject.currentYear + " duing period " + _this.attendanceObject.periodNo;
                                __WEBPACK_IMPORTED_MODULE_6_ionic_native__["a" /* SMS */].send(_this.absentNumber[i], _this.message);
                                console.log(_this.absentName[i], _this.absentNumber[i], _this.message);
                            }
                        }
                        catch (e) {
                            console.log(e);
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    AttendancePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    AttendancePage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    AttendancePage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    AttendancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AttendancePage');
    };
    return AttendancePage;
}());
AttendancePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-attendance',template:/*ion-inline-start:"E:\Work\Mini Project\LicetApp\src\pages\attendance\attendance.html"*/'<!--\n  Generated template for the AttendancePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title class="toolbar-background">Attendance: {{this.dept}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button type="button" (click)="checkAll()" class="con">Select All</button>\n\n  <ion-list>\n    <ion-item class="mark"  style="background-color: #000000;  " *ngFor = "let regNo of regNo; let i = index" >\n      <ion-label class="select1"> {{regNo}} {{name[i]}}  </ion-label>\n      <ion-checkbox [(ngModel)] = "attendanceArray[i]" (ionChange)="markAttendance(regNo,attendanceArray[i])" checked="true">  </ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n\n     <button ion-button type="button" (click)="confirmAttendance()" class="con">Confirm Attendance</button><br />\n     <button ion-button type="button" (click)="goBack()" class="con">Back</button>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\Work\Mini Project\LicetApp\src\pages\attendance\attendance.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], AttendancePage);

//# sourceMappingURL=attendance.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ReportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ReportPage = (function () {
    function ReportPage(navCtrl, navParams, afauth, afData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afauth = afauth;
        this.afData = afData;
        this.absentArray = [];
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.year = this.navParams.get('param1');
        this.dept = this.navParams.get('param2');
        this.periods = this.navParams.get("param3");
        this.semester = this.navParams.get("param4");
        this.subject = this.navParams.get("param5");
        this.sDate = this.navParams.get("param6");
        this.sMonth = this.navParams.get("param7");
        this.sYear = this.navParams.get("param8");
        this.attendanceDetails2 = this.afData.object("Attendance/Attendance/" + this.year + " Year/" + this.dept + "/" + (this.sDate + this.sMonth + this.sYear + this.subject + "/"));
        this.attendanceDetails2.subscribe(function (data) {
            /*data.forEach(snapshot =>{
              if(snapshot.dept = this.dept && snapshot.year == this.year && snapshot.periodNo == this.periods && snapshot.semester ==this.semester &&
                 snapshot.subjects == this.subject  && snapshot.currentDate == this.sDate && snapshot.currentMonth == this.sMonth && snapshot.currentYear == this.sYear){
                for(let i of snapshot.absentees){
                  this.absentArray.push(i);
              }
      
              }
            });*/
            console.log(data);
            var keys = Object.keys(data);
            //this.data=keys;
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var i = keys_1[_i];
                console.log(data[i]);
                _this.absentArray[i] = data[i];
            }
            console.log("The absentees aree " + _this.absentArray);
        });
        console.log("The absentees are " + this.absentArray);
    }
    ReportPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ReportPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    ReportPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad ReportPage');
    };
    return ReportPage;
}());
ReportPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-report',template:/*ion-inline-start:"E:\Work\Mini Project\LicetApp\src\pages\report\report.html"*/'<!--\n  Generated template for the ReportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title class="toolbar-background"><strong>Report</strong></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item  *ngFor = "let absentees of absentArray">\n      <ion-label > {{absentees}} </ion-label>\n    </ion-item>\n  </ion-list>\n\n\n        <button ion-button type = "button" style="background-color: #e60000  " (click)="goBack()">Back</button>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\Work\Mini Project\LicetApp\src\pages\report\report.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], ReportPage);

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the ResetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ResetPage = (function () {
    function ResetPage(navCtrl, navParams, afauth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afauth = afauth;
        this.alertCtrl = alertCtrl;
        this.er = {};
    }
    ResetPage.prototype.ionViewDidLoad = function () {
        console.log("resetpage fired");
    };
    ResetPage.prototype.resetPassword = function (email) {
        return __awaiter(this, void 0, __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.Promise, function () {
            var res, e_1, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(email);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afauth.auth.sendPasswordResetEmail(email)];
                    case 2:
                        res = _a.sent();
                        return [2 /*return*/, this.navCtrl.pop()];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1.message);
                        alert_1 = this.alertCtrl.create({
                            title: e_1.message,
                            subTitle: 'Please check your Information',
                            buttons: ['OK']
                        });
                        alert_1.present();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ResetPage;
}());
ResetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-reset',template:/*ion-inline-start:"E:\Work\Mini Project\LicetApp\src\pages\reset\reset.html"*/'<!--\n  Generated template for the ResetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Reset Page</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="background">\n  <div class="list card animated bounceInRight">\n  <ion-card >\n    <ion-card-header>\n      Password Reset\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list no-lines>\n        <ion-item>\n            <img class="circle"src="../img/logo.jpg" alt="your image">\n        </ion-item>\n        <ion-item>\n\n          <ion-label floating>EmailId</ion-label>\n          <ion-input type="text" name="email" [(ngModel)]="email"></ion-input>\n        </ion-item>\n\n\n        <button ion-button outline block color="danger"  (click)="resetPassword(email)">Login</button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</div>\n</ion-content>\n'/*ion-inline-end:"E:\Work\Mini Project\LicetApp\src\pages\reset\reset.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ResetPage);

//# sourceMappingURL=reset.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ProfileEditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfileEditPage = (function () {
    function ProfileEditPage(navCtrl, navParams, afauth, alertCtrl, afData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afauth = afauth;
        this.alertCtrl = alertCtrl;
        this.afData = afData;
        this.profiledetails = {};
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }
    ProfileEditPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    ProfileEditPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    ProfileEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfileEditPage');
    };
    ProfileEditPage.prototype.create = function (profiledetails) {
        var _this = this;
        console.log(profiledetails.lname && profiledetails.fname && profiledetails.dept);
        if (profiledetails.lname && profiledetails.fname && profiledetails.dept) {
            this.afauth.authState.take(1).subscribe(function (data) {
                _this.afData.object('Professor/' + data.uid).set(profiledetails).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]); });
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: "Update Failed",
                subTitle: 'Please Enter all the required Information',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    return ProfileEditPage;
}());
ProfileEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile-edit',template:/*ion-inline-start:"E:\Work\Mini Project\LicetApp\src\pages\profile-edit\profile-edit.html"*/'<!--\n  Generated template for the ProfileEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Profile Edit</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="background">\n  <div class="list card animated bounceInRight">\n  <ion-card >\n\n    <ion-card-content>\n      <ion-list no-lines>\n\n        <ion-item>\n            <img class="circle" src="../img/logo.jpg" alt="your image">\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label floating>FirstName</ion-label>\n            <ion-input type="text" name="fname" [(ngModel)]="profiledetails.fname"></ion-input>\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label floating>LastName</ion-label>\n            <ion-input type="text" name="lname" [(ngModel)]="profiledetails.lname"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label><b>Deptarment</b></ion-label>\n\n        </ion-item>\n\n        <ion-list radio-group [(ngModel)]="profiledetails.dept">\n              <ion-item>\n                <ion-label>CSE</ion-label>\n                <ion-radio value="CSE" checked></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>MECH</ion-label>\n                <ion-radio value="MECH"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>IT</ion-label>\n                <ion-radio value="IT" ></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>ECE</ion-label>\n                <ion-radio value="ECE" ></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>EEE</ion-label>\n                <ion-radio value="EEE" ></ion-radio>\n              </ion-item>\n        </ion-list>\n\n        <button ion-button outline block color="danger" id="loginBtn" (click)="create(profiledetails)">Update</button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</div>\n</ion-content>\n'/*ion-inline-end:"E:\Work\Mini Project\LicetApp\src\pages\profile-edit\profile-edit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], ProfileEditPage);

//# sourceMappingURL=profile-edit.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_Student_Student__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_testtab_testtab__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_Professor_Professor__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_report_report__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_reset_reset__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_edit_profile_edit__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_attendance_attendance__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_barcode_scanner__ = __webpack_require__(410);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var config = {
    apiKey: "AIzaSyCwsZwBg8oiNGKvXP3TNGHsRpOyc2CmAVM",
    authDomain: "lapp-a4af3.firebaseapp.com",
    databaseURL: "https://lapp-a4af3.firebaseio.com",
    projectId: "lapp-a4af3",
    storageBucket: "lapp-a4af3.appspot.com",
    messagingSenderId: "545793665296"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_Student_Student__["a" /* StudentPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_testtab_testtab__["a" /* TestTabPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_Professor_Professor__["a" /* ProfessorPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_report_report__["a" /* ReportPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_reset_reset__["a" /* ResetPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_profile_edit_profile_edit__["a" /* ProfileEditPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_attendance_attendance__["a" /* AttendancePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
            __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["b" /* AngularFireAuthModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_Student_Student__["a" /* StudentPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_testtab_testtab__["a" /* TestTabPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_report_report__["a" /* ReportPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_reset_reset__["a" /* ResetPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_profile_edit_profile_edit__["a" /* ProfileEditPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_attendance_attendance__["a" /* AttendancePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_Professor_Professor__["a" /* ProfessorPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Work\Mini Project\LicetApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\Work\Mini Project\LicetApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 851:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 411,
	"./af.js": 411,
	"./ar": 412,
	"./ar-dz": 413,
	"./ar-dz.js": 413,
	"./ar-kw": 414,
	"./ar-kw.js": 414,
	"./ar-ly": 415,
	"./ar-ly.js": 415,
	"./ar-ma": 416,
	"./ar-ma.js": 416,
	"./ar-sa": 417,
	"./ar-sa.js": 417,
	"./ar-tn": 418,
	"./ar-tn.js": 418,
	"./ar.js": 412,
	"./az": 419,
	"./az.js": 419,
	"./be": 420,
	"./be.js": 420,
	"./bg": 421,
	"./bg.js": 421,
	"./bn": 422,
	"./bn.js": 422,
	"./bo": 423,
	"./bo.js": 423,
	"./br": 424,
	"./br.js": 424,
	"./bs": 425,
	"./bs.js": 425,
	"./ca": 426,
	"./ca.js": 426,
	"./cs": 427,
	"./cs.js": 427,
	"./cv": 428,
	"./cv.js": 428,
	"./cy": 429,
	"./cy.js": 429,
	"./da": 430,
	"./da.js": 430,
	"./de": 431,
	"./de-at": 432,
	"./de-at.js": 432,
	"./de-ch": 433,
	"./de-ch.js": 433,
	"./de.js": 431,
	"./dv": 434,
	"./dv.js": 434,
	"./el": 435,
	"./el.js": 435,
	"./en-au": 436,
	"./en-au.js": 436,
	"./en-ca": 437,
	"./en-ca.js": 437,
	"./en-gb": 438,
	"./en-gb.js": 438,
	"./en-ie": 439,
	"./en-ie.js": 439,
	"./en-nz": 440,
	"./en-nz.js": 440,
	"./eo": 441,
	"./eo.js": 441,
	"./es": 442,
	"./es-do": 443,
	"./es-do.js": 443,
	"./es.js": 442,
	"./et": 444,
	"./et.js": 444,
	"./eu": 445,
	"./eu.js": 445,
	"./fa": 446,
	"./fa.js": 446,
	"./fi": 447,
	"./fi.js": 447,
	"./fo": 448,
	"./fo.js": 448,
	"./fr": 449,
	"./fr-ca": 450,
	"./fr-ca.js": 450,
	"./fr-ch": 451,
	"./fr-ch.js": 451,
	"./fr.js": 449,
	"./fy": 452,
	"./fy.js": 452,
	"./gd": 453,
	"./gd.js": 453,
	"./gl": 454,
	"./gl.js": 454,
	"./gom-latn": 455,
	"./gom-latn.js": 455,
	"./he": 456,
	"./he.js": 456,
	"./hi": 457,
	"./hi.js": 457,
	"./hr": 458,
	"./hr.js": 458,
	"./hu": 459,
	"./hu.js": 459,
	"./hy-am": 460,
	"./hy-am.js": 460,
	"./id": 461,
	"./id.js": 461,
	"./is": 462,
	"./is.js": 462,
	"./it": 463,
	"./it.js": 463,
	"./ja": 464,
	"./ja.js": 464,
	"./jv": 465,
	"./jv.js": 465,
	"./ka": 466,
	"./ka.js": 466,
	"./kk": 467,
	"./kk.js": 467,
	"./km": 468,
	"./km.js": 468,
	"./kn": 469,
	"./kn.js": 469,
	"./ko": 470,
	"./ko.js": 470,
	"./ky": 471,
	"./ky.js": 471,
	"./lb": 472,
	"./lb.js": 472,
	"./lo": 473,
	"./lo.js": 473,
	"./lt": 474,
	"./lt.js": 474,
	"./lv": 475,
	"./lv.js": 475,
	"./me": 476,
	"./me.js": 476,
	"./mi": 477,
	"./mi.js": 477,
	"./mk": 478,
	"./mk.js": 478,
	"./ml": 479,
	"./ml.js": 479,
	"./mr": 480,
	"./mr.js": 480,
	"./ms": 481,
	"./ms-my": 482,
	"./ms-my.js": 482,
	"./ms.js": 481,
	"./my": 483,
	"./my.js": 483,
	"./nb": 484,
	"./nb.js": 484,
	"./ne": 485,
	"./ne.js": 485,
	"./nl": 486,
	"./nl-be": 487,
	"./nl-be.js": 487,
	"./nl.js": 486,
	"./nn": 488,
	"./nn.js": 488,
	"./pa-in": 489,
	"./pa-in.js": 489,
	"./pl": 490,
	"./pl.js": 490,
	"./pt": 491,
	"./pt-br": 492,
	"./pt-br.js": 492,
	"./pt.js": 491,
	"./ro": 493,
	"./ro.js": 493,
	"./ru": 494,
	"./ru.js": 494,
	"./sd": 495,
	"./sd.js": 495,
	"./se": 496,
	"./se.js": 496,
	"./si": 497,
	"./si.js": 497,
	"./sk": 498,
	"./sk.js": 498,
	"./sl": 499,
	"./sl.js": 499,
	"./sq": 500,
	"./sq.js": 500,
	"./sr": 501,
	"./sr-cyrl": 502,
	"./sr-cyrl.js": 502,
	"./sr.js": 501,
	"./ss": 503,
	"./ss.js": 503,
	"./sv": 504,
	"./sv.js": 504,
	"./sw": 505,
	"./sw.js": 505,
	"./ta": 506,
	"./ta.js": 506,
	"./te": 507,
	"./te.js": 507,
	"./tet": 508,
	"./tet.js": 508,
	"./th": 509,
	"./th.js": 509,
	"./tl-ph": 510,
	"./tl-ph.js": 510,
	"./tlh": 511,
	"./tlh.js": 511,
	"./tr": 512,
	"./tr.js": 512,
	"./tzl": 513,
	"./tzl.js": 513,
	"./tzm": 514,
	"./tzm-latn": 515,
	"./tzm-latn.js": 515,
	"./tzm.js": 514,
	"./uk": 516,
	"./uk.js": 516,
	"./ur": 517,
	"./ur.js": 517,
	"./uz": 518,
	"./uz-latn": 519,
	"./uz-latn.js": 519,
	"./uz.js": 518,
	"./vi": 520,
	"./vi.js": 520,
	"./x-pseudo": 521,
	"./x-pseudo.js": 521,
	"./yo": 522,
	"./yo.js": 522,
	"./zh-cn": 523,
	"./zh-cn.js": 523,
	"./zh-hk": 524,
	"./zh-hk.js": 524,
	"./zh-tw": 525,
	"./zh-tw.js": 525
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 851;

/***/ })

},[528]);
//# sourceMappingURL=main.js.map