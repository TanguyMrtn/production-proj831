(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-ion-action-sheet-ios-entry-js"], {
  /***/
  "./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js ***!
    \*****************************************************************************************************/

  /*! exports provided: ion_action_sheet */

  /***/
  function node_modulesIonicAngularNode_modulesIonicCoreDistEsmIonActionSheetIosEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_action_sheet", function () {
      return ActionSheet;
    });
    /* harmony import */


    var _index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-2cd7e630.js */
    "./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm/index-2cd7e630.js");
    /* harmony import */


    var _ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ionic-global-a175fa73.js */
    "./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm/ionic-global-a175fa73.js");
    /* harmony import */


    var _helpers_d8b49b57_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./helpers-d8b49b57.js */
    "./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm/helpers-d8b49b57.js");
    /* harmony import */


    var _animation_f72ade61_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./animation-f72ade61.js */
    "./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm/animation-f72ade61.js");
    /* harmony import */


    var _hardware_back_button_784b7e3c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./hardware-back-button-784b7e3c.js */
    "./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm/hardware-back-button-784b7e3c.js");
    /* harmony import */


    var _overlays_998692a2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./overlays-998692a2.js */
    "./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm/overlays-998692a2.js");
    /* harmony import */


    var _theme_c2dc54d9_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./theme-c2dc54d9.js */
    "./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js");
    /**
     * iOS Action Sheet Enter Animation
     */


    const iosEnterAnimation = baseEl => {
      const baseAnimation = Object(_animation_f72ade61_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      const backdropAnimation = Object(_animation_f72ade61_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      const wrapperAnimation = Object(_animation_f72ade61_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
        'pointer-events': 'none'
      }).afterClearStyles(['pointer-events']);
      wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper')).fromTo('transform', 'translateY(100%)', 'translateY(0%)');
      return baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(400).addAnimation([backdropAnimation, wrapperAnimation]);
    };
    /**
     * iOS Action Sheet Leave Animation
     */


    const iosLeaveAnimation = baseEl => {
      const baseAnimation = Object(_animation_f72ade61_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      const backdropAnimation = Object(_animation_f72ade61_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      const wrapperAnimation = Object(_animation_f72ade61_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
      wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper')).fromTo('transform', 'translateY(0%)', 'translateY(100%)');
      return baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(450).addAnimation([backdropAnimation, wrapperAnimation]);
    };
    /**
     * MD Action Sheet Enter Animation
     */


    const mdEnterAnimation = baseEl => {
      const baseAnimation = Object(_animation_f72ade61_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      const backdropAnimation = Object(_animation_f72ade61_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      const wrapperAnimation = Object(_animation_f72ade61_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
        'pointer-events': 'none'
      }).afterClearStyles(['pointer-events']);
      wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper')).fromTo('transform', 'translateY(100%)', 'translateY(0%)');
      return baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(400).addAnimation([backdropAnimation, wrapperAnimation]);
    };
    /**
     * MD Action Sheet Leave Animation
     */


    const mdLeaveAnimation = baseEl => {
      const baseAnimation = Object(_animation_f72ade61_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      const backdropAnimation = Object(_animation_f72ade61_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      const wrapperAnimation = Object(_animation_f72ade61_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
      wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper')).fromTo('transform', 'translateY(0%)', 'translateY(100%)');
      return baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(450).addAnimation([backdropAnimation, wrapperAnimation]);
    };

    const actionSheetIosCss = ".sc-ion-action-sheet-ios-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-ios-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-button.sc-ion-action-sheet-ios{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-ios{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-ios{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-ios::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}.action-sheet-selected.sc-ion-action-sheet-ios{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-ios:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-ios:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--backdrop-opacity:var(--ion-backdrop-opacity, 0.4);--button-background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent;--button-background-activated:var(--ion-text-color, #000);--button-background-activated-opacity:.08;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-background-selected:var(--ion-background-color, #fff);--button-background-selected-opacity:1;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-400, #999999);text-align:center}.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:auto;margin-right:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:var(--ion-safe-area-bottom, 0)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-container.sc-ion-action-sheet-ios{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-container.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.action-sheet-group.sc-ion-action-sheet-ios{border-radius:13px;margin-bottom:8px}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-group.sc-ion-action-sheet-ios{background-color:transparent;-webkit-backdrop-filter:saturate(280%) blur(20px);backdrop-filter:saturate(280%) blur(20px)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-title.sc-ion-action-sheet-ios,.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8))), -webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background-image:linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%), linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4) 50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 50%);background-repeat:no-repeat;background-position:top, bottom;background-size:100% calc(100% - 1px), 100% 1px;-webkit-backdrop-filter:saturate(120%);backdrop-filter:saturate(120%)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.ion-activated.sc-ion-action-sheet-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.7);background-image:none}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--button-background-selected)}}.action-sheet-title.sc-ion-action-sheet-ios{background:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, transparent)) bottom/100% 1px no-repeat transparent;background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent}.action-sheet-title.sc-ion-action-sheet-ios{padding-left:10px;padding-right:10px;padding-top:14px;padding-bottom:13px;color:var(--color, var(--ion-color-step-400, #999999));font-size:13px;font-weight:400;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-title.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding-left:0;padding-right:0;padding-top:15px;padding-bottom:0;font-size:12px}.action-sheet-button.sc-ion-action-sheet-ios{padding-left:18px;padding-right:18px;padding-top:18px;padding-bottom:18px;height:56px;font-size:20px;contain:strict}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:18px;padding-inline-start:18px;-webkit-padding-end:18px;padding-inline-end:18px}}.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:0.1em;font-size:28px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:unset;-webkit-margin-end:0.1em;margin-inline-end:0.1em}}.action-sheet-button.sc-ion-action-sheet-ios:last-child{background-image:none}.action-sheet-selected.sc-ion-action-sheet-ios{font-weight:bold}.action-sheet-cancel.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-cancel.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-destructive.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-activated.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-focused.sc-ion-action-sheet-ios{color:var(--ion-color-danger, #eb445a)}@media (any-hover: hover){.action-sheet-destructive.sc-ion-action-sheet-ios:hover{color:var(--ion-color-danger, #eb445a)}}";
    const actionSheetMdCss = ".sc-ion-action-sheet-md-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-wrapper.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-button.sc-ion-action-sheet-md{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-md::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}.action-sheet-selected.sc-ion-action-sheet-md{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-md::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-md:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-md:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);--button-background:transparent;--button-background-selected:currentColor;--button-background-selected-opacity:0;--button-background-activated:transparent;--button-background-activated-opacity:0;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-color:var(--ion-color-step-850, #262626);--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54)}.action-sheet-title.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:20px;padding-bottom:17px;height:60px;color:var(--color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54));font-size:16px;text-align:start}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-title.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:14px}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:0}.action-sheet-button.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;position:relative;height:52px;font-size:16px;text-align:start;contain:strict;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-icon.sc-ion-action-sheet-md{padding-bottom:4px;margin-left:0;margin-right:32px;margin-top:0;margin-bottom:0;color:var(--color);font-size:24px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-icon.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px}}.action-sheet-button-inner.sc-ion-action-sheet-md{-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:bold}";
    const ActionSheet = class {
      constructor(hostRef) {
        Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.presented = false;
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */

        this.keyboardClose = true;
        /**
         * An array of buttons for the action sheet.
         */

        this.buttons = [];
        /**
         * If `true`, the action sheet will be dismissed when the backdrop is clicked.
         */

        this.backdropDismiss = true;
        /**
         * If `true`, the action sheet will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */

        this.translucent = false;
        /**
         * If `true`, the action sheet will animate.
         */

        this.animated = true;

        this.onBackdropTap = () => {
          this.dismiss(undefined, _overlays_998692a2_js__WEBPACK_IMPORTED_MODULE_5__["B"]);
        };

        this.dispatchCancelHandler = ev => {
          const role = ev.detail.role;

          if (Object(_overlays_998692a2_js__WEBPACK_IMPORTED_MODULE_5__["i"])(role)) {
            const cancelButton = this.getButtons().find(b => b.role === 'cancel');
            this.callButtonHandler(cancelButton);
          }
        };

        Object(_overlays_998692a2_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this.el);
        this.didPresent = Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionActionSheetDidPresent", 7);
        this.willPresent = Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionActionSheetWillPresent", 7);
        this.willDismiss = Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionActionSheetWillDismiss", 7);
        this.didDismiss = Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionActionSheetDidDismiss", 7);
      }
      /**
       * Present the action sheet overlay after it has been created.
       */


      present() {
        return Object(_overlays_998692a2_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this, 'actionSheetEnter', iosEnterAnimation, mdEnterAnimation);
      }
      /**
       * Dismiss the action sheet overlay after it has been presented.
       *
       * @param data Any data to emit in the dismiss events.
       * @param role The role of the element that is dismissing the action sheet.
       * This can be useful in a button handler for determining which button was
       * clicked to dismiss the action sheet.
       * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
       */


      dismiss(data, role) {
        return Object(_overlays_998692a2_js__WEBPACK_IMPORTED_MODULE_5__["f"])(this, data, role, 'actionSheetLeave', iosLeaveAnimation, mdLeaveAnimation);
      }
      /**
       * Returns a promise that resolves when the action sheet did dismiss.
       */


      onDidDismiss() {
        return Object(_overlays_998692a2_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.el, 'ionActionSheetDidDismiss');
      }
      /**
       * Returns a promise that resolves when the action sheet will dismiss.
       *
       */


      onWillDismiss() {
        return Object(_overlays_998692a2_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.el, 'ionActionSheetWillDismiss');
      }

      async buttonClick(button) {
        const role = button.role;

        if (Object(_overlays_998692a2_js__WEBPACK_IMPORTED_MODULE_5__["i"])(role)) {
          return this.dismiss(undefined, role);
        }

        const shouldDismiss = await this.callButtonHandler(button);

        if (shouldDismiss) {
          return this.dismiss(undefined, button.role);
        }

        return Promise.resolve();
      }

      async callButtonHandler(button) {
        if (button) {
          // a handler has been provided, execute it
          // pass the handler the values from the inputs
          const rtn = await Object(_overlays_998692a2_js__WEBPACK_IMPORTED_MODULE_5__["s"])(button.handler);

          if (rtn === false) {
            // if the return value of the handler is false then do not dismiss
            return false;
          }
        }

        return true;
      }

      getButtons() {
        return this.buttons.map(b => {
          return typeof b === 'string' ? {
            text: b
          } : b;
        });
      }

      render() {
        const mode = Object(_ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
        const allButtons = this.getButtons();
        const cancelButton = allButtons.find(b => b.role === 'cancel');
        const buttons = allButtons.filter(b => b.role !== 'cancel');
        return Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
          role: "dialog",
          "aria-modal": "true",
          style: {
            zIndex: "".concat(20000 + this.overlayIndex)
          },
          class: Object.assign(Object.assign({
            [mode]: true
          }, Object(_theme_c2dc54d9_js__WEBPACK_IMPORTED_MODULE_6__["g"])(this.cssClass)), {
            'action-sheet-translucent': this.translucent
          }),
          onIonActionSheetWillDismiss: this.dispatchCancelHandler,
          onIonBackdropTap: this.onBackdropTap
        }, Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", {
          tappable: this.backdropDismiss
        }), Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "action-sheet-wrapper",
          role: "dialog"
        }, Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "action-sheet-container"
        }, Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "action-sheet-group"
        }, this.header !== undefined && Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "action-sheet-title"
        }, this.header, this.subHeader && Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "action-sheet-sub-title"
        }, this.subHeader)), buttons.map(b => Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
          type: "button",
          class: buttonClass(b),
          onClick: () => this.buttonClick(b)
        }, Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
          class: "action-sheet-button-inner"
        }, b.icon && Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
          icon: b.icon,
          lazy: false,
          class: "action-sheet-icon"
        }), b.text), mode === 'md' && Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null)))), cancelButton && Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "action-sheet-group action-sheet-group-cancel"
        }, Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
          type: "button",
          class: buttonClass(cancelButton),
          onClick: () => this.buttonClick(cancelButton)
        }, Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
          class: "action-sheet-button-inner"
        }, cancelButton.icon && Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
          icon: cancelButton.icon,
          lazy: false,
          class: "action-sheet-icon"
        }), cancelButton.text), mode === 'md' && Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null))))));
      }

      get el() {
        return Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
      }

    };

    const buttonClass = button => {
      return Object.assign({
        'action-sheet-button': true,
        'ion-activatable': true,
        'ion-focusable': true,
        ["action-sheet-".concat(button.role)]: button.role !== undefined
      }, Object(_theme_c2dc54d9_js__WEBPACK_IMPORTED_MODULE_6__["g"])(button.cssClass));
    };

    ActionSheet.style = {
      /*STENCIL:MODE:ios*/
      ios: actionSheetIosCss,

      /*STENCIL:MODE:md*/
      md: actionSheetMdCss
    };
    /***/
  }
}]);
//# sourceMappingURL=stencil-ion-action-sheet-ios-entry-js-es5.js.map