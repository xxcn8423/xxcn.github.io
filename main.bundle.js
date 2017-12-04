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

module.exports = "<app-header></app-header>\n<app-profile></app-profile>\n<app-contact></app-contact>\n<app-footer></app-footer>\n\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__["a" /* ProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".section-contact {\r\n  width: 60%;\r\n  margin: 0 auto;\r\n}\r\n.row {\r\n  margin: 1rem 0;\r\n}\r\ninput[type=text],\r\ninput[type=email],\r\nselect,\r\ntextarea {\r\n  width: 100%;\r\n  padding: 7px;\r\n  border-radius: 3px;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\ntextarea {\r\n  height: 100px;\r\n}\r\n\r\ninput[type=checkbox] {\r\n  margin: 10px 5px 10px 0;\r\n}\r\n\r\n*:focus {outline: none;}\r\n\r\n.col {\r\n  margin: 0;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section-contact\" id=\"section-contact\">\n  <div class=\"row\">\n    <h2>I am happy to hear from you</h2>\n  </div>\n  <form method=\"post\" action=\"#\" class=\"contact-form\">\n    <div class=\"row\">\n      <div class=\"col span-1-of-3\">\n        <label>Name</label>\n      </div>\n      <div class=\"col span-2-of-3\">\n        <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"Your Name\" required=\"required\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col span-1-of-3\">\n        <label>E-mail</label>\n      </div>\n      <div class=\"col span-2-of-3\">\n        <input type=\"text\" name=\"email\" id=\"email\" placeholder=\"Your E-Mail\" required=\"required\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col span-1-of-3\">\n        <label>Phone Number</label>\n      </div>\n      <div class=\"col span-2-of-3\">\n        <input type=\"text\" name=\"phone\" id=\"phone\" placeholder=\"Your Phone Number\" required=\"required\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col span-1-of-3\">\n        <label>Leave your feedback:</label>\n      </div>\n      <div class=\"col span-2-of-3\">\n        <textarea name=\"message\" placeholder=\"Your message\"></textarea>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col span-1-of-3\">\n        <label>&nbsp;</label>\n      </div>\n      <div class=\"col span-2-of-3\">\n        <input type=\"submit\" value=\"Send it!\">\n      </div>\n    </div>\n  </form>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
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

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\r\n  background-color: #333;\r\n  padding: 50px;\r\n  font-size: 80%;\r\n}\r\n\r\n.footer-nav {\r\n  list-style: none;\r\n  float: left;\r\n}\r\n\r\n.social-links {\r\n  list-style: none;\r\n  float: right;\r\n}\r\n\r\n.footer-nav li,\r\n.social-links li {\r\n  display: inline-block;\r\n  margin-right: 20px;\r\n}\r\n\r\n.footer-nav li:last-child,\r\n.social-links li:last-child {\r\n  margin-right: 0;\r\n}\r\n\r\n.footer-nav li a:link,\r\n.footer-nav li a:visited,\r\n.social-links li a:link,\r\n.social-links li a:visited {\r\n  text-decoration: none;\r\n  border: 0;\r\n  color: #888;\r\n  transition: color 0.2s;\r\n}\r\n\r\n.footer-nav li a:hover,\r\n.footer-nav li a:active {\r\n  color: #ddd;\r\n}\r\n\r\n.social-links li a:link,\r\n.social-links li a:visited {\r\n  font-size: 160%;\r\n}\r\n\r\n.ion-social-facebook,\r\n.ion-social-twitter,\r\n.ion-social-googleplus,\r\n.ion-social-instagram {\r\n  transition: color 0.2s;\r\n}\r\n\r\n.ion-social-facebook:hover {\r\n  color: #3b5998;\r\n}\r\n\r\n.ion-social-twitter:hover {\r\n  color: #00aced;\r\n}\r\n\r\n.ion-social-googleplus:hover {\r\n  color: #dd4b39;\r\n}\r\n\r\n.ion-social-instagram:hover {\r\n  color: #517fa4;\r\n}\r\n\r\n\r\nfooter p {\r\n  color: #888;\r\n  text-align: center;\r\n  margin-top: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"row\">\n    <div class=\"col span-1-of-2\">\n    </div>\n    <div class=\"col span-1-of-2\">\n      <ul class=\"social-links\">\n        <li><a href=\"https://www.linkedin.com/in/xuzhanggame/\"><i class=\"ion-social-linkedin\"></i></a></li>\n        <li><a href=\"https://twitter.com/broxzhang\"><i class=\"ion-social-twitter\"></i></a></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"row\">\n    <p>\n      Copyright &copy; 2017 by Brox Zhang. All rights reserved.\n    </p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\r\n  height: 100vh;\r\n  width: auto;\r\n}\r\n\r\n#video-background {\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  height: auto;\r\n  width: auto;\r\n  z-index: -100;\r\n}\r\n\r\n.hero-text-box {\r\n  position: absolute;\r\n  width: 1140px;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\nh1 {\r\n  margin-top: 0;\r\n  margin-bottom:  2rem;\r\n  color: #fff;\r\n  font-size: 2rem;\r\n  font-weight: 300;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1px;\r\n  word-spacing: 3px;\r\n}\r\n\r\n.btn {\r\n  background-color: #4FC3F7;\r\n  display: inline-block;\r\n  padding: 10px 30px;\r\n  font-weight: 300;\r\n  text-decoration: none;\r\n  border-radius: 3rem;\r\n  color: #fff;\r\n  transition: background-color 1s, border 1s, color 1s;\r\n}\r\n\r\n.btn:visited {\r\n  background-color: #4FC3F7;\r\n  display: inline-block;\r\n  padding: 10px 30px;\r\n  font-weight: 300;\r\n  text-decoration: none;\r\n  border-radius: 3rem;\r\n  color: #fff;\r\n  transition: background-color 1s, border 1s, color 1s;\r\n}\r\n\r\n.btn:hover , .btn:active {\r\n  background-color: #4FC3C2;\r\n}\r\n\r\n.nav-container {\r\n  width: 1140px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.logo {\r\n  height: 2rem;\r\n  width: auto;\r\n  float: left;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.main-nav {\r\n  /*display: flex;*/\r\n  /*flex-flow: row nowrap;*/\r\n  /*justify-content: flex-end;*/\r\n  float: right;\r\n  list-style: none;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.main-nav li {\r\n  display: inline-block;\r\n  margin-left: 2rem;\r\n}\r\n.main-nav li a {\r\n  padding: .3rem 0;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  font-size: .8rem;\r\n  border-bottom: .1rem solid transparent;\r\n  transition: border-bottem 1s;\r\n}\r\n\r\n.main-nav li a:hover,\r\n.main-nav li a:active{\r\n  border-bottom: .1rem solid #4FC3F7;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"nav-container\">\n    <ul class=\"main-nav\">\n      <li><a (click)=\"scrollToAbout()\">About</a></li>\n      <li><a (click)=\"scrollToContact()\">Contact</a></li>\n      <li><a (click)=\"scrollToProfile()\">Profile</a></li>\n    </ul>\n  </nav>\n  <video id=\"video-background\" autoplay loop>\n    <source src=\"../../assets/img/Hello-World.mp4\" type=\"video/mp4\">\n  </video>\n  <div class=\"hero-text-box\">\n    <h1>Hi, it is Brox Zhang here,<br> welcome to my website.</h1>\n    <a class=\"btn\">Front End Developer</a>\n    <a class=\"btn\">Game Designer</a>\n  </div>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
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

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.scrollToContact = function () {
        var el = document.getElementById("section-contact");
        el.scrollIntoView();
    };
    HeaderComponent.prototype.scrollToProfile = function () {
        var el = document.getElementById("section-profile");
        el.scrollIntoView();
    };
    HeaderComponent.prototype.scrollToAbout = function () {
        var el = document.getElementById("about");
        el.scrollIntoView();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".section-profile {\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100vh;\r\n  width: auto;\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/profile-backgroud.jpg") + ");\r\n  color: #ffffff;\r\n}\r\n\r\nphoto-showcase {\r\n  padding: 0;\r\n}\r\n\r\n.habit-photo-showcase {\r\n  list-style: none;\r\n  width: 100%;\r\n}\r\n.habit-photo-showcase  li{\r\n  display: block;\r\n  float: left;\r\n  width: 25%;\r\n}\r\n\r\n.habit-photo {\r\n  width: 100%;\r\n  height: auto;\r\n  margin: 0;\r\n  overflow: hidden;\r\n  background-color: #000;\r\n}\r\n\r\n.habit-photo img {\r\n  opacity: 0.7;\r\n  width: 100%;\r\n  height: auto;\r\n  -webkit-transform: scale(1.15);\r\n  transform: scale(1.15);\r\n  transition: opacity 0.5s, -webkit-transform 0.5s;\r\n  transition: transform 0.5s, opacity 0.5s;\r\n  transition: transform 0.5s, opacity 0.5s, -webkit-transform 0.5s;\r\n}\r\n\r\n.habit-photo img:hover {\r\n  opacity: 1;\r\n  -webkit-transform: scale(1.03);\r\n  transform: scale(1.03);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section section-profile\" id=\"section-profile\">\n  <div class=\"row\">\n    <h1>Brox Zhang</h1>\n  </div>\n  <div class=\"row\">\n    <div class=\"col span-1-of-3\">\n      broxzhang@gmail.com\n    </div>\n    <div class=\"col span-1-of-3\">\n      438-873-7096\n    </div>\n  </div>\n  <div class=\"row\">\n    <h3>SUMMARY OF QUALIFICATIONS</h3>\n  </div>\n  <div class=\"row\">\n    <div class=\"col span-1-of-3\">\n      \tImplementations\n    </div>\n    <div class=\"col span-1-of-3\">\n      \tNew Product Development\n    </div>\n    <div class=\"col span-1-of-3\">\n      TroublesShooting\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col span-1-of-3\">\n      Unit Testing\n    </div>\n    <div class=\"col span-1-of-3\">\n      \tPerformance Optimization\n    </div>\n     <div class=\"col span-1-of-3\">\n       Problem Solving\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col span-1-of-3\">\n      Application Development\n    </div>\n    <div class=\"col span-1-of-3\">\n      Software Development\n    </div>\n     <div class=\"col span-1-of-3\">\n       Quality Assurance\n    </div>\n  </div>\n  <div class=\"row\">\n    <h3>CAREER-RELATED EXPERIENCE</h3>\n  </div>\n  <div class=\"row\">\n    <div class=\"col span-1-of-2\">\n      Front-end DEVELOPER\n    </div>\n    <div class=\"col span-1-of-2\">\n      AssetScience, Montreal, Quebec\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col span-1-of-2\">\n      WEB DEVELOPER\n    </div>\n    <div class=\"col span-1-of-2\">\n      Book Management (Internship)\n    </div>\n  </div>\n  <div class=\"row\" id=\"about\">\n    <h2>My Habit</h2>\n    <p>\n      I am a gamer, reader and traveller and thinker.\n    </p>\n  </div>\n<div class=\"photo-showcase\">\n  <ul class=\"habit-photo-showcase\">\n    <li>\n      <figure class=\"habit-photo\">\n        <img src=\"../../assets/img/original.jpg\" alt=\"Gaming\">\n      </figure>\n    </li>\n    <li>\n      <figure class=\"habit-photo\">\n        <img src=\"../../assets/img/reading.jpg\" alt=\"Reading\">\n      </figure>\n    </li>\n    <li>\n      <figure class=\"habit-photo\">\n        <img src=\"../../assets/img/travel.jpg\" alt=\"Travelling\">\n      </figure>\n    </li>\n    <li>\n      <figure class=\"habit-photo\">\n        <img src=\"../../assets/img/thinking.jpg\" alt=\"Thinking\">\n      </figure>\n    </li>\n  </ul>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
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

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/img/profile-backgroud.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "profile-backgroud.7ecc5b6166f3b97c661a.jpg";

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




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
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