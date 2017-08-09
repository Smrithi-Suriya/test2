webpackJsonp([0],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reset_reset__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_edit_profile_edit__ = __webpack_require__(337);
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
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
                            }
                            else {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__profile_edit_profile_edit__["a" /* ProfileEditPage */]);
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
        selector: 'page-professor',template:/*ion-inline-start:"E:\Work\Mini Project\Lapp-master\src\pages\Professor\Professor.html"*/'<ion-header>\n  <ion-navbar >\n    <ion-title>Professors Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class="text animated pulse">\n    \n    <ion-card-content>\n      <ion-list no-lines>\n\n        <ion-item>\n            <img class="circle" src="../img/logo.jpg" alt="your image">\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating style="color: #00004d; font-weight: 900;">Username   <ion-icon ios="ios-lock" md="md-lock"></ion-icon>\n          </ion-label>\n          <ion-input type="text" name="email" [(ngModel)]="user.email"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label floating style="color: #00004d; font-weight: 900;">Password  <ion-icon ios="ios-key" md="md-key"></ion-icon>\n          </ion-label>\n          <ion-input type="password" name="password" [(ngModel)]="user.password"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <p style="color: #000000; font-weight: 900; font-size: 15px;">Forgot Password ? <a style="color:#000000;font-weight: 900; font-size: 15px; " (click)="reset()">Get Your password</a></p>\n        </ion-item>\n        <button ion-button  block  id="loginBtn" (click)="login(user)" style="background-color: navy;  ">Login</button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\Work\Mini Project\Lapp-master\src\pages\Professor\Professor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], ProfessorPage);

//# sourceMappingURL=Professor.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__attendance_attendance__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__report_report__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Professor_Professor__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
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









/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, afauth, tc, alertCtrl, afData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afauth = afauth;
        this.tc = tc;
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
    ProfilePage.prototype.dateChange = function (today) {
        this.year = today.substr(0, 4);
        this.month = today.substr(5, 2);
        this.date = today.substr(8, 2);
        console.log(this.date + ' ' + this.month + ' ' + this.year);
    };
    ProfilePage.prototype.initializeYear = function () {
        this.years = [
            { id: 1, name: '1' },
            { id: 2, name: '2' },
            { id: 3, name: '3' },
            { id: 4, name: '4' }
        ];
    };
    ProfilePage.prototype.initializeSemester = function () {
        this.semesters = [
            { id: 1, name: 'Odd' },
            { id: 2, name: 'Even' }
        ];
    };
    ProfilePage.prototype.initializeDepartment = function () {
        this.departments = [
            { id: 1, name: 'CSE' },
            { id: 2, name: 'EEE' },
            { id: 3, name: 'ECE' },
            { id: 4, name: 'MECH' },
            { id: 5, name: 'IT' }
        ];
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
        this.selectedSemester = sSemester.name;
        if (sSemester != undefined && sDepartment != undefined && sYear != undefined) {
            this.subjects = this.afData.object('Subject/Subject/Year' + sYear.name + '/' + sSemester.name + '/' + sDepartment.name + '/');
            this.subjects.subscribe(function (data) {
                var keys = Object.keys(data);
                _this.data = keys;
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var i = keys_1[_i];
                    _this.Key.push(i);
                    _this.subjects = _this.afData.object('Subject/Subject/Year' + sYear.name + '/' + sSemester.name + '/' + sDepartment.name + '/' + i);
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
        var period1 = __WEBPACK_IMPORTED_MODULE_7_moment__('8:00:00', format);
        var period2 = __WEBPACK_IMPORTED_MODULE_7_moment__('9:00:00', format);
        var period3 = __WEBPACK_IMPORTED_MODULE_7_moment__('10:10:00', format);
        var period4 = __WEBPACK_IMPORTED_MODULE_7_moment__('11:00:00', format);
        var period5 = __WEBPACK_IMPORTED_MODULE_7_moment__('11:50:00', format);
        var period6 = __WEBPACK_IMPORTED_MODULE_7_moment__('13:20:00', format);
        var period7 = __WEBPACK_IMPORTED_MODULE_7_moment__('14:20:00', format);
        var period8 = __WEBPACK_IMPORTED_MODULE_7_moment__('15:10:00', format);
        var period9 = __WEBPACK_IMPORTED_MODULE_7_moment__('23:10:00', format);
        if (time.isBetween(period1, period2)) {
            this.period = '1';
        }
        if (time.isBetween(period2, period3)) {
            this.period = '2';
        }
        if (time.isBetween(period3, period4)) {
            this.period = '3';
        }
        if (time.isBetween(period4, period5)) {
            this.period = '4';
        }
        if (time.isBetween(period5, period6)) {
            this.period = '5';
        }
        if (time.isBetween(period6, period7)) {
            this.period = '6';
        }
        if (time.isBetween(period7, period8)) {
            this.period = '7';
        }
        if (time.isBetween(period8, period9)) {
            this.period = '8';
        }
        this.afauth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                console.log(data.email);
                _this.tc.create({
                    message: 'You are logged in,${{data.email}}',
                    duration: 3000
                }).present();
                _this.profiledetails = _this.afData.object('Professor/' + data.uid);
            }
            else {
                _this.tc.create({
                    message: 'Something went wrong Bosco',
                    duration: 3000
                }).present();
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__Professor_Professor__["a" /* ProfessorPage */]);
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
            console.log("attendance firered" + sYear.name + sDepartment.name + this.selectedPeriods);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__attendance_attendance__["a" /* AttendancePage */], {
                param1: sYear.name,
                param2: sDepartment.name,
                param3: this.selectedPeriods,
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
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__report_report__["a" /* ReportPage */], {
                param1: sYear.name,
                param2: sDepartment.name,
                param3: this.selectedPeriods,
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
        selector: 'page-profile',template:/*ion-inline-start:"E:\Work\Mini Project\Lapp-master\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n        <ion-title>Profile page</ion-title>\n    <ion-buttons right color="danger">\n      <button ion-button (click)="logout()">Logout</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list>\n		<ion-item>\n			<ion-label>Username:{{(profiledetails|async)?.fname}}</ion-label>\n		</ion-item>\n\n  <ion-item>\n    <ion-label>Period No</ion-label>\n    <ion-select (ionChange)="setPeriod(sPeriod)" [(ngModel)]="sPeriod" >\n      <ion-option *ngFor="let period of periods()">{{period}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n     <ion-label><strong>Year</strong></ion-label>\n     <ion-select (ionChange)="setDepartmentValues(sYear,sSemester,sDepartment)" [(ngModel)]="sYear">\n          <ion-option [value]="sYear" *ngFor = "let sYear of years">{{sYear.name}}  </ion-option>\n    </ion-select>\n    </ion-item>\n\n\n\n<ion-item>\n    <ion-label>Semester</ion-label>\n    <ion-select  [(ngModel)]="sSemester" (ionChange)="setSubjectValues(sYear,sSemester,sDepartment)">\n      <ion-option [value]="sSemester" *ngFor="let sSemester of semesters ">{{sSemester.name}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n\n\n\n<ion-item>\n      <ion-label>Department</ion-label>\n      <ion-select (ionChange)="setSubjectValues(sYear,sSemester,sDepartment)" [(ngModel)]="sDepartment">\n         <ion-option [value]="sDepartment" *ngFor = "let sDepartment of selectedDepartments">{{sDepartment.name}}</ion-option>\n      </ion-select>\n </ion-item>\n\n\n\n\n\n  <ion-item >\n    <ion-label> Subject </ion-label>\n      <ion-select [(ngModel)]="sSubject" (ionChange)="finalizeSubjectValue(sSubject)">\n        <ion-option [value]="sSubject" *ngFor="let sSubject of selectedSubjects" >{{sSubject}}</ion-option>\n      </ion-select>\n\n  </ion-item>\n\n\n  <ion-item>\n    <ion-label> Date </ion-label>\n    <ion-datetime displayFormat="DD-MM-YYYY" [(ngModel)]="today" (ionChange)="dateChange(today)"></ion-datetime>\n  </ion-item>\n\n  <button ion-button block style="background-color: navy;" (click)="markAttendance(sYear,sDepartment,sSubject)">\n    MARK ATTENDANCE</button><br>\n\n\n  <button ion-button block style="background-color: navy;" (click)="checkAttendance(sYear,sDepartment,sSemester,sSubject)">\n    GENERATE REPORT</button><br>\n </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\Work\Mini Project\Lapp-master\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Student_Student__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__testtab_testtab__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Professor_Professor__ = __webpack_require__(110);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Work\Mini Project\Lapp-master\src\pages\tabs\tabs.html"*/'<ion-tabs color="dark">\n  <ion-tab [root]="tab1Root" tabTitle="Professors Login" ></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Students Login" ></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Test Tab"  ></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\Work\Mini Project\Lapp-master\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        selector: 'page-student',template:/*ion-inline-start:"E:\Work\Mini Project\Lapp-master\src\pages\Student\Student.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Students Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class="text animated pulse">\n    \n    <ion-card-content>\n      <ion-list no-lines>\n      <ion-item>\n            <img class="circle" src="../img/logo.jpg" alt="your image">\n        </ion-item>\n        <ion-item>\n          <ion-label floating style="color: #00004d; font-weight: 900;">Username <ion-icon name="lock"></ion-icon>\n          </ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating style="color: #00004d; font-weight: 900;">Password <ion-icon ios="ios-key" md="md-key"></ion-icon>\n           </ion-label>\n          <ion-input type="password"></ion-input>\n        </ion-item>\n        <ion-item>\n          <p style="color: #000000; font-weight: 900; font-size: 15px;">Forgot Password ? <a style="color: #000000; font-weight: 900; font-size: 15px;">Get Your password</a></p>\n        </ion-item>\n        <button ion-button block style="background-color: navy;">Login</button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\Work\Mini Project\Lapp-master\src\pages\Student\Student.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], StudentPage);

//# sourceMappingURL=Student.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        selector: 'page-testtab',template:/*ion-inline-start:"E:\Work\Mini Project\Lapp-master\src\pages\testtab\testtab.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Test Tabs\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\Work\Mini Project\Lapp-master\src\pages\testtab\testtab.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], TestTabPage);

//# sourceMappingURL=testtab.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
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
    function AttendancePage(navCtrl, navParams, afauth, afData, fb) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afauth = afauth;
        this.afData = afData;
        this.name = [];
        this.attendance = [];
        this.regNo = [];
        this.attendanceArray = [];
        this.presentArray = [];
        this.absentArray = [];
        this.attendanceObject = {};
        this.selectedStudents = [''];
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
    AttendancePage.prototype.markAttendance = function (test, attendanceArray) {
        if (attendanceArray) {
            this.presentArray.push(test);
        }
        else {
            this.presentArray.splice(this.presentArray.indexOf(test), 1);
        }
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
        selector: 'page-attendance',template:/*ion-inline-start:"E:\Work\Mini Project\Lapp-master\src\pages\attendance\attendance.html"*/'<!--\n  Generated template for the AttendancePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Attendance: {{this.dept}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item *ngFor = "let regNo of regNo; let i = index" >\n      <ion-label> {{regNo}} {{name[i]}}  </ion-label>\n      <ion-checkbox [(ngModel)] = "attendanceArray[i]" (ionChange)="markAttendance(regNo,attendanceArray[i])" checked="true">  </ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n  <ion-item>\n     <button ion-button type="button" (click)="confirmAttendance()">Confirm Attendance</button>\n   </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"E:\Work\Mini Project\Lapp-master\src\pages\attendance\attendance.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], AttendancePage);

//# sourceMappingURL=attendance.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(35);
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
        this.attendanceDetails = afData.list('Attendance/Attendance/' + this.dept + '/' + this.year + ' Year/');
        this.attendanceDetails.subscribe(function (data) {
            data.forEach(function (snapshot) {
                if (snapshot.dept = _this.dept && snapshot.year == _this.year && snapshot.periodNo == _this.periods && snapshot.semester == _this.semester &&
                    snapshot.subjects == _this.subject && snapshot.currentDate == _this.sDate && snapshot.currentMonth == _this.sMonth && snapshot.currentYear == _this.sYear) {
                    for (var _i = 0, _a = snapshot.absentees; _i < _a.length; _i++) {
                        var i = _a[_i];
                        _this.absentArray.push(i);
                    }
                }
            });
        });
        console.log("The absentees are " + this.absentArray);
    }
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
        selector: 'page-report',template:/*ion-inline-start:"E:\Work\Mini Project\Lapp-master\src\pages\report\report.html"*/'<!--\n  Generated template for the ReportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>report</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor = "let absentees of absentArray">\n      <ion-label> {{absentees}} </ion-label>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\Work\Mini Project\Lapp-master\src\pages\report\report.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], ReportPage);

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(58);
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
        selector: 'page-reset',template:/*ion-inline-start:"E:\Work\Mini Project\Lapp-master\src\pages\reset\reset.html"*/'<!--\n  Generated template for the ResetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Reset Page</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="background">\n  <div class="list card animated bounceInRight">\n  <ion-card >\n    <ion-card-header>\n      Password Reset\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list no-lines>\n        <ion-item>\n            <img class="circle"src="../img/logo.jpg" alt="your image">\n        </ion-item>\n        <ion-item>\n\n          <ion-label floating>EmailId</ion-label>\n          <ion-input type="text" name="email" [(ngModel)]="email"></ion-input>\n        </ion-item>\n\n\n        <button ion-button outline block color="danger"  (click)="resetPassword(email)">Login</button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</div>\n</ion-content>\n'/*ion-inline-end:"E:\Work\Mini Project\Lapp-master\src\pages\reset\reset.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ResetPage);

//# sourceMappingURL=reset.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(113);
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
        selector: 'page-profile-edit',template:/*ion-inline-start:"E:\Work\Mini Project\Lapp-master\src\pages\profile-edit\profile-edit.html"*/'<!--\n  Generated template for the ProfileEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Profile Edit</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="background">\n  <div class="list card animated bounceInRight">\n  <ion-card >\n\n    <ion-card-content>\n      <ion-list no-lines>\n\n        <ion-item>\n            <img class="circle" src="../img/logo.jpg" alt="your image">\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label floating>FirstName</ion-label>\n            <ion-input type="text" name="fname" [(ngModel)]="profiledetails.fname"></ion-input>\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label floating>LastName</ion-label>\n            <ion-input type="text" name="lname" [(ngModel)]="profiledetails.lname"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label><b>Deptarment</b></ion-label>\n\n        </ion-item>\n\n        <ion-list radio-group [(ngModel)]="profiledetails.dept">\n              <ion-item>\n                <ion-label>CSE</ion-label>\n                <ion-radio value="CSE" checked></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>MECH</ion-label>\n                <ion-radio value="MECH"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>IT</ion-label>\n                <ion-radio value="IT" ></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>ECE</ion-label>\n                <ion-radio value="ECE" ></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>EEE</ion-label>\n                <ion-radio value="EEE" ></ion-radio>\n              </ion-item>\n        </ion-list>\n\n        <button ion-button outline block color="danger" id="loginBtn" (click)="create(profiledetails)">Update</button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</div>\n</ion-content>\n'/*ion-inline-end:"E:\Work\Mini Project\Lapp-master\src\pages\profile-edit\profile-edit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], ProfileEditPage);

//# sourceMappingURL=profile-edit.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_Student_Student__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_testtab_testtab__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_Professor_Professor__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_report_report__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_reset_reset__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_edit_profile_edit__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_attendance_attendance__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__ = __webpack_require__(35);
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
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(205);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Work\Mini Project\Lapp-master\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\Work\Mini Project\Lapp-master\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 221,
	"./af.js": 221,
	"./ar": 222,
	"./ar-dz": 223,
	"./ar-dz.js": 223,
	"./ar-kw": 224,
	"./ar-kw.js": 224,
	"./ar-ly": 225,
	"./ar-ly.js": 225,
	"./ar-ma": 226,
	"./ar-ma.js": 226,
	"./ar-sa": 227,
	"./ar-sa.js": 227,
	"./ar-tn": 228,
	"./ar-tn.js": 228,
	"./ar.js": 222,
	"./az": 229,
	"./az.js": 229,
	"./be": 230,
	"./be.js": 230,
	"./bg": 231,
	"./bg.js": 231,
	"./bn": 232,
	"./bn.js": 232,
	"./bo": 233,
	"./bo.js": 233,
	"./br": 234,
	"./br.js": 234,
	"./bs": 235,
	"./bs.js": 235,
	"./ca": 236,
	"./ca.js": 236,
	"./cs": 237,
	"./cs.js": 237,
	"./cv": 238,
	"./cv.js": 238,
	"./cy": 239,
	"./cy.js": 239,
	"./da": 240,
	"./da.js": 240,
	"./de": 241,
	"./de-at": 242,
	"./de-at.js": 242,
	"./de-ch": 243,
	"./de-ch.js": 243,
	"./de.js": 241,
	"./dv": 244,
	"./dv.js": 244,
	"./el": 245,
	"./el.js": 245,
	"./en-au": 246,
	"./en-au.js": 246,
	"./en-ca": 247,
	"./en-ca.js": 247,
	"./en-gb": 248,
	"./en-gb.js": 248,
	"./en-ie": 249,
	"./en-ie.js": 249,
	"./en-nz": 250,
	"./en-nz.js": 250,
	"./eo": 251,
	"./eo.js": 251,
	"./es": 252,
	"./es-do": 253,
	"./es-do.js": 253,
	"./es.js": 252,
	"./et": 254,
	"./et.js": 254,
	"./eu": 255,
	"./eu.js": 255,
	"./fa": 256,
	"./fa.js": 256,
	"./fi": 257,
	"./fi.js": 257,
	"./fo": 258,
	"./fo.js": 258,
	"./fr": 259,
	"./fr-ca": 260,
	"./fr-ca.js": 260,
	"./fr-ch": 261,
	"./fr-ch.js": 261,
	"./fr.js": 259,
	"./fy": 262,
	"./fy.js": 262,
	"./gd": 263,
	"./gd.js": 263,
	"./gl": 264,
	"./gl.js": 264,
	"./gom-latn": 265,
	"./gom-latn.js": 265,
	"./he": 266,
	"./he.js": 266,
	"./hi": 267,
	"./hi.js": 267,
	"./hr": 268,
	"./hr.js": 268,
	"./hu": 269,
	"./hu.js": 269,
	"./hy-am": 270,
	"./hy-am.js": 270,
	"./id": 271,
	"./id.js": 271,
	"./is": 272,
	"./is.js": 272,
	"./it": 273,
	"./it.js": 273,
	"./ja": 274,
	"./ja.js": 274,
	"./jv": 275,
	"./jv.js": 275,
	"./ka": 276,
	"./ka.js": 276,
	"./kk": 277,
	"./kk.js": 277,
	"./km": 278,
	"./km.js": 278,
	"./kn": 279,
	"./kn.js": 279,
	"./ko": 280,
	"./ko.js": 280,
	"./ky": 281,
	"./ky.js": 281,
	"./lb": 282,
	"./lb.js": 282,
	"./lo": 283,
	"./lo.js": 283,
	"./lt": 284,
	"./lt.js": 284,
	"./lv": 285,
	"./lv.js": 285,
	"./me": 286,
	"./me.js": 286,
	"./mi": 287,
	"./mi.js": 287,
	"./mk": 288,
	"./mk.js": 288,
	"./ml": 289,
	"./ml.js": 289,
	"./mr": 290,
	"./mr.js": 290,
	"./ms": 291,
	"./ms-my": 292,
	"./ms-my.js": 292,
	"./ms.js": 291,
	"./my": 293,
	"./my.js": 293,
	"./nb": 294,
	"./nb.js": 294,
	"./ne": 295,
	"./ne.js": 295,
	"./nl": 296,
	"./nl-be": 297,
	"./nl-be.js": 297,
	"./nl.js": 296,
	"./nn": 298,
	"./nn.js": 298,
	"./pa-in": 299,
	"./pa-in.js": 299,
	"./pl": 300,
	"./pl.js": 300,
	"./pt": 301,
	"./pt-br": 302,
	"./pt-br.js": 302,
	"./pt.js": 301,
	"./ro": 303,
	"./ro.js": 303,
	"./ru": 304,
	"./ru.js": 304,
	"./sd": 305,
	"./sd.js": 305,
	"./se": 306,
	"./se.js": 306,
	"./si": 307,
	"./si.js": 307,
	"./sk": 308,
	"./sk.js": 308,
	"./sl": 309,
	"./sl.js": 309,
	"./sq": 310,
	"./sq.js": 310,
	"./sr": 311,
	"./sr-cyrl": 312,
	"./sr-cyrl.js": 312,
	"./sr.js": 311,
	"./ss": 313,
	"./ss.js": 313,
	"./sv": 314,
	"./sv.js": 314,
	"./sw": 315,
	"./sw.js": 315,
	"./ta": 316,
	"./ta.js": 316,
	"./te": 317,
	"./te.js": 317,
	"./tet": 318,
	"./tet.js": 318,
	"./th": 319,
	"./th.js": 319,
	"./tl-ph": 320,
	"./tl-ph.js": 320,
	"./tlh": 321,
	"./tlh.js": 321,
	"./tr": 322,
	"./tr.js": 322,
	"./tzl": 323,
	"./tzl.js": 323,
	"./tzm": 324,
	"./tzm-latn": 325,
	"./tzm-latn.js": 325,
	"./tzm.js": 324,
	"./uk": 326,
	"./uk.js": 326,
	"./ur": 327,
	"./ur.js": 327,
	"./uz": 328,
	"./uz-latn": 329,
	"./uz-latn.js": 329,
	"./uz.js": 328,
	"./vi": 330,
	"./vi.js": 330,
	"./x-pseudo": 331,
	"./x-pseudo.js": 331,
	"./yo": 332,
	"./yo.js": 332,
	"./zh-cn": 333,
	"./zh-cn.js": 333,
	"./zh-hk": 334,
	"./zh-hk.js": 334,
	"./zh-tw": 335,
	"./zh-tw.js": 335
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
webpackContext.id = 429;

/***/ })

},[338]);
//# sourceMappingURL=main.js.map