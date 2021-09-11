(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-module"], {
    /***/
    "0Pcf": function Pcf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);

          this.age = new Date().getFullYear() - 1993;
          this.years_of_working = new Date().getFullYear() - 2014;
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onGoToSection",
          value: function onGoToSection(element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest"
            });
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 224,
        vars: 2,
        consts: [[1, "relative", "sm:absolute", "w-full", "top-0", "lg:top-12"], ["home", ""], [1, "container", "flex", "items-center", "justify-center", "bg-grey", "md:bg-transparent", "px-6", "py-4"], [1, ""], ["src", "../../../assets/images/rm.png", "alt", "", "id", "logo"], [1, "hidden", "sm:flex", "flex-1", "justify-end", "gap-12"], ["routerLink", "/", "routerLinkActive", "text-primary font-bold", 1, "text-white", "text-md", "cursor-pointer"], [1, "text-white", "text-md", "cursor-pointer", 3, "click"], [1, "flex", "flex-1", "justify-end", "sm:hidden"], ["aria-hidden", "true", 1, "text-white", "text-base", "fa", "fa-bars"], [1, "flex", "items-center", "bg-grey", "py-12", "lg:py-20", "lg:h-screen"], [1, "max-w-7xl", "mx-auto", "flex", "flex-col-reverse", "lg:flex-row", "gap-8", "lg:gap-24", "text-white", "px-6"], [1, "flex", "flex-col", "w-auto", "lg:w-1/2"], [1, "heading"], [1, "font-nexa-bold", "text-2xl", "sm:text-3xl", "md:text-4xlleading-relaxed", "tracking-widest", "mb-1"], [1, "text-xl", "sm:text-2xl", "mb-6", "lg:mb-10"], [1, "mb-6"], [1, "flex", "flex-row", "flex-wrap", "gap-8", "mb-6"], ["href", "https://www.facebook.com/reginald.mabanta/", "target", "_blank"], ["aria-hidden", "true", 1, "text-xl", "fa", "fa-facebook"], ["href", "https://www.instagram.com/egieegie/", "target", "_blank"], ["aria-hidden", "true", 1, "text-xl", "fa", "fa-instagram"], ["href", "https://www.linkedin.com/in/reginald-mabanta-641727111", "target", "_blank"], ["aria-hidden", "true", 1, "text-xl", "fa", "fa-linkedin"], ["href", "https://github.com/egiev", "target", "_blank"], ["aria-hidden", "true", 1, "text-xl", "fa", "fa-github"], [1, "text-primary", "font-nexa-bold", "text-xl", "no-underline", "cursor-pointer", 3, "click"], [1, "ml-3", "fa", "fa-arrow-right"], [1, "flex", "flex-col", "items-center", "justify-center", "w-auto", "lg:w-1/2"], ["src", "../../../assets/images/svg/banner-logo.svg", "alt", "", 1, "w-auto", "sm:max-w-lg", "lg:w-auto", "mx-auto", "mb-10", "sm:my-20", "lg:my-0"], [1, "bg-light-grey", "py-12", "lg:py-20", "text-white"], ["profile", ""], [1, "container", "flex", "flex-col", "lg:flex-row", "gap-8", "lg:gap-24", "px-6"], [1, "flex"], ["src", "../../../assets/images/egie.png", "alt", "", 1, "w-auto", "sm:max-w-xs"], [1, "flex", "flex-col"], [1, "text-xl", "sm:text-2xl", "lg:text-3xl", "mb-6", "lg:mb-8"], [1, "text-primary", "font-nexa-bold", "text-xl", "no-underline", "mt-8", "cursor-pointer", 3, "click"], [1, "bg-grey", "py-12", "lg:py-20"], [1, "w-auto", "sm:w-4/5", "lg:w-3/5", "mx-auto", "px-6", "text-white", "text-center"], [1, "font-nexa-bold", "text-xl", "sm:text-2xl", "lg:text-3xl", "mb-2"], [1, "text-primary"], [1, "mb-12"], [1, "flex", "flex-wrap", "items-center", "justify-center", "gap-8", "mb-12"], [1, "w-14", "md:w-28", "flex", "flex-col", "items-center", "justify-center", "text-center"], ["src", "../../../assets/images/svg/html5.svg", "alt", "", 1, "w-8", "md:w-14", "mb-3"], ["src", "../../../assets/images/svg/css3.svg", "alt", "", 1, "w-8", "md:w-14", "mb-3"], ["src", "../../../assets/images/svg/javascript.svg", "alt", "", 1, "w-8", "md:w-14", "mb-3"], ["src", "../../../assets/images/svg/typescript.svg", "alt", "", 1, "w-8", "md:w-14", "mb-3"], ["src", "../../../assets/images/svg/angular.svg", "alt", "", 1, "w-8", "md:w-14", "mb-3"], ["src", "../../../assets/images/svg/react.svg", "alt", "", 1, "w-8", "md:w-14", "mb-3"], ["src", "../../../assets/images/svg/redux.svg", "alt", "", 1, "w-14", "mb-3"], ["src", "../../../assets/images/svg/rxjs.svg", "alt", "", 1, "w-8", "md:w-14", "mb-3"], ["src", "../../../assets/images/svg/ngrx.svg", "alt", "", 1, "w-8", "md:w-14", "mb-3"], ["src", "../../../assets/images/svg/sass.svg", "alt", "", 1, "w-8", "md:w-14", "mb-3"], ["src", "../../../assets/images/svg/tailwindcss.svg", "alt", "", 1, "w-8", "md:w-14", "mb-3"], ["src", "../../../assets/images/svg/bootstrap.svg", "alt", "", 1, "w-8", "md:w-14", "mb-3"], ["src", "../../../assets/images/svg/materialui.svg", "alt", "", 1, "w-8", "md:w-14", "mb-3"], ["src", "../../../assets/images/svg/apachecordova.svg", "alt", "", 1, "w-8", "md:w-14", "mb-3"], ["src", "../../../assets/images/svg/ionic.svg", "alt", "", 1, "w-8", "md:w-14", "mb-3"], ["src", "../../../assets/images/svg/adobephotoshop.svg", "alt", "", 1, "w-8", "md:w-14", "mb-3"], ["src", "../../../assets/images/svg/sublimetext.svg", "alt", "", 1, "w-8", "md:w-14", "mb-3"], ["src", "../../../assets/images/svg/visualstudiocode.svg", "alt", "", 1, "w-8", "md:w-14", "mb-3"], ["src", "../../../assets/images/svg/wordpress.svg", "alt", "", 1, "w-8", "md:w-14", "mb-3"], ["src", "../../../assets/images/svg/git.svg", "alt", "", 1, "w-8", "md:w-14", "mb-3"], [1, "flex", "items-center", "bg-light-grey", "py-12", "lg:py-20"], ["projects", ""], [1, "container", "text-white", "text-center", "px-6"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-8", "lg:gap-24"], ["src", "../../../assets/images/projects/bookmark.png", "alt", ""], [1, "text-primary", "font-nexa-bold", "text-xl"], [1, "w-3/4", "py-4", "mx-auto"], [1, "flex", "flex-wrap", "items-center", "justify-center", "gap-4"], ["src", "../../../assets/images/svg/html5.svg", "alt", "", 1, "w-5"], ["src", "../../../assets/images/svg/css3.svg", "alt", "", 1, "w-5"], ["src", "../../../assets/images/svg/javascript.svg", "alt", "", 1, "w-5"], ["src", "../../../assets/images/svg/tailwindcss.svg", "alt", "", 1, "w-5"], ["src", "../../../assets/images/projects/musicology.png", "alt", ""], ["src", "../../../assets/images/projects/portfolio.png", "alt", ""], [1, "bg-grey", "text-white", "py-12", "lg:py-20"], ["contact", ""], [1, "container", "px-6"], [1, "sm:w-3/4", "lg:w-2/4", "mx-auto", "text-center"], [1, "flex", "flex-col", "sm:flex-row", "mt-8", "gap-3"], ["type", "text", "placeholder", "Enter your email address", 1, "flex-1", "focus:outline-none", "text-black", "py-2", "px-3"], ["type", "button", 1, "btn", "bg-primary", "text-white", "hover:bg-white", "hover:text-black", "px-6", "py-2"], [1, "bg-dark-grey", "py-8"], [1, "container", "flex", "flex-col", "sm:flex-row", "items-center", "justify-center", "sm:justify-between", "text-white", "px-6"], ["src", "../../../assets/images/rm-white.png", "alt", "", 1, "w-8", "lg:w-6", "mb-6", "sm:mb-0"], [1, "flex", "flex-row", "flex-wrap", "gap-8"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_8_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](158);

              return ctx.onGoToSection(_r2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_10_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](199);

              return ctx.onGoToSection(_r3);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Introduction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Reginald Mabanta");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Frontend Developer / Wordpress Developer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Hi, Welcome to my Profile! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Are you looking for a Frontend Developer or Wordpress Developer to help you to develop your website ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " You are in the right place! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_40_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);

              return ctx.onGoToSection(_r1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "My Profile ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "section", 30, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h1", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Reginald Mabanta");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " My expertise is to build a web application using a various Single-Page Application(SPA) frameworks like Angular(2+). I'm a type of a web developer who enjoys learning new technology and make something of it. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_65_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](199);

              return ctx.onGoToSection(_r3);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Message ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "section", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h1", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "My ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Tech Stack, Framework and Tools that I use on building web or hybrid applications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "HTML5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "CSS3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Javascript");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Typescript");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Angular");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "React");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Redux");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "RxJs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "NgRX");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "SASS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Tailwind");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "img", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Bootstrap");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Material UI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "img", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Cordova");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Ionic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Photoshop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "img", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Sublime");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "img", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Visual Studio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "WordPress");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "img", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "GIT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "section", 65, 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h1", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "My ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Sample Projects that I developed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "img", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h1", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Bookmark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "p", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "The goal of this project is to make a responsive website using Tailwind CSS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "img", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "img", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "img", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "img", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "img", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "h1", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Musicology");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "The goal of this project is to convert the PSD to HTML without using any CSS Framework");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "img", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "img", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "img", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "img", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "h1", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Old Portfolio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "The goal of this project is create my own portfolio without using any CSS Framework");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "img", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "img", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "img", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "section", 79, 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "h1", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Get in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Touch");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "p", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Lets build your web application");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "input", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "button", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "footer", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "img", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Hi, let me give you a little background about myself. I'm Reginald Mabanta, ", ctx.age, " years old, from the Philippines. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" I've been working in the tech industry as a Web Developer for more than ", ctx.years_of_working, " years. Currently, I'm a Senior Frontend Developer in one of the biggest broadband provider in my country and I also work as a part-time Wordpress Developer. ");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
        styles: ["#logo[_ngcontent-%COMP%] {\n  max-height: 50px;\n}\n\np.heading[_ngcontent-%COMP%] {\n  letter-spacing: 3px;\n}\n\np.heading[_ngcontent-%COMP%]:before {\n  content: \"\";\n  margin-right: 0.5rem;\n  display: inline-block;\n  height: 0.75rem;\n  width: 1.5rem;\n  --tw-bg-opacity: 1;\n  background-color: rgba(207, 140, 69, var(--tw-bg-opacity));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxubyBzb3VyY2U+IiwiLi4vLi4vLi4vLi4vaG9tZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy9saWIvbGliL3N1YnN0aXR1dGVDbGFzc0FwcGx5QXRSdWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBQTs7QUNBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBR0k7RUFDSSxtQkFBQTtBQUFSOztBQUdJO0VBQ0ksV0FBQTtFQ1JSLG9CQUFtQjtFQUFuQixxQkFBbUI7RUFBbkIsZUFBbUI7RUFBbkIsYUFBbUI7RUFBbkIsa0JBQW1CO0VBQW5CLDBEQUFtQjtBRFFuQjs7QURWQSx5QkFBQSIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOltudWxsLCIjbG9nbyB7XG4gICAgbWF4LWhlaWdodDogNTBweDtcbn1cblxucCB7XG4gICAgJi5oZWFkaW5nIHtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICB9XG5cbiAgICAmLmhlYWRpbmc6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgQGFwcGx5IGJnLXByaW1hcnkgbXItMiBpbmxpbmUtYmxvY2sgaC0zIHctNjtcbiAgICB9XG59XG5cbi8vIGEubW9yZSB7XG4vLyAgICAgZm9udC1mYW1pbHk6IFwiTmV4YUJvbGRcIjtcbi8vICAgICBmb250LXNpemU6IDEuNHJlbTtcbi8vICAgICBjb2xvcjogI2NmOGM0NTtcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyB9XG4gIFxuLy8gYS5tb3JlIGkge1xuLy8gICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuLy8gfVxuICAiLCJAdGFpbHdpbmQgYmFzZTtcbkB0YWlsd2luZCBjb21wb25lbnRzO1xuQHRhaWx3aW5kIHV0aWxpdGllczsiXX0= */"]
      });
      /***/
    },

    /***/
    "3Clk": function Clk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
        return HomeRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.component */
      "0Pcf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
      }];

      var HomeRoutingModule = function HomeRoutingModule() {
        _classCallCheck(this, HomeRoutingModule);
      };

      HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) {
        return new (t || HomeRoutingModule)();
      };

      HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: HomeRoutingModule
      });
      HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "iydT": function iydT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
        return HomeModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home-routing.module */
      "3Clk");
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component */
      "0Pcf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeModule = function HomeModule() {
        _classCallCheck(this, HomeModule);
      };

      HomeModule.ɵfac = function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      };

      HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: HomeModule
      });
      HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomeModule, {
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-home-home-module-es5.js.map