(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notes-manager-notes-manager-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/notes-manager/notes-manager.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notes-manager/notes-manager.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotesManagerNotesManagerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"isDesktop\" class=\"desktop\">\r\n  <ion-header mode=\"ios\">\r\n    <ion-toolbar>\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"2\">\r\n          <ion-icon class=\"icon-calendar\" name=\"today-outline\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"8\">\r\n          <div class=\"navbar\" class=\"ion-text-center\">\r\n            <ion-button fill=\"clear\" routerLink=\"/time-manager\" routerDirection=\"root\" routerLinkActive=\"active-link\"\r\n              class=\"link\">\r\n              Calendar\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" routerLink=\"/notes-manager\" routerDirection=\"root\" routerLinkActive=\"active-link\"\r\n              class=\"link\">\r\n              Notes\r\n            </ion-button>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\">\r\n          <ion-button class=\"button-logout\" fill=\"clear\" (click) =\"logout()\">\r\n            <ion-icon class=\"icon-logout\" name=\"log-out-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-router-outlet class=\"desktop-wrapper\"></ion-router-outlet>\r\n  </div>\r\n\r\n\r\n<ion-content *ngIf=\"ListeUE\">\r\n  <ion-card *ngFor= \"let ue of ListeUE\"> \r\n      <ion-card-header tappable (click)=\"clickOn(ue)\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"4\">\r\n              <ion-card-title>{{ue.name}}</ion-card-title>\r\n            </ion-col>\r\n            <ion-col size=\"5\"><canvas #barChart class=\"{{'barChartHeader' + ue.name}}\" height=\"90\" width=\"400\"></canvas></ion-col>\r\n            <ion-col size=\"1\">\r\n              <ion-card-title>43</ion-card-title>\r\n            </ion-col>\r\n            <ion-col size=\"1\">\r\n              <ion-card-title>12,6</ion-card-title>\r\n            </ion-col>\r\n            <ion-col size=\"1\">\r\n              <ion-card-title>11,43</ion-card-title>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n      </ion-card-header> \r\n      <ion-card-content [id]=\"ue.name\" [hidden]=\"!ue.visible\" >\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"1\"></ion-col>\r\n                <ion-col size=\"4\">\r\n                    <canvas #barPlot class=\"{{'barChart' + ue.name}}\"></canvas>\r\n                </ion-col>\r\n                <ion-col size=\"2\"></ion-col>\r\n                <ion-col size=\"4\">\r\n                    <canvas #horPlot class=\"{{'horChart' + ue.name}}\"></canvas>\r\n                </ion-col>\r\n                \r\n            </ion-row>\r\n          </ion-grid>\r\n\r\n\r\n      </ion-card-content>\r\n  </ion-card> \r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/notes-manager/notes-manager-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/notes-manager/notes-manager-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: NotesManagerPageRoutingModule */

  /***/
  function srcAppNotesManagerNotesManagerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotesManagerPageRoutingModule", function () {
      return NotesManagerPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _notes_manager_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notes-manager.page */
    "./src/app/notes-manager/notes-manager.page.ts");

    const routes = [{
      path: '',
      component: _notes_manager_page__WEBPACK_IMPORTED_MODULE_3__["NotesManagerPage"]
    }];
    let NotesManagerPageRoutingModule = class NotesManagerPageRoutingModule {};
    NotesManagerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NotesManagerPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/notes-manager/notes-manager.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/notes-manager/notes-manager.module.ts ***!
    \*******************************************************/

  /*! exports provided: NotesManagerPageModule */

  /***/
  function srcAppNotesManagerNotesManagerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotesManagerPageModule", function () {
      return NotesManagerPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _notes_manager_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./notes-manager-routing.module */
    "./src/app/notes-manager/notes-manager-routing.module.ts");
    /* harmony import */


    var _notes_manager_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./notes-manager.page */
    "./src/app/notes-manager/notes-manager.page.ts");

    const routes = [{
      path: '/notes-manager',
      component: _notes_manager_page__WEBPACK_IMPORTED_MODULE_7__["NotesManagerPage"]
    }];
    let NotesManagerPageModule = class NotesManagerPageModule {};
    NotesManagerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notes_manager_routing_module__WEBPACK_IMPORTED_MODULE_6__["NotesManagerPageRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
      declarations: [_notes_manager_page__WEBPACK_IMPORTED_MODULE_7__["NotesManagerPage"]]
    })], NotesManagerPageModule);
    /***/
  },

  /***/
  "./src/app/notes-manager/notes-manager.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/notes-manager/notes-manager.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotesManagerNotesManagerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-button {\n  margin-top: 30px;\n  font-weight: 200;\n}\n\nion-progress-bar {\n  margin-top: 10px;\n  margin-bottom: 30px;\n}\n\n.insights-todo-title {\n  font-size: 1.3em;\n}\n\n.progression {\n  float: right;\n  font-size: 1.3em;\n}\n\n.label-todo {\n  font-size: 20px;\n  color: black;\n}\n\n.button-todo {\n  position: relative;\n  margin-bottom: 15px;\n  width: 40px;\n  height: 40px;\n  background-color: white;\n}\n\n.icon-todo {\n  width: 40px;\n  height: 40px;\n  color: #696969;\n}\n\nion-header ion-button {\n  margin-top: 10px;\n}\n\nion-header ion-icon {\n  margin-left: 20px;\n  height: 40px;\n  width: 40px;\n  color: #fff;\n  margin-right: 20px;\n}\n\nion-header .icon-logout {\n  float: right;\n}\n\nion-header .button-logout {\n  float: right;\n}\n\n.desktop ion-router-outlet {\n  margin-top: 56px;\n  margin-bottom: 56px;\n}\n\n.desktop .logo {\n  max-height: 40px;\n}\n\n.desktop ion-toolbar {\n  --background: #374168;\n}\n\n.desktop .link {\n  --color: var(--ion-color-light);\n}\n\n.desktop .active-link {\n  --color: var(--ion-color-primary);\n}\n\n.footer {\n  width: 100%;\n  color: #fff;\n  font-weight: bold;\n  background: #374168;\n  height: 56px;\n  line-height: 56px;\n  text-align: center;\n  position: fixed;\n  bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZXMtbWFuYWdlci9EOlxcQ291cnNcXFNlbWVzdHJlIDhcXFBST0o4MzFcXHByb2pldFxcYXBwL3NyY1xcYXBwXFxub3Rlcy1tYW5hZ2VyXFxub3Rlcy1tYW5hZ2VyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbm90ZXMtbWFuYWdlci9ub3Rlcy1tYW5hZ2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDRUY7O0FERUk7RUFDSSxnQkFBQTtBQ0NSOztBREVJO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0FSOztBREVJO0VBQ0ksWUFBQTtBQ0FSOztBREVJO0VBQ0ksWUFBQTtBQ0FSOztBRE1JO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0hOOztBRE1JO0VBQ0UsZ0JBQUE7QUNKTjs7QURPSTtFQUNFLHFCQUFBO0FDTE47O0FEUUk7RUFDRSwrQkFBQTtBQ05OOztBRFNJO0VBQ0UsaUNBQUE7QUNQTjs7QURXRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL25vdGVzLW1hbmFnZXIvbm90ZXMtbWFuYWdlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcblxyXG5pb24tcHJvZ3Jlc3MtYmFyIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5pbnNpZ2h0cy10b2RvLXRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMS4zZW07XHJcbn1cclxuLnByb2dyZXNzaW9ue1xyXG4gIGZsb2F0IDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxufVxyXG5cclxuLmxhYmVsLXRvZG97XHJcbiAgZm9udC1zaXplOjIwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uYnV0dG9uLXRvZG97XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbToxNXB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuLmljb24tdG9kb3tcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgY29sb3I6ICM2OTY5Njk7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmljb24tbG9nb3V0e1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICAgIC5idXR0b24tbG9nb3V0e1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi5kZXNrdG9wIHtcclxuICAgIGlvbi1yb3V0ZXItb3V0bGV0IHtcclxuICAgICAgbWFyZ2luLXRvcDogNTZweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNTZweDtcclxuICAgIH1cclxuICAgXHJcbiAgICAubG9nbyB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICMzNzQxNjg7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLmxpbmsge1xyXG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgfVxyXG4gICBcclxuICAgIC5hY3RpdmUtbGluayB7XHJcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIH1cclxuICB9XHJcbiAgIFxyXG4gIC5mb290ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZDogIzM3NDE2ODtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgfSIsImlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG5pb24tcHJvZ3Jlc3MtYmFyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmluc2lnaHRzLXRvZG8tdGl0bGUge1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuXG4ucHJvZ3Jlc3Npb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59XG5cbi5sYWJlbC10b2RvIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5idXR0b24tdG9kbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5pY29uLXRvZG8ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogIzY5Njk2OTtcbn1cblxuaW9uLWhlYWRlciBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmlvbi1oZWFkZXIgaW9uLWljb24ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbmlvbi1oZWFkZXIgLmljb24tbG9nb3V0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuaW9uLWhlYWRlciAuYnV0dG9uLWxvZ291dCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmRlc2t0b3AgaW9uLXJvdXRlci1vdXRsZXQge1xuICBtYXJnaW4tdG9wOiA1NnB4O1xuICBtYXJnaW4tYm90dG9tOiA1NnB4O1xufVxuLmRlc2t0b3AgLmxvZ28ge1xuICBtYXgtaGVpZ2h0OiA0MHB4O1xufVxuLmRlc2t0b3AgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMzNzQxNjg7XG59XG4uZGVza3RvcCAubGluayB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4uZGVza3RvcCAuYWN0aXZlLWxpbmsge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiAjMzc0MTY4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/notes-manager/notes-manager.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/notes-manager/notes-manager.page.ts ***!
    \*****************************************************/

  /*! exports provided: NotesManagerPage */

  /***/
  function srcAppNotesManagerNotesManagerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotesManagerPage", function () {
      return NotesManagerPage;
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


    var _services_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/notes.service */
    "./src/app/services/notes.service.ts");
    /* harmony import */


    var _services_screensize_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/screensize.service */
    "./src/app/services/screensize.service.ts");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_4__);

    let NotesManagerPage = class NotesManagerPage {
      constructor(screensizeService, notesService) {
        this.screensizeService = screensizeService;
        this.notesService = notesService;
        this.screensizeService.isDesktopView().subscribe(isDesktop => {
          if (this.isDesktop && !isDesktop) {
            // Reload because our routing is out of place
            window.location.reload();
          }

          this.isDesktop = isDesktop;
        });
      } // ionViewDidEnter() {
      // 	this.createBarChart();
      // 	this.createHorChart();
      // 	this.createboxplot();
      // }
      //@ViewChild('boxPlot',{static: false}) boxPlot;


      clickOn(ue) {
        // this.createboxplot();
        for (var i = 0; i < this.ListeUE.length; i++) {
          if (ue.name === this.ListeUE[i]["name"]) {
            this.ListeUE[i]["visible"] = true;
          } else {
            this.ListeUE[i]["visible"] = false;
          }
        }

        this.createboxplot(ue.name);
      }

      createHorChart(ue, semestreContent) {
        var coursesNames = [];
        var coursesDetails = [{
          label: 'TP',
          data: [],
          backgroundColor: '#FF1C14',
          borderColor: '#FF1C14',
          borderWidth: 1
        }, {
          label: 'TD',
          data: [],
          backgroundColor: '#3036FF',
          borderColor: '#3036FF',
          borderWidth: 1
        }, {
          label: 'CM',
          data: [],
          backgroundColor: "#FFDC4A",
          borderColor: "#FFDC4A",
          borderWidth: 1
        }, {
          label: 'Autre',
          data: [],
          backgroundColor: "#2BFF76",
          borderColor: "#2BFF76",
          borderWidth: 1
        }];

        for (var element in semestreContent) {
          var ueContent = semestreContent[element];
          coursesNames.push(ueContent["cours"]);
          coursesDetails[0]["data"].push(ueContent["TP"]);
          coursesDetails[1]["data"].push(ueContent["TD"]);
          coursesDetails[2]["data"].push(ueContent["CM"]);
          coursesDetails[3]["data"].push(ueContent["Autre"]);
        }

        var ctx = document.getElementsByClassName("horChart" + ue)[0];
        new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](ctx, {
          type: 'bar',
          data: {
            labels: coursesNames,
            datasets: coursesDetails
          },
          options: {
            scales: {
              xAxes: [{
                stacked: true
              }],
              yAxes: [{
                stacked: true
              }]
            }
          }
        });
      }

      createboxplot(ue) {
        var ctx = document.getElementsByClassName("barChart" + ue)[0];
        new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](ctx, {
          type: "bar",
          data: {
            labels: ['Data1', 'Data2', 'Data3'],
            datasets: [{
              label: "min",
              backgroundColor: "rgba(240, 140, 121, 0.0)",
              borderColor: "rgba(140, 140, 140, 0.0)",
              borderWidth: 0,
              data: [10, 2, 5]
            }, {
              label: "avg",
              backgroundColor: "rgba(240, 140, 121, 0.8)",
              borderColor: "rgba(140, 140, 140, 1.0)",
              data: [12, 8, 10]
            }, {
              label: "max",
              backgroundColor: "rgba(121, 200, 121, 0.8)",
              borderColor: "rgba(140, 140, 140, 0.0)",
              borderWidth: 0,
              data: [17, 15, 16]
            }, {
              label: 'Avg Student',
              data: [15.5, 17, 20],
              type: 'line'
            }]
          },
          options: {
            tooltips: {
              mode: 'index',
              intersect: false,
              displayColors: false
            },
            responsive: true,
            scales: {
              xAxes: [{
                stacked: true
              }],
              yAxes: [{
                stacked: false
              }]
            }
          }
        });
      }

      getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';

        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
      }

      createBarChart(ue, semestreContent) {
        var allCourses = [];
        console.log(semestreContent);

        for (var element in semestreContent) {
          var ueContent = semestreContent[element];
          var oneCours = {};
          oneCours["label"] = ueContent["cours"];
          let tpNumber = 0;
          let other = 0;
          let tdNumber = 0;
          let cmNumber = 0;

          if (ueContent["TP"]) {
            tpNumber = ueContent["TP"];
          }

          if (ueContent["Autre"]) {
            other = ueContent["Autre"];
          }

          if (ueContent["TD"]) {
            tdNumber = ueContent["TD"];
          }

          if (ueContent["CM"]) {
            cmNumber = ueContent["CM"];
          }

          let sum = tpNumber + other + tdNumber + cmNumber;
          oneCours["data"] = [sum];
          oneCours["backgroundColor"] = this.getRandomColor();
          console.log(oneCours);
          allCourses.push(oneCours);
        }

        var ctx = document.getElementsByClassName("barChartHeader" + ue)[0];
        new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](ctx, {
          type: 'horizontalBar',
          data: {
            labels: ["Nombre d'heures"],
            datasets: allCourses
          },
          options: {
            responsive: true,
            legend: {
              position: 'bottom'
            },
            scales: {
              yAxes: [{
                stacked: true,
                gridLines: {
                  display: false
                },
                ticks: {
                  beginAtZero: true
                }
              }],
              xAxes: [{
                stacked: true,
                gridLines: {
                  display: false
                }
              }]
            }
          }
        });
      }

      ngOnInit() {
        this.notesService.getStructure().then(res => {
          let ueSemestre = res[0]["Semestre8"];
          var test = [];

          for (var propertyName in ueSemestre) {
            let temp = {};
            temp["name"] = propertyName;
            temp["visible"] = false;
            test.push(temp);
          }

          this.ListeUE = test;
        });
      }

      ngAfterViewInit() {
        this.notesService.getStructure().then(res => {
          let ueSemestre = res[0]["Semestre8"];
          var test = [];

          for (var propertyName in ueSemestre) {
            this.createBarChart(propertyName, ueSemestre[propertyName]);
            this.createHorChart(propertyName, ueSemestre[propertyName]);
          }
        });
      }

    };

    NotesManagerPage.ctorParameters = () => [{
      type: _services_screensize_service__WEBPACK_IMPORTED_MODULE_3__["ScreensizeService"]
    }, {
      type: _services_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barPlot', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NotesManagerPage.prototype, "barPlot", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('horPlot', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NotesManagerPage.prototype, "horPlot", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barChart', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NotesManagerPage.prototype, "barChart", void 0);
    NotesManagerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notes-manager',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notes-manager.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/notes-manager/notes-manager.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notes-manager.page.scss */
      "./src/app/notes-manager/notes-manager.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_screensize_service__WEBPACK_IMPORTED_MODULE_3__["ScreensizeService"], _services_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"]])], NotesManagerPage);
    /***/
  },

  /***/
  "./src/app/services/notes.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/notes.service.ts ***!
    \*******************************************/

  /*! exports provided: NotesService */

  /***/
  function srcAppServicesNotesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotesService", function () {
      return NotesService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    let NotesService = class NotesService {
      constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
      }

      getStructure() {
        // this.authService.checkToken();
        const userID = this.authService.user['id']; // console.log(userID);

        return new Promise((resolve, reject) => {
          this.http.get("".concat(this.url, "/api/getStructure/").concat(userID)).subscribe(res => {
            resolve(res);
          });
        });
      }

    };

    NotesService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
    }];

    NotesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], NotesService);
    /***/
  }
}]);
//# sourceMappingURL=notes-manager-notes-manager-module-es5.js.map