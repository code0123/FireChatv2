webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Material Component Imports

// Component Imports




// Service Imports



// Project Routes
var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
        data: {
            title: 'FireChatv2 | Login'
        },
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */],
        data: {
            title: 'FireChatv2 | Register'
        }
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
        data: {
            title: 'FireChatv2 | Home'
        },
        canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
// Firebase Setup
var config = {
    apiKey: "AIzaSyCI9qf9mwV5EPF_VDDxQSW0Q8ltLO1cnjI",
    authDomain: "firechatv2.firebaseapp.com",
    databaseURL: "https://firechatv2.firebaseio.com",
    projectId: "firechatv2",
    storageBucket: "firechatv2.appspot.com",
    messagingSenderId: "220814588047"
};
__WEBPACK_IMPORTED_MODULE_6_firebase__["initializeApp"](config);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["B" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["A" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["F" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__["a" /* AuthGuardService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Welcome to the Home Page</h3>\r\n<button (click)=\"logout()\">Logout</button>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout().then(function () {
            _this.router.navigate(['/']);
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".formLogin {\r\n    max-width: 340px;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    padding-top: 90px;\r\n  }\r\n  \r\n  .formLogin .fullWidth {\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .tRight {\r\n    text-align: right;\r\n  }\r\n  \r\n  .formLogin h1 {\r\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n    font-size: 33px;\r\n    text-align: center;\r\n    color: #333;\r\n    margin: 0 0 30px 0;\r\n  }\r\n  \r\n  .formLogin h1 img {\r\n    width: 80px;\r\n  }\r\n  \r\n  .formLogin h1 img {\r\n    position: relative;\r\n    top: 16px;\r\n  }\r\n  \r\n  .formLogin h1 span {\r\n    margin-right: 20px;\r\n  }\r\n  \r\n  .socialLogin button {\r\n    width: 100%;\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .button-row {\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .googleLogin {\r\n    background: #dd4b39;\r\n    color: #fff;\r\n  }\r\n  \r\n  .fbLogin {\r\n    background: #415dae;\r\n    color: #fff;\r\n  }\r\n  \r\n  .accountSignUp p,\r\n  .accountSignUp a {\r\n    font-size: 14px;\r\n    margin-top: 0;\r\n  }\r\n  \r\n  .accountSignUp a {\r\n    text-decoration: none;\r\n    color: #08c;\r\n  }\r\n  \r\n  .formLogin mat-card {\r\n    padding-top: 0;\r\n  }\r\n  \r\n  body {\r\n    background: red;\r\n  }\r\n  @media only screen and (max-width : 767px) {\r\n    .formLogin {\r\n      width: calc(100% - 20px);\r\n      margin: 0 auto;\r\n    }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"formLogin\">\r\n  <mat-card>\r\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"loginSubmit()\">\r\n      <h1><img src=\"/assets/images/angular.png\"></h1>\r\n\r\n      <mat-form-field class=\"fullWidth\">\r\n        <input matInput placeholder=\"Email\" formControlName=\"email\" [(ngModel)]=\"email\" name=\"email\" type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"fullWidth\">\r\n        <input matInput placeholder=\"Password\" formControlName=\"password\" [(ngModel)]=\"password\" name=\"password\" type=\"password\">\r\n      </mat-form-field>\r\n\r\n      <div class=\"button-row tRight\">\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"is_authenticating\">Login</button>\r\n      </div>\r\n    </form>\r\n    <div class=\"socialLogin\">\r\n      <button mat-raised-button color=\"primary\" class=\"googleLogin\" (click)=\"loginWithGoogle()\" [disabled]=\"is_authenticating\">Login with Google</button>\r\n      <button mat-raised-button color=\"primary\" class=\"fbLogin\" (click)=\"loginWithFacebook()\" [disabled]=\"is_authenticating\">Login with Facebook</button>\r\n    </div>\r\n    <div class=\"accountSignUp\">\r\n      <p>No account? <a routerLink=\"/register\">Sign Up</a></p>\r\n    </div>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var LoginComponent = (function () {
    function LoginComponent(authService, router, matSnackBar) {
        this.authService = authService;
        this.router = router;
        this.matSnackBar = matSnackBar;
        this.is_authenticating = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.emailCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern(EMAIL_REGEX)]);
        this.passwordCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            email: this.emailCtrl,
            password: this.passwordCtrl
        });
        this.checkUserLoggedIn();
    };
    LoginComponent.prototype.checkUserLoggedIn = function () {
        var _this = this;
        this.authService.checkUserLoggedIn().then(function (user) {
            if (user) {
                _this.router.navigate(['/home']);
            }
        });
    };
    LoginComponent.prototype.loginWithGoogle = function () {
        var _this = this;
        this.is_authenticating = true;
        this.authService.loginWithGoogle().then(function (userData) {
            _this.authService.checkIfAccountExist(userData['userid']).then(function (status) {
                if (status) {
                    _this.router.navigate(['/home']);
                    _this.is_authenticating = false;
                }
                else {
                    _this.authService.saveUser(userData).then(function (response) {
                        _this.router.navigate(['/home']);
                        _this.is_authenticating = false;
                    });
                }
            });
        });
    };
    LoginComponent.prototype.loginWithFacebook = function () {
        this.is_authenticating = true;
        this.authService.loginWithFacebook().then(function (userData) {
            console.log('userData', userData);
        });
    };
    LoginComponent.prototype.loginSubmit = function () {
        var _this = this;
        this.is_authenticating = true;
        if (this.loginForm.valid) {
            this.authService.loginWithUserAndPass(this.email, this.password).then(function (user) {
                console.log('useruser', user);
                if (user['code']) {
                    console.log('code');
                    _this.matSnackBar.open(user['message'], "remove", { duration: 3000 });
                }
                else {
                    if (user['emailVerified']) {
                        _this.router.navigate(['home']);
                    }
                    else {
                        _this.matSnackBar.open('Login failed! please verify your email first.', "remove", { duration: 3000 });
                    }
                }
                _this.is_authenticating = false;
            });
        }
        else {
            this.matSnackBar.open("Incorrect email or password!", "remove", { duration: 3000 });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MatSnackBar */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".formRegister {\r\n  max-width: 340px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  padding-top: 90px;\r\n}\r\n\r\n.formRegister .fullWidth {\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.tRight {\r\n  text-align: right;\r\n}\r\n\r\n.formRegister h1 {\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 33px;\r\n  text-align: center;\r\n  color: #333;\r\n  margin: 0 0 30px 0;\r\n}\r\n\r\n.formRegister h1 img {\r\n  width: 80px;\r\n}\r\n\r\n.formRegister h1 img {\r\n  position: relative;\r\n  top: 16px;\r\n}\r\n\r\n.formRegister h1 span {\r\n  margin-right: 20px;\r\n}\r\n\r\n.socialLogin button {\r\n  width: 100%;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.button-row {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.googleLogin {\r\n  background: #dd4b39;\r\n  color: #fff;\r\n}\r\n\r\n.fbLogin {\r\n  background: #415dae;\r\n  color: #fff;\r\n}\r\n\r\n.accountSignUp p,\r\n.accountSignUp a {\r\n  font-size: 14px;\r\n  margin-top: 0;\r\n}\r\n\r\n.accountSignUp a {\r\n  text-decoration: none;\r\n  color: #08c;\r\n}\r\n\r\n.formRegister mat-card {\r\n  padding-top: 0;\r\n}\r\n\r\n@media only screen and (max-width : 767px) {\r\n  .formRegister {\r\n      width: calc(100% - 20px);\r\n      margin: 0 auto;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"formRegister\">\r\n  <mat-card>\r\n    <form [formGroup]=\"registerForm\" (submit)=\"registerSubmit()\" novalidate>\r\n      <h1>\r\n        <img src=\"/assets/images/angular.png\">\r\n      </h1>\r\n\r\n      <mat-form-field class=\"fullWidth\">\r\n        <input matInput placeholder=\"Name\" formControlName=\"name\" [(ngModel)]=\"name\" name=\"name\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"fullWidth\">\r\n        <input matInput placeholder=\"Email\" formControlName=\"email\" [(ngModel)]=\"email\" name=\"email\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"fullWidth\">\r\n        <input matInput placeholder=\"Password\" formControlName=\"password\" [(ngModel)]=\"password\" name=\"password\" type=\"password\">\r\n      </mat-form-field>\r\n\r\n      <div class=\"button-row tRight\">\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"isSubmitted\">Register</button>\r\n      </div>\r\n    </form>\r\n    <div class=\"accountSignUp\">\r\n      <p>Already have an account?\r\n        <a routerLink=\"/\">Login</a>\r\n      </p>\r\n    </div>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var RegisterComponent = (function () {
    function RegisterComponent(authService, matSnackBar, router) {
        this.authService = authService;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.isSubmitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.nameCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.emailCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern(EMAIL_REGEX)]);
        this.passCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            name: this.nameCtrl,
            email: this.emailCtrl,
            password: this.passCtrl
        });
    };
    RegisterComponent.prototype.registerSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.registerForm.valid) {
            this.authService.register(this.email, this.password).then(function (userData) {
                if (userData['code']) {
                    _this.isSubmitted = false;
                    _this.matSnackBar.open(userData['message'], "close", { duration: 3000 });
                }
                else {
                    _this.authService.saveUserRegistered(userData['uid'], _this.name, _this.email, _this.password).then(function (res) {
                        _this.authService.sendVerificationEmail().then(function (emailRes) {
                            _this.isSubmitted = false;
                            _this.name = "";
                            _this.email = "";
                            _this.password = "";
                            _this.router.navigate(['']);
                            _this.matSnackBar.open("Email verification was sent to your email", "close", { duration: 5000 });
                        });
                    });
                }
            });
        }
        else {
            this.isSubmitted = false;
            this.matSnackBar.open("Error! some of fields are incorrect", "close", { duration: 3000 });
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["y" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
                resolve(user);
            });
        });
        return promise.then(function (user) {
            if (user) {
                if (user['emailVerified']) {
                    return true;
                }
                else {
                    _this.router.navigate(['']);
                    return false;
                }
            }
            else {
                _this.router.navigate(['']);
                return false;
            }
        });
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore__ = __webpack_require__("../../../../firebase/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.db = __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]();
    }
    AuthService.prototype.loginWithGoogle = function () {
        var googleProvider = new __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].GoogleAuthProvider();
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signInWithPopup(googleProvider).then(function (res) {
                var user = res.user;
                var userObj = {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                };
                resolve(userObj);
            }).catch(function (err) {
                resolve(err);
            });
        });
        return promise;
    };
    AuthService.prototype.checkIfAccountExist = function (userid) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.collection('users').doc(userid).get().then(function (doc) {
                if (doc.exists) {
                    resolve(doc.data());
                }
                else {
                    resolve(0);
                }
            });
        });
        return promise;
    };
    AuthService.prototype.saveUser = function (userData) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.collection('users').doc(userData['userid']).set(userData).then(function (res) {
                resolve(res);
            }).catch(function (err) {
                resolve(err);
            });
        });
        return promise;
    };
    AuthService.prototype.checkUserLoggedIn = function () {
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().onAuthStateChanged(function (user) {
                resolve(user);
            });
        });
        return promise;
    };
    AuthService.prototype.loginWithFacebook = function () {
        var facebookProvider = new __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].FacebookAuthProvider();
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signInWithPopup(facebookProvider).then(function (res) {
                resolve(res.user);
            });
        });
        return promise;
    };
    AuthService.prototype.loginWithUserAndPass = function (email, password) {
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signInWithEmailAndPassword(email, password).then(function (data) {
                resolve(data);
            }).catch(function (err) {
                resolve(err);
            });
        });
        return promise;
    };
    AuthService.prototype.register = function (email, password) {
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().createUserWithEmailAndPassword(email, password).then(function (user) {
                resolve(user);
            }).catch(function (err) {
                resolve(err);
            });
        });
        return promise;
    };
    AuthService.prototype.saveUserRegistered = function (uid, name, email, password) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.collection('users').doc(uid).set({
                name: name,
                email: email,
                password: password,
                photo: ''
            }).then(function (res) {
                resolve(res);
            }).catch(function (err) {
                resolve(err);
            });
        });
        return promise;
    };
    AuthService.prototype.sendVerificationEmail = function () {
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().onAuthStateChanged(function (user) {
                user.sendEmailVerification().then(function (data) {
                    resolve(data);
                }).catch(function (err) {
                    resolve(err);
                });
            });
        });
        return promise;
    };
    AuthService.prototype.logout = function () {
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signOut().then(function (res) {
                resolve(res);
            }).catch(function (err) {
                resolve(err);
            });
        });
        return promise;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map