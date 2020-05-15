(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"isDesktop\" class=\"desktop\">\r\n  <ion-header mode=\"ios\">\r\n    <ion-toolbar>\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"2\">\r\n          <ion-icon class=\"icon-calendar\" name=\"today-outline\"></ion-icon>\r\n        </ion-col>\r\n        <ion-title text-center color=\"light\">Bienvenue sur Polytech'App</ion-title>\r\n      </ion-row>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-router-outlet class=\"desktop-wrapper\"></ion-router-outlet>\r\n</div>\r\n \r\n<ion-content padding>\r\n  <form [formGroup]=\"credentialsForm\" (ngSubmit)=\"onSubmit()\">\r\n    <ion-grid>\r\n      <ion-row justify-content-center>\r\n        <ion-col align-self-center>\r\n          <div text-center>\r\n            <h4 class=\"ion-text-center\">Connexion</h4>\r\n          </div>\r\n          <div padding>\r\n            \r\n            <ion-item>\r\n              <ion-input type=\"email\" formControlName=\"email\" placeholder=\"Adresse email\"></ion-input>\r\n            </ion-item>\r\n    \r\n            <ion-item>\r\n              <ion-input type=\"password\" formControlName=\"password\" placeholder=\"Mot de passe\"></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-button shape=\"round\" size=\"medium\" expand=\"block\" type=\"submit\" [disabled]=\"!credentialsForm.valid\">Se connecter</ion-button>\r\n          </div>\r\n\r\n          <div text-center>\r\n            <ion-item routerLink=\"/register\" routerLinkActive=\"active\">\r\n              <ion-text>\r\n                <h6 class=\"underline\">Pas encore de compte ?</h6>\r\n              </ion-text>\r\n            </ion-item>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    const routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }];
    let LoginPageModule = class LoginPageModule {};
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  background: #dfdfdf;\n}\n\nion-grid {\n  width: 80%;\n  height: 100%;\n}\n\nion-row {\n  height: 50%;\n}\n\nion-button {\n  margin-top: 30px;\n  font-weight: 200;\n}\n\n.underline {\n  text-decoration: underline;\n  text-align: center;\n}\n\n@media (min-width: 240px) and (max-width: 768px) {\n  ion-grid {\n    background: #fff;\n    margin-left: 5%;\n  }\n\n  ion-col {\n    border: none;\n  }\n}\n\n.desktop ion-router-outlet {\n  margin-top: 56px;\n  margin-bottom: 56px;\n}\n\n.desktop .logo {\n  max-height: 40px;\n}\n\n.desktop ion-toolbar {\n  --background: #374168;\n}\n\n.desktop .link {\n  --color: var(--ion-color-light);\n}\n\n.desktop .active-link {\n  --color: var(--ion-color-primary);\n}\n\nion-header ion-button {\n  margin-top: 10px;\n}\n\nion-header ion-icon {\n  margin-left: 20px;\n  height: 40px;\n  width: 40px;\n  color: #fff;\n  margin-right: 20px;\n}\n\nion-header .icon-logout {\n  float: right;\n}\n\nion-header .button-logout {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRDpcXENvdXJzXFxTZW1lc3RyZSA4XFxQUk9KODMxXFxwcm9qZXRcXGFwcC9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLG1CQUFBO0FDRko7O0FES0E7RUFDSSxVQUFBO0VBQ0EsWUFSUTtBQ01aOztBREtBO0VBQ0ksV0FBQTtBQ0ZKOztBRFVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ1BKOztBRFVBO0VBQ0ksMEJBQUE7RUFDQSxrQkFBQTtBQ1BKOztBRFVBO0VBQ0k7SUFDSSxnQkFqQ007SUFrQ04sZUFBQTtFQ1BOOztFRFNFO0lBQ0ksWUFBQTtFQ05OO0FBQ0Y7O0FEVUk7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDUk47O0FEV0k7RUFDRSxnQkFBQTtBQ1ROOztBRFlJO0VBQ0UscUJBQUE7QUNWTjs7QURhSTtFQUNFLCtCQUFBO0FDWE47O0FEY0k7RUFDRSxpQ0FBQTtBQ1pOOztBRGlCSTtFQUNJLGdCQUFBO0FDZFI7O0FEaUJJO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2ZSOztBRGlCSTtFQUNJLFlBQUE7QUNmUjs7QURpQkk7RUFDSSxZQUFBO0FDZlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkd2hpdGUtY29sb3I6ICNmZmY7XHJcbiRoZWlnaHQxMDA6IDEwMCU7XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGZkZmRmO1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgICBoZWlnaHQ6ICRoZWlnaHQxMDA7XHJcbn1cclxuXHJcbmlvbi1yb3cge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi8vIGlvbi1jb2wge1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgIzQ4OGFmZjtcclxuLy8gICAgIGJhY2tncm91bmQ6ICR3aGl0ZS1jb2xvcjtcclxuLy8gfVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG5cclxuLnVuZGVybGluZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMjQwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgaW9uLWdyaWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZS1jb2xvcjtcclxuICAgICAgICBtYXJnaW4tbGVmdCA6IDUlO1xyXG4gICAgfVxyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGVza3RvcCB7XHJcbiAgICBpb24tcm91dGVyLW91dGxldCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDU2cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDU2cHg7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLmxvZ28ge1xyXG4gICAgICBtYXgtaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICBcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjMzc0MTY4O1xyXG4gICAgfVxyXG4gICBcclxuICAgIC5saW5rIHtcclxuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIH1cclxuICAgXHJcbiAgICAuYWN0aXZlLWxpbmsge1xyXG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuaWNvbi1sb2dvdXR7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbi1sb2dvdXR7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxuICAgIH1cclxufSIsImlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2RmZGZkZjtcbn1cblxuaW9uLWdyaWQge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1yb3cge1xuICBoZWlnaHQ6IDUwJTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi51bmRlcmxpbmUge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMjQwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICBpb24tZ3JpZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gIH1cblxuICBpb24tY29sIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbn1cbi5kZXNrdG9wIGlvbi1yb3V0ZXItb3V0bGV0IHtcbiAgbWFyZ2luLXRvcDogNTZweDtcbiAgbWFyZ2luLWJvdHRvbTogNTZweDtcbn1cbi5kZXNrdG9wIC5sb2dvIHtcbiAgbWF4LWhlaWdodDogNDBweDtcbn1cbi5kZXNrdG9wIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMzc0MTY4O1xufVxuLmRlc2t0b3AgLmxpbmsge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuLmRlc2t0b3AgLmFjdGl2ZS1saW5rIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24taGVhZGVyIGlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuaW9uLWhlYWRlciBpb24taWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuaW9uLWhlYWRlciAuaWNvbi1sb2dvdXQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5pb24taGVhZGVyIC5idXR0b24tbG9nb3V0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_screensize_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/screensize.service */
    "./src/app/services/screensize.service.ts");

    let LoginPage = class LoginPage {
      constructor(formBuilder, authService, screensizeService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.screensizeService = screensizeService;
        this.screensizeService.isDesktopView().subscribe(isDesktop => {
          if (this.isDesktop && !isDesktop) {
            // Reload because our routing is out of place
            window.location.reload();
          }

          this.isDesktop = isDesktop;
        });
      }

      ngOnInit() {
        this.credentialsForm = this.formBuilder.group({
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
      }

      onSubmit() {
        this.authService.login(this.credentialsForm.value).subscribe();
      }

    };

    LoginPage.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
    }, {
      type: _services_screensize_service__WEBPACK_IMPORTED_MODULE_4__["ScreensizeService"]
    }];

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_screensize_service__WEBPACK_IMPORTED_MODULE_4__["ScreensizeService"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map