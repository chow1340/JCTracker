(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0 ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*!\n\n =========================================================\n * Light Bootstrap Dashboard React - v1.3.0\n * Based on Light Bootstrap Dashboard - v1.3.0\n =========================================================\n\n * Product Page: http://www.creative-tim.com/product/light-bootstrap-dashboard-react\n * Copyright 2019 Creative Tim (http://www.creative-tim.com)\n * Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)\n\n =========================================================\n\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n */\n/*      light colors         */\n@keyframes spin {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n\n/*           Font Smoothing      */\nbody,\nh1, .h1,\nh2, .h2,\nh3, .h3,\nh4, .h4,\nh5, .h5,\nh6, .h6,\np,\n.navbar,\n.brand,\n.btn-simple,\n.alert,\na,\n.td-name,\ntd,\nbutton.close {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Roboto\",\"Helvetica Neue\",Arial,sans-serif;\n  font-weight: 400; }\n\nh1, .h1, h2, .h2, h3, .h3, h4, .h4 {\n  font-weight: 300;\n  margin: 30px 0 15px; }\n\nh1, .h1 {\n  font-size: 52px; }\n\nh2, .h2 {\n  font-size: 36px; }\n\nh3, .h3 {\n  font-size: 28px;\n  margin: 20px 0 10px; }\n\nh4, .h4 {\n  font-size: 22px;\n  line-height: 30px; }\n\nh5, .h5 {\n  font-size: 16px;\n  margin-bottom: 15px; }\n\nh6, .h6 {\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase; }\n\np {\n  font-size: 16px;\n  line-height: 1.5; }\n\nh1 small, h2 small, h3 small, h4 small, h5 small, h6 small, .h1 small, .h2 small, .h3 small, .h4 small, .h5 small, .h6 small, h1 .small, h2 .small, h3 .small, h4 .small, h5 .small, h6 .small, .h1 .small, .h2 .small, .h3 .small, .h4 .small, .h5 .small, .h6 .small {\n  color: #9A9A9A;\n  font-weight: 300;\n  line-height: 1.5; }\n\nh1 small, h2 small, h3 small, h1 .small, h2 .small, h3 .small {\n  font-size: 60%; }\n\nh1 .subtitle {\n  display: block;\n  margin: 0 0 30px; }\n\n.text-muted {\n  color: #9A9A9A; }\n\n.text-primary, .text-primary:hover {\n  color: #1D62F0 !important; }\n\n.text-info, .text-info:hover {\n  color: #1DC7EA !important; }\n\n.text-success, .text-success:hover {\n  color: #87CB16 !important; }\n\n.text-warning, .text-warning:hover {\n  color: #FF9500 !important; }\n\n.text-danger, .text-danger:hover {\n  color: #FF4A55 !important; }\n\n/*     General overwrite     */\nbody,\n.wrapper {\n  min-height: 100vh;\n  position: relative;\n  background-color: white; }\n\na {\n  color: #1DC7EA; }\n  a:hover, a:focus {\n    color: #42d0ed;\n    text-decoration: none; }\n\na:focus, a:active,\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner,\ninput[type=\"reset\"]::-moz-focus-inner,\ninput[type=\"button\"]::-moz-focus-inner,\ninput[type=\"submit\"]::-moz-focus-inner,\nselect::-moz-focus-inner,\ninput[type=\"file\"] > input[type=\"button\"]::-moz-focus-inner {\n  outline: 0; }\n\n.ui-slider-handle:focus,\n.navbar-toggle,\ninput:focus {\n  outline: 0 !important; }\n\n/*           Animations              */\n.form-control,\n.input-group-addon,\n.tagsinput,\n.navbar,\n.navbar .alert {\n  transition: all 300ms linear; }\n\n.sidebar .nav a,\n.table > tbody > tr .td-actions .btn {\n  transition: all 150ms ease-in; }\n\n.btn {\n  transition: all 100ms ease-in; }\n\n.fa {\n  width: 18px;\n  text-align: center; }\n\n.margin-top {\n  margin-top: 50px; }\n\n.wrapper {\n  position: relative;\n  top: 0;\n  height: 100vh; }\n\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 260px;\n  display: block;\n  z-index: 1;\n  color: #fff;\n  font-weight: 200;\n  background-size: cover;\n  background-position: center center; }\n  .sidebar .sidebar-wrapper {\n    position: relative;\n    height: calc(100vh - 75px);\n    overflow: auto;\n    width: 260px;\n    z-index: 4;\n    padding-bottom: 30px; }\n  .sidebar .sidebar-background {\n    position: absolute;\n    z-index: 1;\n    height: 100%;\n    width: 100%;\n    display: block;\n    top: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center center; }\n  .sidebar .logo {\n    padding: 10px 30px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n    position: relative;\n    z-index: 4; }\n    .sidebar .logo p {\n      float: left;\n      font-size: 20px;\n      margin: 10px 10px;\n      color: #FFFFFF;\n      line-height: 20px;\n      font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n    .sidebar .logo a.logo-mini {\n      float: left;\n      text-align: center;\n      width: 30px;\n      margin-right: 15px; }\n      .sidebar .logo a.logo-mini img {\n        width: 40px;\n        margin-left: -3px;\n        display: block;\n        margin-top: 2px; }\n    .sidebar .logo a.logo-normal {\n      display: block; }\n    .sidebar .logo .logo-img {\n      width: 34px;\n      display: inline-block;\n      height: 34px;\n      margin-left: -2px;\n      margin-top: -2px;\n      margin-right: 10px;\n      border-radius: 30px;\n      text-align: center; }\n  .sidebar .logo-tim {\n    border-radius: 50%;\n    border: 1px solid #333;\n    display: block;\n    height: 61px;\n    width: 61px;\n    float: left;\n    overflow: hidden; }\n    .sidebar .logo-tim img {\n      width: 60px;\n      height: 60px; }\n  .sidebar .nav {\n    margin-top: 20px; }\n    .sidebar .nav li > a {\n      color: #FFFFFF;\n      margin: 5px 15px;\n      opacity: .86;\n      border-radius: 4px; }\n    .sidebar .nav li:hover > a,\n    .sidebar .nav li.open > a,\n    .sidebar .nav li.open > a:focus,\n    .sidebar .nav li.open > a:hover {\n      background: rgba(255, 255, 255, 0.13);\n      opacity: 1; }\n    .sidebar .nav li.active > a {\n      color: #FFFFFF;\n      opacity: 1;\n      background: rgba(255, 255, 255, 0.23); }\n    .sidebar .nav p {\n      margin: 0;\n      line-height: 30px;\n      font-size: 12px;\n      font-weight: 600;\n      text-transform: uppercase; }\n    .sidebar .nav .caret {\n      top: 24px;\n      position: absolute;\n      right: 15px; }\n    .sidebar .nav i {\n      font-size: 28px;\n      float: left;\n      margin-right: 15px;\n      line-height: 30px;\n      width: 30px;\n      text-align: center; }\n\n.sidebar .logo,\nbody > .navbar-collapse .logo {\n  padding: 10px 30px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n  .sidebar .logo p,\n  body > .navbar-collapse .logo p {\n    float: left;\n    font-size: 20px;\n    margin: 10px 10px;\n    color: #FFFFFF;\n    line-height: 20px;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n  .sidebar .logo .simple-text,\n  body > .navbar-collapse .logo .simple-text {\n    text-transform: uppercase;\n    padding: 5px 0px;\n    display: block;\n    font-size: 18px;\n    color: #FFFFFF;\n    font-weight: 400;\n    line-height: 30px; }\n\n.sidebar .logo-tim,\nbody > .navbar-collapse .logo-tim {\n  border-radius: 50%;\n  border: 1px solid #333;\n  display: block;\n  height: 61px;\n  width: 61px;\n  float: left;\n  overflow: hidden; }\n  .sidebar .logo-tim img,\n  body > .navbar-collapse .logo-tim img {\n    width: 60px;\n    height: 60px; }\n\n.sidebar:after, .sidebar:before,\nbody > .navbar-collapse:after,\nbody > .navbar-collapse:before {\n  display: block;\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 2; }\n\n.sidebar:before,\nbody > .navbar-collapse:before {\n  opacity: .33;\n  background: #000000; }\n\n.sidebar:after,\nbody > .navbar-collapse:after {\n  background: #282828;\n  background: linear-gradient(to bottom, #282828 0%, #111 100%);\n  background-size: 150% 150%;\n  z-index: 3;\n  opacity: 1; }\n\n.sidebar[data-image]:after, .sidebar.has-image:after,\nbody > .navbar-collapse[data-image]:after,\nbody > .navbar-collapse.has-image:after {\n  opacity: .77; }\n\n.sidebar[data-color=\"blue\"]:after,\nbody > .navbar-collapse[data-color=\"blue\"]:after {\n  background: #1b8dff;\n  background: linear-gradient(to bottom, #1b8dff 0%, #2632c1 100%);\n  background-size: 150% 150%; }\n\n.sidebar[data-color=\"azure\"]:after,\nbody > .navbar-collapse[data-color=\"azure\"]:after {\n  background: #1DC7EA;\n  background: linear-gradient(to bottom, #1DC7EA 0%, #4091ff 100%);\n  background-size: 150% 150%; }\n\n.sidebar[data-color=\"green\"]:after,\nbody > .navbar-collapse[data-color=\"green\"]:after {\n  background: #87CB16;\n  background: linear-gradient(to bottom, #87CB16 0%, #6dc030 100%);\n  background-size: 150% 150%; }\n\n.sidebar[data-color=\"orange\"]:after,\nbody > .navbar-collapse[data-color=\"orange\"]:after {\n  background: #FFA534;\n  background: linear-gradient(to bottom, #FFA534 0%, #ff5221 100%);\n  background-size: 150% 150%; }\n\n.sidebar[data-color=\"red\"]:after,\nbody > .navbar-collapse[data-color=\"red\"]:after {\n  background: #FB404B;\n  background: linear-gradient(to bottom, #FB404B 0%, #bb0502 100%);\n  background-size: 150% 150%; }\n\n.sidebar[data-color=\"purple\"]:after,\nbody > .navbar-collapse[data-color=\"purple\"]:after {\n  background: #9368E9;\n  background: linear-gradient(to bottom, #9368E9 0%, #943bea 100%);\n  background-size: 150% 150%; }\n\n.main-panel {\n  background: rgba(203, 203, 210, 0.15);\n  position: relative;\n  float: right;\n  width: calc(100% - 260px); }\n  .main-panel > .content {\n    padding: 30px 15px;\n    min-height: calc(100% - 123px); }\n  .main-panel > .footer {\n    border-top: 1px solid #e7e7e7; }\n  .main-panel .navbar {\n    margin-bottom: 0; }\n\n.sidebar,\n.main-panel {\n  transition-property: top,bottom;\n  transition-duration: .2s,.2s;\n  transition-timing-function: linear,linear;\n  -webkit-overflow-scrolling: touch; }\n\n.btn {\n  border-width: 2px;\n  background-color: transparent;\n  font-weight: 400;\n  opacity: 0.8;\n  filter: alpha(opacity=80);\n  padding: 8px 16px;\n  border-color: #888888;\n  color: #888888; }\n  .btn:hover, .btn:focus, .btn:active, .btn.active,\n  .open > .btn.dropdown-toggle {\n    background-color: transparent;\n    color: #777777;\n    border-color: #777777; }\n  .btn.disabled, .btn.disabled:hover, .btn.disabled:focus, .btn.disabled.focus, .btn.disabled:active, .btn.disabled.active, .btn:disabled, .btn:disabled:hover, .btn:disabled:focus, .btn:disabled.focus, .btn:disabled:active, .btn:disabled.active, .btn[disabled], .btn[disabled]:hover, .btn[disabled]:focus, .btn[disabled].focus, .btn[disabled]:active, .btn[disabled].active,\n  fieldset[disabled] .btn,\n  fieldset[disabled] .btn:hover,\n  fieldset[disabled] .btn:focus,\n  fieldset[disabled] .btn.focus,\n  fieldset[disabled] .btn:active,\n  fieldset[disabled] .btn.active {\n    background-color: transparent;\n    border-color: #888888; }\n  .btn.btn-fill {\n    color: #FFFFFF;\n    background-color: #888888;\n    opacity: 1;\n    filter: alpha(opacity=100); }\n    .btn.btn-fill:hover, .btn.btn-fill:focus, .btn.btn-fill:active, .btn.btn-fill.active,\n    .open > .btn.btn-fill.dropdown-toggle {\n      background-color: #777777;\n      color: #FFFFFF; }\n    .btn.btn-fill .caret {\n      border-top-color: #FFFFFF; }\n  .btn .caret {\n    border-top-color: #888888; }\n  .btn:hover, .btn:focus {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    outline: 0 !important; }\n  .btn:active, .btn.active,\n  .open > .btn.dropdown-toggle {\n    box-shadow: none;\n    outline: 0 !important; }\n  .btn.btn-icon {\n    padding: 8px; }\n\n.btn-primary {\n  border-color: #3472F7;\n  color: #3472F7; }\n  .btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    background-color: transparent;\n    color: #1D62F0;\n    border-color: #1D62F0; }\n  .btn-primary.disabled, .btn-primary.disabled:hover, .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary.disabled:active, .btn-primary.disabled.active, .btn-primary:disabled, .btn-primary:disabled:hover, .btn-primary:disabled:focus, .btn-primary:disabled.focus, .btn-primary:disabled:active, .btn-primary:disabled.active, .btn-primary[disabled], .btn-primary[disabled]:hover, .btn-primary[disabled]:focus, .btn-primary[disabled].focus, .btn-primary[disabled]:active, .btn-primary[disabled].active,\n  fieldset[disabled] .btn-primary,\n  fieldset[disabled] .btn-primary:hover,\n  fieldset[disabled] .btn-primary:focus,\n  fieldset[disabled] .btn-primary.focus,\n  fieldset[disabled] .btn-primary:active,\n  fieldset[disabled] .btn-primary.active {\n    background-color: transparent;\n    border-color: #3472F7; }\n  .btn-primary.btn-fill {\n    color: #FFFFFF;\n    background-color: #3472F7;\n    opacity: 1;\n    filter: alpha(opacity=100); }\n    .btn-primary.btn-fill:hover, .btn-primary.btn-fill:focus, .btn-primary.btn-fill:active, .btn-primary.btn-fill.active,\n    .open > .btn-primary.btn-fill.dropdown-toggle {\n      background-color: #1D62F0;\n      color: #FFFFFF; }\n    .btn-primary.btn-fill .caret {\n      border-top-color: #FFFFFF; }\n  .btn-primary .caret {\n    border-top-color: #3472F7; }\n\n.btn-success {\n  border-color: #87CB16;\n  color: #87CB16; }\n  .btn-success:hover, .btn-success:focus, .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    background-color: transparent;\n    color: #049F0C;\n    border-color: #049F0C; }\n  .btn-success.disabled, .btn-success.disabled:hover, .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success.disabled:active, .btn-success.disabled.active, .btn-success:disabled, .btn-success:disabled:hover, .btn-success:disabled:focus, .btn-success:disabled.focus, .btn-success:disabled:active, .btn-success:disabled.active, .btn-success[disabled], .btn-success[disabled]:hover, .btn-success[disabled]:focus, .btn-success[disabled].focus, .btn-success[disabled]:active, .btn-success[disabled].active,\n  fieldset[disabled] .btn-success,\n  fieldset[disabled] .btn-success:hover,\n  fieldset[disabled] .btn-success:focus,\n  fieldset[disabled] .btn-success.focus,\n  fieldset[disabled] .btn-success:active,\n  fieldset[disabled] .btn-success.active {\n    background-color: transparent;\n    border-color: #87CB16; }\n  .btn-success.btn-fill {\n    color: #FFFFFF;\n    background-color: #87CB16;\n    opacity: 1;\n    filter: alpha(opacity=100); }\n    .btn-success.btn-fill:hover, .btn-success.btn-fill:focus, .btn-success.btn-fill:active, .btn-success.btn-fill.active,\n    .open > .btn-success.btn-fill.dropdown-toggle {\n      background-color: #049F0C;\n      color: #FFFFFF; }\n    .btn-success.btn-fill .caret {\n      border-top-color: #FFFFFF; }\n  .btn-success .caret {\n    border-top-color: #87CB16; }\n\n.btn-info {\n  border-color: #1DC7EA;\n  color: #1DC7EA; }\n  .btn-info:hover, .btn-info:focus, .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    background-color: transparent;\n    color: #42d0ed;\n    border-color: #42d0ed; }\n  .btn-info.disabled, .btn-info.disabled:hover, .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info.disabled:active, .btn-info.disabled.active, .btn-info:disabled, .btn-info:disabled:hover, .btn-info:disabled:focus, .btn-info:disabled.focus, .btn-info:disabled:active, .btn-info:disabled.active, .btn-info[disabled], .btn-info[disabled]:hover, .btn-info[disabled]:focus, .btn-info[disabled].focus, .btn-info[disabled]:active, .btn-info[disabled].active,\n  fieldset[disabled] .btn-info,\n  fieldset[disabled] .btn-info:hover,\n  fieldset[disabled] .btn-info:focus,\n  fieldset[disabled] .btn-info.focus,\n  fieldset[disabled] .btn-info:active,\n  fieldset[disabled] .btn-info.active {\n    background-color: transparent;\n    border-color: #1DC7EA; }\n  .btn-info.btn-fill {\n    color: #FFFFFF;\n    background-color: #1DC7EA;\n    opacity: 1;\n    filter: alpha(opacity=100); }\n    .btn-info.btn-fill:hover, .btn-info.btn-fill:focus, .btn-info.btn-fill:active, .btn-info.btn-fill.active,\n    .open > .btn-info.btn-fill.dropdown-toggle {\n      background-color: #42d0ed;\n      color: #FFFFFF; }\n    .btn-info.btn-fill .caret {\n      border-top-color: #FFFFFF; }\n  .btn-info .caret {\n    border-top-color: #1DC7EA; }\n\n.btn-warning {\n  border-color: #FF9500;\n  color: #FF9500; }\n  .btn-warning:hover, .btn-warning:focus, .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    background-color: transparent;\n    color: #ED8D00;\n    border-color: #ED8D00; }\n  .btn-warning.disabled, .btn-warning.disabled:hover, .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning.disabled:active, .btn-warning.disabled.active, .btn-warning:disabled, .btn-warning:disabled:hover, .btn-warning:disabled:focus, .btn-warning:disabled.focus, .btn-warning:disabled:active, .btn-warning:disabled.active, .btn-warning[disabled], .btn-warning[disabled]:hover, .btn-warning[disabled]:focus, .btn-warning[disabled].focus, .btn-warning[disabled]:active, .btn-warning[disabled].active,\n  fieldset[disabled] .btn-warning,\n  fieldset[disabled] .btn-warning:hover,\n  fieldset[disabled] .btn-warning:focus,\n  fieldset[disabled] .btn-warning.focus,\n  fieldset[disabled] .btn-warning:active,\n  fieldset[disabled] .btn-warning.active {\n    background-color: transparent;\n    border-color: #FF9500; }\n  .btn-warning.btn-fill {\n    color: #FFFFFF;\n    background-color: #FF9500;\n    opacity: 1;\n    filter: alpha(opacity=100); }\n    .btn-warning.btn-fill:hover, .btn-warning.btn-fill:focus, .btn-warning.btn-fill:active, .btn-warning.btn-fill.active,\n    .open > .btn-warning.btn-fill.dropdown-toggle {\n      background-color: #ED8D00;\n      color: #FFFFFF; }\n    .btn-warning.btn-fill .caret {\n      border-top-color: #FFFFFF; }\n  .btn-warning .caret {\n    border-top-color: #FF9500; }\n\n.btn-danger {\n  border-color: #FF4A55;\n  color: #FF4A55; }\n  .btn-danger:hover, .btn-danger:focus, .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    background-color: transparent;\n    color: #EE2D20;\n    border-color: #EE2D20; }\n  .btn-danger.disabled, .btn-danger.disabled:hover, .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger.disabled:active, .btn-danger.disabled.active, .btn-danger:disabled, .btn-danger:disabled:hover, .btn-danger:disabled:focus, .btn-danger:disabled.focus, .btn-danger:disabled:active, .btn-danger:disabled.active, .btn-danger[disabled], .btn-danger[disabled]:hover, .btn-danger[disabled]:focus, .btn-danger[disabled].focus, .btn-danger[disabled]:active, .btn-danger[disabled].active,\n  fieldset[disabled] .btn-danger,\n  fieldset[disabled] .btn-danger:hover,\n  fieldset[disabled] .btn-danger:focus,\n  fieldset[disabled] .btn-danger.focus,\n  fieldset[disabled] .btn-danger:active,\n  fieldset[disabled] .btn-danger.active {\n    background-color: transparent;\n    border-color: #FF4A55; }\n  .btn-danger.btn-fill {\n    color: #FFFFFF;\n    background-color: #FF4A55;\n    opacity: 1;\n    filter: alpha(opacity=100); }\n    .btn-danger.btn-fill:hover, .btn-danger.btn-fill:focus, .btn-danger.btn-fill:active, .btn-danger.btn-fill.active,\n    .open > .btn-danger.btn-fill.dropdown-toggle {\n      background-color: #EE2D20;\n      color: #FFFFFF; }\n    .btn-danger.btn-fill .caret {\n      border-top-color: #FFFFFF; }\n  .btn-danger .caret {\n    border-top-color: #FF4A55; }\n\n.btn-neutral {\n  border-color: #FFFFFF;\n  color: #FFFFFF; }\n  .btn-neutral:hover, .btn-neutral:focus, .btn-neutral:active, .btn-neutral.active,\n  .open > .btn-neutral.dropdown-toggle {\n    background-color: transparent;\n    color: #FFFFFF;\n    border-color: #FFFFFF; }\n  .btn-neutral.disabled, .btn-neutral.disabled:hover, .btn-neutral.disabled:focus, .btn-neutral.disabled.focus, .btn-neutral.disabled:active, .btn-neutral.disabled.active, .btn-neutral:disabled, .btn-neutral:disabled:hover, .btn-neutral:disabled:focus, .btn-neutral:disabled.focus, .btn-neutral:disabled:active, .btn-neutral:disabled.active, .btn-neutral[disabled], .btn-neutral[disabled]:hover, .btn-neutral[disabled]:focus, .btn-neutral[disabled].focus, .btn-neutral[disabled]:active, .btn-neutral[disabled].active,\n  fieldset[disabled] .btn-neutral,\n  fieldset[disabled] .btn-neutral:hover,\n  fieldset[disabled] .btn-neutral:focus,\n  fieldset[disabled] .btn-neutral.focus,\n  fieldset[disabled] .btn-neutral:active,\n  fieldset[disabled] .btn-neutral.active {\n    background-color: transparent;\n    border-color: #FFFFFF; }\n  .btn-neutral.btn-fill {\n    color: #FFFFFF;\n    background-color: #FFFFFF;\n    opacity: 1;\n    filter: alpha(opacity=100); }\n    .btn-neutral.btn-fill:hover, .btn-neutral.btn-fill:focus, .btn-neutral.btn-fill:active, .btn-neutral.btn-fill.active,\n    .open > .btn-neutral.btn-fill.dropdown-toggle {\n      background-color: #FFFFFF;\n      color: #FFFFFF; }\n    .btn-neutral.btn-fill .caret {\n      border-top-color: #FFFFFF; }\n  .btn-neutral .caret {\n    border-top-color: #FFFFFF; }\n  .btn-neutral:active, .btn-neutral.active,\n  .open > .btn-neutral.dropdown-toggle {\n    background-color: #FFFFFF;\n    color: #888888; }\n  .btn-neutral.btn-fill, .btn-neutral.btn-fill:hover, .btn-neutral.btn-fill:focus {\n    color: #888888; }\n  .btn-neutral.btn-simple:active, .btn-neutral.btn-simple.active {\n    background-color: transparent; }\n\n.btn:disabled, .btn[disabled], .btn.disabled {\n  opacity: 0.5;\n  filter: alpha(opacity=50); }\n\n.btn-round {\n  border-width: 1px;\n  border-radius: 30px !important;\n  padding: 9px 18px; }\n  .btn-round.btn-icon {\n    padding: 9px; }\n\n.btn-simple {\n  border: 0;\n  font-size: 16px;\n  padding: 8px 16px; }\n  .btn-simple.btn-icon {\n    padding: 8px; }\n\n.btn-lg {\n  font-size: 18px;\n  border-radius: 6px;\n  padding: 14px 30px;\n  font-weight: 400; }\n  .btn-lg.btn-round {\n    padding: 15px 30px; }\n  .btn-lg.btn-simple {\n    padding: 16px 30px; }\n\n.btn-sm {\n  font-size: 12px;\n  border-radius: 3px;\n  padding: 5px 10px; }\n  .btn-sm.btn-round {\n    padding: 6px 10px; }\n  .btn-sm.btn-simple {\n    padding: 7px 10px; }\n\n.btn-xs {\n  font-size: 12px;\n  border-radius: 3px;\n  padding: 1px 5px; }\n  .btn-xs.btn-round {\n    padding: 2px 5px; }\n  .btn-xs.btn-simple {\n    padding: 3px 5px; }\n\n.btn-wd {\n  min-width: 140px; }\n\n.btn-group.select {\n  width: 100%; }\n\n.btn-group.select .btn {\n  text-align: left; }\n\n.btn-group.select .caret {\n  position: absolute;\n  top: 50%;\n  margin-top: -1px;\n  right: 8px; }\n\n.form-control::-moz-placeholder {\n  color: #DDDDDD;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n\n.form-control:-moz-placeholder {\n  color: #DDDDDD;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n\n.form-control::-webkit-input-placeholder {\n  color: #DDDDDD;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n\n.form-control:-ms-input-placeholder {\n  color: #DDDDDD;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n\n.form-control {\n  background-color: #FFFFFF;\n  border: 1px solid #E3E3E3;\n  border-radius: 4px;\n  color: #565656;\n  padding: 8px 12px;\n  height: 40px;\n  box-shadow: none; }\n  .form-control:focus {\n    background-color: #FFFFFF;\n    border: 1px solid #AAAAAA;\n    box-shadow: none;\n    outline: 0 !important;\n    color: #333333; }\n  .has-success .form-control,\n  .has-error .form-control,\n  .has-success .form-control:focus,\n  .has-error .form-control:focus {\n    border-color: #E3E3E3;\n    box-shadow: none; }\n  .has-success .form-control {\n    color: #87CB16; }\n  .has-success .form-control:focus {\n    border-color: #87CB16; }\n  .has-error .form-control {\n    color: #FF4A55; }\n  .has-error .form-control:focus {\n    border-color: #FF4A55; }\n  .form-control + .form-control-feedback {\n    border-radius: 6px;\n    font-size: 14px;\n    margin-top: -7px;\n    position: absolute;\n    right: 10px;\n    top: 50%;\n    vertical-align: middle; }\n  .open .form-control {\n    border-radius: 4px 4px 0 0;\n    border-bottom-color: transparent; }\n\n.input-lg {\n  height: 55px;\n  padding: 14px 30px; }\n\n.has-error .form-control-feedback {\n  color: #FF4A55; }\n\n.has-success .form-control-feedback {\n  color: #87CB16; }\n\n.input-group-addon {\n  background-color: #FFFFFF;\n  border: 1px solid #E3E3E3;\n  border-radius: 4px; }\n  .has-success .input-group-addon,\n  .has-error .input-group-addon {\n    background-color: #FFFFFF;\n    border: 1px solid #E3E3E3; }\n  .has-error .form-control:focus + .input-group-addon {\n    border-color: #FF4A55;\n    color: #FF4A55; }\n  .has-success .form-control:focus + .input-group-addon {\n    border-color: #87CB16;\n    color: #87CB16; }\n  .form-control:focus + .input-group-addon,\n  .form-control:focus ~ .input-group-addon {\n    background-color: #FFFFFF;\n    border-color: #9A9A9A; }\n\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle) {\n  border-right: 0 none; }\n\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child) {\n  border-left: 0 none; }\n\n.form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {\n  background-color: #F5F5F5;\n  color: #888888;\n  cursor: not-allowed; }\n\n.input-group-btn .btn {\n  border-width: 1px;\n  padding: 9px 16px; }\n\n.input-group-btn .btn-default:not(.btn-fill) {\n  border-color: #DDDDDD; }\n\n.input-group-btn:last-child > .btn {\n  margin-left: 0; }\n\n.input-group-focus .input-group-addon {\n  border-color: #9A9A9A; }\n\n.alert {\n  border: 0;\n  border-radius: 0;\n  color: #FFFFFF;\n  padding: 10px 15px;\n  font-size: 14px; }\n  .container .alert {\n    border-radius: 4px; }\n  .navbar .alert {\n    border-radius: 0;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 85px;\n    width: 100%;\n    z-index: 3; }\n  .navbar:not(.navbar-transparent) .alert {\n    top: 70px; }\n  .alert span[data-notify=\"icon\"] {\n    font-size: 30px;\n    display: block;\n    left: 15px;\n    position: absolute;\n    top: 50%;\n    margin-top: -15px; }\n  .alert button.close {\n    position: absolute;\n    right: 10px;\n    top: 50%;\n    margin-top: -13px;\n    z-index: 1033;\n    background-color: #FFFFFF;\n    display: block;\n    border-radius: 50%;\n    opacity: .4;\n    line-height: 20px;\n    font-size: 12px;\n    width: 25px;\n    height: 25px;\n    outline: 0 !important;\n    text-align: center;\n    padding: 3px;\n    font-weight: 300; }\n    .alert button.close:hover {\n      opacity: .55; }\n  .alert .close ~ span {\n    display: block;\n    max-width: 89%; }\n  .alert[data-notify=\"container\"] {\n    padding: 10px 10px 10px 20px;\n    border-radius: 4px; }\n  .alert.alert-with-icon {\n    padding-left: 65px; }\n  .alert a, .alert a:hover, .alert a:focus {\n    text-decoration: underline;\n    color: white; }\n\n.alert-info {\n  background-color: #63d8f1; }\n\n.alert-success {\n  background-color: #a1e82c; }\n\n.alert-warning {\n  background-color: #ffbc67; }\n\n.alert-danger {\n  background-color: #fc727a; }\n\n.table .radio,\n.table .checkbox {\n  position: relative;\n  height: 20px;\n  display: block;\n  width: 20px;\n  padding: 0px 0px;\n  margin: 0px 5px;\n  text-align: center; }\n  .table .radio .icons,\n  .table .checkbox .icons {\n    left: 5px; }\n\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 12px 8px;\n  vertical-align: middle; }\n\n.table > tbody > tr > td {\n  font-size: 14px; }\n\n.table > thead > tr > th {\n  border-bottom-width: 1px;\n  font-size: 12px;\n  text-transform: uppercase;\n  color: #9A9A9A;\n  font-weight: 400;\n  padding-bottom: 5px; }\n\n.table .td-actions .btn {\n  opacity: 0.36;\n  filter: alpha(opacity=36); }\n  .table .td-actions .btn.btn-xs {\n    padding-left: 3px;\n    padding-right: 3px; }\n\n.table .td-actions {\n  min-width: 90px; }\n\n.table > tbody > tr {\n  position: relative; }\n  .table > tbody > tr:hover .td-actions .btn {\n    opacity: 1;\n    filter: alpha(opacity=100); }\n\n/*      Checkbox and radio         */\n.checkbox,\n.radio {\n  margin-bottom: 12px; }\n\n.checkbox label,\n.radio label {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  padding-left: 24px;\n  margin-bottom: 0; }\n\n.checkbox label::before,\n.checkbox label::after {\n  font-family: 'FontAwesome';\n  content: \"\\f096\";\n  display: inline-block;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  left: 0;\n  cursor: pointer;\n  line-height: 19px;\n  font-size: 20px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  top: 1px;\n  color: #DDDDDD;\n  transition: color 0.2s linear;\n  padding: 1px; }\n\n.checkbox label::after {\n  content: \"\";\n  text-align: center;\n  opacity: 1;\n  left: 1px;\n  color: #DDDDDD; }\n\n.checkbox input[type=\"checkbox\"],\n.radio input[type=\"radio\"] {\n  opacity: 0;\n  margin-left: 0; }\n\n.checkbox input[type=\"checkbox\"]:checked + label::after {\n  font-family: 'FontAwesome';\n  content: \"\\f046\"; }\n\n.checkbox input[type=\"checkbox\"]:checked + label::after {\n  color: #1DC7EA; }\n\n.checkbox input[type=\"checkbox\"]:checked + label::before {\n  opacity: 0; }\n\n.checkbox input[type=\"checkbox\"]:disabled + label,\n.radio input[type=\"radio\"]:disabled + label,\n.checkbox input[type=\"checkbox\"]:disabled:checked + label::after {\n  color: #DDDDDD; }\n\n.checkbox input[type=\"checkbox\"]:disabled + label::before,\n.checkbox input[type=\"checkbox\"]:disabled + label::after {\n  cursor: not-allowed; }\n\n.checkbox input[type=\"checkbox\"]:disabled + label,\n.radio input[type=\"radio\"]:disabled + label {\n  cursor: not-allowed; }\n\n.checkbox.checkbox-circle label::before {\n  border-radius: 50%; }\n\n.checkbox.checkbox-inline {\n  padding-left: 0; }\n\n.checkbox-primary input[type=\"checkbox\"]:checked + label::before {\n  background-color: #428bca;\n  border-color: #428bca; }\n\n.checkbox-primary input[type=\"checkbox\"]:checked + label::after {\n  color: #fff; }\n\n.checkbox-danger input[type=\"checkbox\"]:checked + label::before {\n  background-color: #d9534f;\n  border-color: #d9534f; }\n\n.checkbox-danger input[type=\"checkbox\"]:checked + label::after {\n  color: #fff; }\n\n.checkbox-info input[type=\"checkbox\"]:checked + label::before {\n  background-color: #5bc0de;\n  border-color: #5bc0de; }\n\n.checkbox-info input[type=\"checkbox\"]:checked + label::after {\n  color: #fff; }\n\n.checkbox-warning input[type=\"checkbox\"]:checked + label::before {\n  background-color: #f0ad4e;\n  border-color: #f0ad4e; }\n\n.checkbox-warning input[type=\"checkbox\"]:checked + label::after {\n  color: #fff; }\n\n.checkbox-success input[type=\"checkbox\"]:checked + label::before {\n  background-color: #5cb85c;\n  border-color: #5cb85c; }\n\n.checkbox-success input[type=\"checkbox\"]:checked + label::after {\n  color: #fff; }\n\n.radio label::before,\n.radio label::after {\n  font-family: 'FontAwesome';\n  content: \"\\f10c\";\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  display: inline-block;\n  position: absolute;\n  line-height: 19px;\n  left: 0;\n  top: 0;\n  color: #DDDDDD;\n  padding: 1px;\n  transition: color 0.2s linear; }\n\n.radio input[type=\"radio\"]:checked + label::after {\n  font-family: 'FontAwesome';\n  content: \"\\f192\";\n  color: #DDDDDD; }\n\n.radio input[type=\"radio\"]:checked + label::after {\n  color: #1DC7EA; }\n\n.radio input[type=\"radio\"]:disabled + label {\n  color: #ddd; }\n\n.radio input[type=\"radio\"]:disabled + label::before,\n.radio input[type=\"radio\"]:disabled + label::after {\n  color: #ddd; }\n\n.radio.radio-inline {\n  margin-top: 0; }\n\n/**\n  * bootstrap-switch - Turn checkboxes and radio buttons into toggle switches.\n  *\n  * @version v3.3.4\n  * @homepage https://bttstrp.github.io/bootstrap-switch\n  * @author Mattia Larentis <mattia@larentis.eu> (http://larentis.eu)\n  * @license Apache-2.0\n  */\n.bootstrap-switch {\n  display: inline-block;\n  direction: ltr;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 1px solid;\n  border-color: #ccc;\n  position: relative;\n  text-align: left;\n  overflow: hidden;\n  line-height: 8px;\n  z-index: 0;\n  -webkit-user-select: none;\n  user-select: none;\n  vertical-align: middle;\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s; }\n\n.bootstrap-switch .bootstrap-switch-container {\n  display: inline-block;\n  top: 0;\n  border-radius: 4px;\n  transform: translate3d(0, 0, 0); }\n\n.bootstrap-switch .bootstrap-switch-handle-on,\n.bootstrap-switch .bootstrap-switch-handle-off,\n.bootstrap-switch .bootstrap-switch-label {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: table-cell;\n  vertical-align: middle;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 20px; }\n\n.bootstrap-switch .bootstrap-switch-handle-on,\n.bootstrap-switch .bootstrap-switch-handle-off {\n  text-align: center;\n  z-index: 1; }\n\n.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-primary,\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-primary {\n  color: #fff;\n  background: #337ab7; }\n\n.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-info,\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-info {\n  color: #fff;\n  background: #5bc0de; }\n\n.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-success,\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-success {\n  color: #fff;\n  background: #5cb85c; }\n\n.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-warning,\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-warning {\n  background: #f0ad4e;\n  color: #fff; }\n\n.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-danger,\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-danger {\n  color: #fff;\n  background: #d9534f; }\n\n.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-default,\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-default {\n  color: #000;\n  background: #eeeeee; }\n\n.bootstrap-switch .bootstrap-switch-label {\n  text-align: center;\n  margin-top: -1px;\n  margin-bottom: -1px;\n  z-index: 100;\n  color: #333;\n  background: #fff; }\n\n.bootstrap-switch span::before {\n  content: \"\\200b\"; }\n\n.bootstrap-switch .bootstrap-switch-handle-on {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px; }\n\n.bootstrap-switch .bootstrap-switch-handle-off {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px; }\n\n.bootstrap-switch input[type='radio'],\n.bootstrap-switch input[type='checkbox'] {\n  position: absolute !important;\n  top: 0;\n  left: 0;\n  margin: 0;\n  z-index: -1;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  visibility: hidden; }\n\n.bootstrap-switch.bootstrap-switch-mini .bootstrap-switch-handle-on,\n.bootstrap-switch.bootstrap-switch-mini .bootstrap-switch-handle-off,\n.bootstrap-switch.bootstrap-switch-mini .bootstrap-switch-label {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.bootstrap-switch.bootstrap-switch-small .bootstrap-switch-handle-on,\n.bootstrap-switch.bootstrap-switch-small .bootstrap-switch-handle-off,\n.bootstrap-switch.bootstrap-switch-small .bootstrap-switch-label {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.bootstrap-switch.bootstrap-switch-large .bootstrap-switch-handle-on,\n.bootstrap-switch.bootstrap-switch-large .bootstrap-switch-handle-off,\n.bootstrap-switch.bootstrap-switch-large .bootstrap-switch-label {\n  padding: 6px 16px;\n  font-size: 18px;\n  line-height: 1.3333333; }\n\n.bootstrap-switch.bootstrap-switch-disabled,\n.bootstrap-switch.bootstrap-switch-readonly,\n.bootstrap-switch.bootstrap-switch-indeterminate {\n  cursor: default !important; }\n\n.bootstrap-switch.bootstrap-switch-disabled .bootstrap-switch-handle-on,\n.bootstrap-switch.bootstrap-switch-readonly .bootstrap-switch-handle-on,\n.bootstrap-switch.bootstrap-switch-indeterminate .bootstrap-switch-handle-on,\n.bootstrap-switch.bootstrap-switch-disabled .bootstrap-switch-handle-off,\n.bootstrap-switch.bootstrap-switch-readonly .bootstrap-switch-handle-off,\n.bootstrap-switch.bootstrap-switch-indeterminate .bootstrap-switch-handle-off,\n.bootstrap-switch.bootstrap-switch-disabled .bootstrap-switch-label,\n.bootstrap-switch.bootstrap-switch-readonly .bootstrap-switch-label,\n.bootstrap-switch.bootstrap-switch-indeterminate .bootstrap-switch-label {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  cursor: default !important; }\n\n.bootstrap-switch.bootstrap-switch-animate .bootstrap-switch-container {\n  transition: margin-left 0.5s; }\n\n.bootstrap-switch.bootstrap-switch-inverse .bootstrap-switch-handle-on {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px; }\n\n.bootstrap-switch.bootstrap-switch-inverse .bootstrap-switch-handle-off {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px; }\n\n.bootstrap-switch.bootstrap-switch-focused {\n  border-color: #66afe9;\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); }\n\n.bootstrap-switch.bootstrap-switch-on .bootstrap-switch-label,\n.bootstrap-switch.bootstrap-switch-inverse.bootstrap-switch-off .bootstrap-switch-label {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px; }\n\n.bootstrap-switch.bootstrap-switch-off .bootstrap-switch-label,\n.bootstrap-switch.bootstrap-switch-inverse.bootstrap-switch-on .bootstrap-switch-label {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px; }\n\n.nav > li > a:hover,\n.nav > li > a:focus {\n  background-color: transparent; }\n\n.navbar {\n  border: 0;\n  font-size: 16px;\n  border-radius: 0; }\n  .navbar .navbar-brand {\n    font-weight: 400;\n    margin: 5px 0px;\n    padding: 15px 15px;\n    font-size: 20px; }\n  .navbar .navbar-nav > li > a {\n    padding: 10px 15px;\n    margin: 10px 3px;\n    position: relative; }\n  .navbar .navbar-nav > li > a.btn {\n    margin: 15px 3px;\n    padding: 8px 16px; }\n  .navbar .navbar-nav > li > a.btn-round {\n    margin: 16px 3px; }\n  .navbar .navbar-nav > li > a [class^=\"fa\"] {\n    font-size: 19px;\n    position: relative;\n    line-height: 16px;\n    top: 1px; }\n  .navbar .navbar-nav .notification {\n    position: absolute;\n    background-color: #FB404B;\n    text-align: center;\n    border-radius: 10px;\n    min-width: 18px;\n    padding: 0 5px;\n    height: 18px;\n    font-size: 12px;\n    color: #FFFFFF;\n    font-weight: bold;\n    line-height: 18px;\n    top: 0px;\n    left: 7px; }\n  .navbar .btn {\n    margin: 15px 3px;\n    font-size: 14px; }\n  .navbar .btn-simple {\n    font-size: 16px; }\n  .navbar.fixed {\n    width: calc(100% - $sidebar-width);\n    right: 0;\n    left: auto;\n    border-radius: 0; }\n\n.navbar-nav > li > .dropdown-menu {\n  border-radius: 10px;\n  margin-top: -5px; }\n\n.navbar-transparent .navbar-brand, [class*=\"navbar-ct\"] .navbar-brand {\n  color: #FFFFFF;\n  opacity: 0.9;\n  filter: alpha(opacity=90); }\n  .navbar-transparent .navbar-brand:focus, .navbar-transparent .navbar-brand:hover, [class*=\"navbar-ct\"] .navbar-brand:focus, [class*=\"navbar-ct\"] .navbar-brand:hover {\n    background-color: transparent;\n    opacity: 1;\n    filter: alpha(opacity=100); }\n\n.navbar-transparent .navbar-nav > li > a:not(.btn), [class*=\"navbar-ct\"] .navbar-nav > li > a:not(.btn) {\n  color: #FFFFFF;\n  border-color: #FFFFFF;\n  opacity: 0.8;\n  filter: alpha(opacity=80); }\n\n.navbar-transparent .navbar-nav > .active > a:not(.btn),\n.navbar-transparent .navbar-nav > .active > a:hover:not(.btn),\n.navbar-transparent .navbar-nav > .active > a:focus:not(.btn),\n.navbar-transparent .navbar-nav > li > a:hover:not(.btn),\n.navbar-transparent .navbar-nav > li > a:focus:not(.btn), [class*=\"navbar-ct\"] .navbar-nav > .active > a:not(.btn),\n[class*=\"navbar-ct\"] .navbar-nav > .active > a:hover:not(.btn),\n[class*=\"navbar-ct\"] .navbar-nav > .active > a:focus:not(.btn),\n[class*=\"navbar-ct\"] .navbar-nav > li > a:hover:not(.btn),\n[class*=\"navbar-ct\"] .navbar-nav > li > a:focus:not(.btn) {\n  background-color: transparent;\n  border-radius: 3px;\n  color: #FFFFFF;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n\n.navbar-transparent .navbar-nav .nav > li > a.btn:hover, [class*=\"navbar-ct\"] .navbar-nav .nav > li > a.btn:hover {\n  background-color: transparent; }\n\n.navbar-transparent .navbar-nav > .dropdown > a .caret,\n.navbar-transparent .navbar-nav > .dropdown > a:hover .caret,\n.navbar-transparent .navbar-nav > .dropdown > a:focus .caret, [class*=\"navbar-ct\"] .navbar-nav > .dropdown > a .caret,\n[class*=\"navbar-ct\"] .navbar-nav > .dropdown > a:hover .caret,\n[class*=\"navbar-ct\"] .navbar-nav > .dropdown > a:focus .caret {\n  border-bottom-color: #FFFFFF;\n  border-top-color: #FFFFFF; }\n\n.navbar-transparent .navbar-nav > .open > a,\n.navbar-transparent .navbar-nav > .open > a:hover,\n.navbar-transparent .navbar-nav > .open > a:focus, [class*=\"navbar-ct\"] .navbar-nav > .open > a,\n[class*=\"navbar-ct\"] .navbar-nav > .open > a:hover,\n[class*=\"navbar-ct\"] .navbar-nav > .open > a:focus {\n  background-color: transparent;\n  color: #FFFFFF;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n\n.navbar-transparent .btn-default, [class*=\"navbar-ct\"] .btn-default {\n  color: #FFFFFF;\n  border-color: #FFFFFF; }\n\n.navbar-transparent .btn-default.btn-fill, [class*=\"navbar-ct\"] .btn-default.btn-fill {\n  color: #9A9A9A;\n  background-color: #FFFFFF;\n  opacity: 0.9;\n  filter: alpha(opacity=90); }\n\n.navbar-transparent .btn-default.btn-fill:hover,\n.navbar-transparent .btn-default.btn-fill:focus,\n.navbar-transparent .btn-default.btn-fill:active,\n.navbar-transparent .btn-default.btn-fill.active,\n.navbar-transparent .open .dropdown-toggle.btn-fill.btn-default, [class*=\"navbar-ct\"] .btn-default.btn-fill:hover,\n[class*=\"navbar-ct\"] .btn-default.btn-fill:focus,\n[class*=\"navbar-ct\"] .btn-default.btn-fill:active,\n[class*=\"navbar-ct\"] .btn-default.btn-fill.active,\n[class*=\"navbar-ct\"] .open .dropdown-toggle.btn-fill.btn-default {\n  border-color: #FFFFFF;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n\n.navbar-transparent .dropdown-menu .divider {\n  background-color: rgba(255, 255, 255, 0.2); }\n\n.nav-open .nav .caret {\n  border-bottom-color: #FFFFFF;\n  border-top-color: #FFFFFF; }\n\n.navbar-default {\n  background-color: rgba(255, 255, 255, 0.96);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n  .navbar-default .navbar-nav > li > a:not(.btn) {\n    color: #9A9A9A; }\n  .navbar-default .navbar-nav > .active > a,\n  .navbar-default .navbar-nav > .active > a:not(.btn):hover,\n  .navbar-default .navbar-nav > .active > a:not(.btn):focus,\n  .navbar-default .navbar-nav > li > a:not(.btn):hover,\n  .navbar-default .navbar-nav > li > a:not(.btn):focus {\n    background-color: transparent;\n    border-radius: 3px;\n    color: #1DC7EA;\n    opacity: 1;\n    filter: alpha(opacity=100); }\n  .navbar-default .navbar-nav > .dropdown > a:hover .caret,\n  .navbar-default .navbar-nav > .dropdown > a:focus .caret {\n    border-bottom-color: #1DC7EA;\n    border-top-color: #1DC7EA; }\n  .navbar-default .navbar-nav > .open > a,\n  .navbar-default .navbar-nav > .open > a:hover,\n  .navbar-default .navbar-nav > .open > a:focus {\n    background-color: transparent;\n    color: #1DC7EA; }\n  .navbar-default .navbar-nav .navbar-toggle:hover, .navbar-default .navbar-nav .navbar-toggle:focus {\n    background-color: transparent; }\n  .navbar-default:not(.navbar-transparent) .btn-default:hover {\n    color: #1DC7EA;\n    border-color: #1DC7EA; }\n  .navbar-default:not(.navbar-transparent) .btn-neutral,\n  .navbar-default:not(.navbar-transparent) .btn-neutral:hover,\n  .navbar-default:not(.navbar-transparent) .btn-neutral:active {\n    color: #9A9A9A; }\n\n/*      Navbar with icons            */\n.navbar-icons.navbar .navbar-brand {\n  margin-top: 12px;\n  margin-bottom: 12px; }\n\n.navbar-icons .navbar-nav > li > a {\n  text-align: center;\n  padding: 6px 15px;\n  margin: 6px 3px; }\n\n.navbar-icons .navbar-nav [class^=\"pe\"] {\n  font-size: 30px;\n  position: relative; }\n\n.navbar-icons .navbar-nav p {\n  margin: 3px 0 0; }\n\n.navbar-form {\n  box-shadow: none; }\n  .navbar-form .form-control {\n    border-radius: 0;\n    border: 0;\n    padding: 0;\n    background-color: transparent;\n    height: 22px;\n    font-size: 16px;\n    line-height: 1.5;\n    color: #E3E3E3; }\n  .navbar-transparent .navbar-form .form-control,\n  [class*=\"navbar-ct\"] .navbar-form .form-control {\n    color: #FFFFFF;\n    border: 0;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.6); }\n\n.navbar-ct-blue {\n  background-color: #4ea7ff; }\n\n.navbar-ct-azure {\n  background-color: #63d8f1; }\n\n.navbar-ct-green {\n  background-color: #a1e82c; }\n\n.navbar-ct-orange {\n  background-color: #ffbc67; }\n\n.navbar-ct-red {\n  background-color: #fc727a; }\n\n.navbar-transparent {\n  padding-top: 15px;\n  background-color: transparent;\n  border-bottom: 1px solid transparent; }\n\n.navbar-toggle {\n  margin-top: 19px;\n  margin-bottom: 19px;\n  border: 0; }\n  .navbar-toggle .icon-bar {\n    background-color: #FFFFFF; }\n  .navbar-toggle .navbar-collapse,\n  .navbar-toggle .navbar-form {\n    border-color: transparent; }\n  .navbar-toggle.navbar-default .navbar-toggle:hover,\n  .navbar-toggle.navbar-default .navbar-toggle:focus {\n    background-color: transparent; }\n\n.footer {\n  background-color: #FFFFFF;\n  line-height: 20px; }\n  .footer nav > ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    font-weight: normal; }\n    .footer nav > ul a:not(.btn) {\n      color: #9A9A9A;\n      display: block;\n      margin-bottom: 3px; }\n      .footer nav > ul a:not(.btn):hover, .footer nav > ul a:not(.btn):focus {\n        color: #777777; }\n  .footer .social-area {\n    padding: 15px 0; }\n    .footer .social-area h5 {\n      padding-bottom: 15px; }\n  .footer .social-area > a:not(.btn) {\n    color: #9A9A9A;\n    display: inline-block;\n    vertical-align: top;\n    padding: 10px 5px;\n    font-size: 20px;\n    font-weight: normal;\n    line-height: 20px;\n    text-align: center; }\n    .footer .social-area > a:not(.btn):hover, .footer .social-area > a:not(.btn):focus {\n      color: #777777; }\n  .footer .copyright {\n    color: #777777;\n    padding: 10px 15px;\n    margin: 10px 3px;\n    line-height: 20px;\n    font-size: 14px; }\n  .footer hr {\n    border-color: #DDDDDD; }\n  .footer .title {\n    color: #777777; }\n\n.footer-default {\n  background-color: #F5F5F5; }\n\n.footer:not(.footer-big) nav > ul {\n  font-size: 14px; }\n  .footer:not(.footer-big) nav > ul li {\n    margin-left: 20px;\n    float: left; }\n  .footer:not(.footer-big) nav > ul a {\n    padding: 10px 0px;\n    margin: 10px 10px 10px 0px; }\n\n.dropdown-menu {\n  visibility: hidden;\n  margin: 0;\n  padding: 0;\n  border-radius: 10px;\n  display: block;\n  z-index: 9000;\n  position: absolute;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.125); }\n  .open .dropdown-menu {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    visibility: visible; }\n  .select .dropdown-menu {\n    border-radius: 0 0 10px 10px;\n    box-shadow: none;\n    transform-origin: 50% -40px;\n    transform: scale(1);\n    transition: all 150ms linear;\n    margin-top: -20px; }\n  .select.open .dropdown-menu {\n    margin-top: -1px; }\n  .dropdown-menu > li > a {\n    padding: 8px 16px;\n    color: #333333; }\n    .dropdown-menu > li > a img {\n      margin-top: -3px; }\n  .dropdown-menu > li > a:focus {\n    outline: 0 !important; }\n  .btn-group.select .dropdown-menu {\n    min-width: 100%; }\n  .dropdown-menu > li:first-child > a {\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px; }\n  .dropdown-menu > li:last-child > a {\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px; }\n  .select .dropdown-menu > li:first-child > a {\n    border-radius: 0;\n    border-bottom: 0 none; }\n  .dropdown-menu > li > a:hover,\n  .dropdown-menu > li > a:focus {\n    background-color: #F5F5F5;\n    color: #333333;\n    opacity: 1;\n    text-decoration: none; }\n  .dropdown-menu.dropdown-blue > li > a:hover,\n  .dropdown-menu.dropdown-blue > li > a:focus {\n    background-color: rgba(52, 114, 247, 0.2); }\n  .dropdown-menu.dropdown-azure > li > a:hover,\n  .dropdown-menu.dropdown-azure > li > a:focus {\n    background-color: rgba(29, 199, 234, 0.2); }\n  .dropdown-menu.ct-green > li > a:hover,\n  .dropdown-menu.ct-green > li > a:focus {\n    background-color: rgba(135, 203, 22, 0.2); }\n  .dropdown-menu.dropdown-orange > li > a:hover,\n  .dropdown-menu.dropdown-orange > li > a:focus {\n    background-color: rgba(255, 149, 0, 0.2); }\n  .dropdown-menu.dropdown-red > li > a:hover,\n  .dropdown-menu.dropdown-red > li > a:focus {\n    background-color: rgba(255, 74, 85, 0.2); }\n\n.dropdown-with-icons > li > a {\n  padding-left: 0px;\n  line-height: 28px; }\n\n.dropdown-with-icons i {\n  text-align: center;\n  line-height: 28px;\n  float: left; }\n  .dropdown-with-icons i[class^=\"pe-\"] {\n    font-size: 24px;\n    width: 46px; }\n  .dropdown-with-icons i[class^=\"fa\"] {\n    font-size: 14px;\n    width: 38px; }\n\n.btn-group.select {\n  overflow: hidden; }\n\n.btn-group.select.open {\n  overflow: visible; }\n\n.card {\n  border-radius: 4px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(63, 63, 68, 0.1);\n  background-color: #FFFFFF;\n  margin-bottom: 30px; }\n  .card .image {\n    width: 100%;\n    overflow: hidden;\n    height: 260px;\n    border-radius: 4px 4px 0 0;\n    position: relative;\n    transform-style: preserve-3d; }\n    .card .image img {\n      width: 100%; }\n  .card .filter {\n    position: absolute;\n    z-index: 2;\n    background-color: rgba(0, 0, 0, 0.68);\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    opacity: 0;\n    filter: alpha(opacity=0); }\n    .card .filter .btn {\n      position: relative;\n      top: 50%;\n      transform: translateY(-50%); }\n  .card:hover .filter {\n    opacity: 1;\n    filter: alpha(opacity=100); }\n  .card .btn-hover {\n    opacity: 0;\n    filter: alpha(opacity=0); }\n  .card:hover .btn-hover {\n    opacity: 1;\n    filter: alpha(opacity=100); }\n  .card .content {\n    padding: 15px 15px 10px 15px; }\n  .card .header {\n    padding: 15px 15px 0; }\n  .card .category,\n  .card label {\n    font-size: 14px;\n    font-weight: 400;\n    color: #9A9A9A;\n    margin-bottom: 0px; }\n    .card .category i,\n    .card label i {\n      font-size: 16px; }\n  .card label {\n    font-size: 12px;\n    margin-bottom: 5px;\n    text-transform: uppercase; }\n  .card .title {\n    margin: 0;\n    color: #333333;\n    font-weight: 300; }\n  .card .avatar {\n    width: 30px;\n    height: 30px;\n    overflow: hidden;\n    border-radius: 50%;\n    margin-right: 5px; }\n  .card .description {\n    font-size: 14px;\n    color: #333; }\n  .card .footer {\n    padding: 0;\n    background-color: transparent;\n    line-height: 30px; }\n    .card .footer .legend {\n      padding: 5px 0; }\n    .card .footer hr {\n      margin-top: 5px;\n      margin-bottom: 5px; }\n  .card .stats {\n    color: #a9a9a9; }\n  .card .footer div {\n    display: inline-block; }\n  .card .author {\n    font-size: 12px;\n    font-weight: 600;\n    text-transform: uppercase; }\n  .card .author i {\n    font-size: 14px; }\n  .card h6 {\n    font-size: 12px;\n    margin: 0; }\n  .card.card-separator:after {\n    height: 100%;\n    right: -15px;\n    top: 0;\n    width: 1px;\n    background-color: #DDDDDD;\n    content: \"\";\n    position: absolute; }\n  .card .ct-chart {\n    margin: 30px 0 30px;\n    height: 245px; }\n  .card .table tbody td:first-child,\n  .card .table thead th:first-child {\n    padding-left: 15px; }\n  .card .table tbody td:last-child,\n  .card .table thead th:last-child {\n    padding-right: 15px; }\n  .card .alert {\n    border-radius: 4px;\n    position: relative; }\n    .card .alert.alert-with-icon {\n      padding-left: 65px; }\n\n.card-user .image {\n  height: 110px; }\n\n.card-user .image-plain {\n  height: 0;\n  margin-top: 110px; }\n\n.card-user .author {\n  text-align: center;\n  text-transform: none;\n  margin-top: -70px; }\n\n.card-user .avatar {\n  width: 124px;\n  height: 124px;\n  border: 5px solid #FFFFFF;\n  position: relative;\n  margin-bottom: 15px; }\n  .card-user .avatar.border-gray {\n    border-color: #EEEEEE; }\n\n.card-user .title {\n  line-height: 24px; }\n\n.card-user .content {\n  min-height: 240px; }\n\n.card-user .footer,\n.card-price .footer {\n  padding: 5px 15px 10px; }\n\n.card-user hr,\n.card-price hr {\n  margin: 5px 15px; }\n\n.card-plain {\n  background-color: transparent;\n  box-shadow: none;\n  border-radius: 0; }\n  .card-plain .image {\n    border-radius: 4px; }\n\n.card-stats .icon-big {\n  font-size: 3em;\n  min-height: 64px; }\n  .card-stats .icon-big i {\n    font-weight: bold;\n    line-height: 59px; }\n\n.card-stats .numbers {\n  font-size: 2em;\n  text-align: right; }\n  .card-stats .numbers p {\n    margin: 0; }\n\n.ct-label {\n  fill: rgba(0, 0, 0, 0.4);\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 1.3rem;\n  line-height: 1; }\n\n.ct-chart-line .ct-label,\n.ct-chart-bar .ct-label {\n  display: block;\n  display: flex; }\n\n.ct-label.ct-horizontal.ct-start {\n  align-items: flex-end;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n\n.ct-label.ct-horizontal.ct-end {\n  align-items: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n\n.ct-label.ct-vertical.ct-start {\n  align-items: flex-end;\n  justify-content: flex-end;\n  text-align: right;\n  text-anchor: end; }\n\n.ct-label.ct-vertical.ct-end {\n  align-items: flex-end;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n\n.ct-chart-bar .ct-label.ct-horizontal.ct-start {\n  align-items: flex-end;\n  justify-content: center;\n  text-align: center;\n  text-anchor: start; }\n\n.ct-chart-bar .ct-label.ct-horizontal.ct-end {\n  align-items: flex-start;\n  justify-content: center;\n  text-align: center;\n  text-anchor: start; }\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-start {\n  align-items: flex-end;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-end {\n  align-items: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-start {\n  align-items: center;\n  justify-content: flex-end;\n  text-align: right;\n  text-anchor: end; }\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-end {\n  align-items: center;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: end; }\n\n.ct-grid {\n  stroke: rgba(0, 0, 0, 0.2);\n  stroke-width: 1px;\n  stroke-dasharray: 2px; }\n\n.ct-point {\n  stroke-width: 8px;\n  stroke-linecap: round; }\n\n.ct-line {\n  fill: none;\n  stroke-width: 3px; }\n\n.ct-area {\n  stroke: none;\n  fill-opacity: 0.8; }\n\n.ct-bar {\n  fill: none;\n  stroke-width: 10px; }\n\n.ct-slice-donut {\n  fill: none;\n  stroke-width: 60px; }\n\n.ct-series-a .ct-point, .ct-series-a .ct-line, .ct-series-a .ct-bar, .ct-series-a .ct-slice-donut {\n  stroke: #1DC7EA; }\n\n.ct-series-a .ct-slice-pie, .ct-series-a .ct-area {\n  fill: #1DC7EA; }\n\n.ct-series-b .ct-point, .ct-series-b .ct-line, .ct-series-b .ct-bar, .ct-series-b .ct-slice-donut {\n  stroke: #FB404B; }\n\n.ct-series-b .ct-slice-pie, .ct-series-b .ct-area {\n  fill: #FB404B; }\n\n.ct-series-c .ct-point, .ct-series-c .ct-line, .ct-series-c .ct-bar, .ct-series-c .ct-slice-donut {\n  stroke: #FFA534; }\n\n.ct-series-c .ct-slice-pie, .ct-series-c .ct-area {\n  fill: #FFA534; }\n\n.ct-series-d .ct-point, .ct-series-d .ct-line, .ct-series-d .ct-bar, .ct-series-d .ct-slice-donut {\n  stroke: #9368E9; }\n\n.ct-series-d .ct-slice-pie, .ct-series-d .ct-area {\n  fill: #9368E9; }\n\n.ct-series-e .ct-point, .ct-series-e .ct-line, .ct-series-e .ct-bar, .ct-series-e .ct-slice-donut {\n  stroke: #87CB16; }\n\n.ct-series-e .ct-slice-pie, .ct-series-e .ct-area {\n  fill: #87CB16; }\n\n.ct-series-f .ct-point, .ct-series-f .ct-line, .ct-series-f .ct-bar, .ct-series-f .ct-slice-donut {\n  stroke: #1b8dff; }\n\n.ct-series-f .ct-slice-pie, .ct-series-f .ct-area {\n  fill: #1b8dff; }\n\n.ct-series-g .ct-point, .ct-series-g .ct-line, .ct-series-g .ct-bar, .ct-series-g .ct-slice-donut {\n  stroke: #5e5e5e; }\n\n.ct-series-g .ct-slice-pie, .ct-series-g .ct-area {\n  fill: #5e5e5e; }\n\n.ct-series-h .ct-point, .ct-series-h .ct-line, .ct-series-h .ct-bar, .ct-series-h .ct-slice-donut {\n  stroke: #dd4b39; }\n\n.ct-series-h .ct-slice-pie, .ct-series-h .ct-area {\n  fill: #dd4b39; }\n\n.ct-series-i .ct-point, .ct-series-i .ct-line, .ct-series-i .ct-bar, .ct-series-i .ct-slice-donut {\n  stroke: #35465c; }\n\n.ct-series-i .ct-slice-pie, .ct-series-i .ct-area {\n  fill: #35465c; }\n\n.ct-series-j .ct-point, .ct-series-j .ct-line, .ct-series-j .ct-bar, .ct-series-j .ct-slice-donut {\n  stroke: #e52d27; }\n\n.ct-series-j .ct-slice-pie, .ct-series-j .ct-area {\n  fill: #e52d27; }\n\n.ct-series-k .ct-point, .ct-series-k .ct-line, .ct-series-k .ct-bar, .ct-series-k .ct-slice-donut {\n  stroke: #55acee; }\n\n.ct-series-k .ct-slice-pie, .ct-series-k .ct-area {\n  fill: #55acee; }\n\n.ct-series-l .ct-point, .ct-series-l .ct-line, .ct-series-l .ct-bar, .ct-series-l .ct-slice-donut {\n  stroke: #cc2127; }\n\n.ct-series-l .ct-slice-pie, .ct-series-l .ct-area {\n  fill: #cc2127; }\n\n.ct-series-m .ct-point, .ct-series-m .ct-line, .ct-series-m .ct-bar, .ct-series-m .ct-slice-donut {\n  stroke: #1769ff; }\n\n.ct-series-m .ct-slice-pie, .ct-series-m .ct-area {\n  fill: #1769ff; }\n\n.ct-series-n .ct-point, .ct-series-n .ct-line, .ct-series-n .ct-bar, .ct-series-n .ct-slice-donut {\n  stroke: #6188e2; }\n\n.ct-series-n .ct-slice-pie, .ct-series-n .ct-area {\n  fill: #6188e2; }\n\n.ct-series-o .ct-point, .ct-series-o .ct-line, .ct-series-o .ct-bar, .ct-series-o .ct-slice-donut {\n  stroke: #a748ca; }\n\n.ct-series-o .ct-slice-pie, .ct-series-o .ct-area {\n  fill: #a748ca; }\n\n.ct-square {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-square:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 100%; }\n  .ct-square:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-square > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-minor-second {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-minor-second:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 93.75%; }\n  .ct-minor-second:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-minor-second > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-second {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-second:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 88.88889%; }\n  .ct-major-second:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-major-second > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-minor-third {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-minor-third:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 83.33333%; }\n  .ct-minor-third:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-minor-third > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-third {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-third:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 80%; }\n  .ct-major-third:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-major-third > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-perfect-fourth {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-perfect-fourth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 75%; }\n  .ct-perfect-fourth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-perfect-fourth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-perfect-fifth {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-perfect-fifth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 66.66667%; }\n  .ct-perfect-fifth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-perfect-fifth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-minor-sixth {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-minor-sixth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 62.5%; }\n  .ct-minor-sixth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-minor-sixth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-golden-section {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-golden-section:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 61.8047%; }\n  .ct-golden-section:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-golden-section > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-sixth {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-sixth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 60%; }\n  .ct-major-sixth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-major-sixth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-minor-seventh {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-minor-seventh:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 56.25%; }\n  .ct-minor-seventh:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-minor-seventh > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-seventh {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-seventh:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 53.33333%; }\n  .ct-major-seventh:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-major-seventh > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-octave {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-octave:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 50%; }\n  .ct-octave:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-octave > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-tenth {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-tenth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 40%; }\n  .ct-major-tenth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-major-tenth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-eleventh {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-eleventh:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 37.5%; }\n  .ct-major-eleventh:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-major-eleventh > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-twelfth {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-twelfth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 33.33333%; }\n  .ct-major-twelfth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-major-twelfth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-double-octave {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-double-octave:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 25%; }\n  .ct-double-octave:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-double-octave > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n@media (min-width: 992px) {\n  .navbar-form {\n    margin-top: 21px;\n    margin-bottom: 21px;\n    padding-left: 5px;\n    padding-right: 5px; }\n  .navbar-nav > li > .dropdown-menu, .dropdown .dropdown-menu {\n    transform: scale(0);\n    transition: all 370ms cubic-bezier(0.34, 1.61, 0.7, 1); }\n  .navbar-nav > li.open > .dropdown-menu, .dropdown.open .dropdown-menu {\n    transform: scale(1);\n    transform-origin: 29px -50px; }\n  .navbar-nav > li > .dropdown-menu:before {\n    border-bottom: 11px solid rgba(0, 0, 0, 0.2);\n    border-left: 11px solid rgba(0, 0, 0, 0);\n    border-right: 11px solid rgba(0, 0, 0, 0);\n    content: \"\";\n    display: inline-block;\n    position: absolute;\n    left: 12px;\n    top: -11px; }\n  .navbar-nav > li > .dropdown-menu:after {\n    border-bottom: 11px solid #FFFFFF;\n    border-left: 11px solid rgba(0, 0, 0, 0);\n    border-right: 11px solid rgba(0, 0, 0, 0);\n    content: \"\";\n    display: inline-block;\n    position: absolute;\n    left: 12px;\n    top: -10px; }\n  .navbar-nav.navbar-right > li > .dropdown-menu:before {\n    left: auto;\n    right: 12px; }\n  .navbar-nav.navbar-right > li > .dropdown-menu:after {\n    left: auto;\n    right: 12px; }\n  .footer:not(.footer-big) nav > ul li:first-child {\n    margin-left: 0; }\n  body > .navbar-collapse.collapse {\n    display: none !important; }\n  .card form [class*=\"col-\"] {\n    padding: 6px; }\n  .card form [class*=\"col-\"]:first-child {\n    padding-left: 15px; }\n  .card form [class*=\"col-\"]:last-child {\n    padding-right: 15px; } }\n\n/*          Changes for small display      */\n@media (max-width: 991px) {\n  .main-panel {\n    width: 100%; }\n  .navbar-transparent {\n    padding-top: 15px;\n    background-color: rgba(0, 0, 0, 0.45); }\n  body {\n    position: relative; }\n  .main-panel {\n    transform: translate3d(0px, 0, 0);\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    left: 0; }\n  .navbar .container {\n    left: 0;\n    width: 100%;\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    position: relative; }\n  .navbar .navbar-collapse.collapse,\n  .navbar .navbar-collapse.collapse.in,\n  .navbar .navbar-collapse.collapsing {\n    display: none !important; }\n  .navbar-nav > li {\n    float: none;\n    position: relative;\n    display: block; }\n  .sidebar {\n    position: fixed;\n    display: block;\n    top: 0;\n    height: 100%;\n    width: 260px;\n    right: 0;\n    left: auto;\n    z-index: 1032;\n    visibility: visible;\n    background-color: #999;\n    overflow-y: visible;\n    border-top: none;\n    text-align: left;\n    padding: 0;\n    transform: translate3d(260px, 0, 0);\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1); }\n    .sidebar > ul {\n      position: relative;\n      z-index: 4;\n      overflow-y: scroll;\n      height: calc(100vh - 61px);\n      width: 100%; }\n    .sidebar::before {\n      top: 0;\n      left: 0;\n      height: 100%;\n      width: 100%;\n      position: absolute;\n      background-color: #282828;\n      display: block;\n      content: \"\";\n      z-index: 1; }\n    .sidebar .sidebar-wrapper .dropdown-menu > li:first-child > a,\n    .sidebar .sidebar-wrapper .dropdown-menu > li:last-child > a {\n      border-radius: 4px; }\n    .sidebar .sidebar-wrapper .dropdown-menu > li > a:hover,\n    .sidebar .sidebar-wrapper .dropdown-menu > li > a:focus {\n      color: white; }\n    .sidebar .sidebar-wrapper > .nav > div .nav {\n      margin-top: 10px;\n      float: none !important; }\n      .sidebar .sidebar-wrapper > .nav > div .nav > li > a {\n        margin: 0;\n        line-height: 30px;\n        font-size: 12px;\n        font-weight: 600;\n        text-transform: uppercase;\n        margin: 5px 15px; }\n    .sidebar .sidebar-wrapper > .nav > div .notification {\n      float: left;\n      line-height: 30px;\n      margin-right: 8px;\n      font-weight: 600; }\n    .sidebar .open .dropdown-menu {\n      position: static;\n      float: none;\n      width: auto;\n      margin-top: 0;\n      background-color: transparent;\n      border: 0;\n      box-shadow: none; }\n  .nav-open .sidebar {\n    transform: translate3d(0px, 0, 0); }\n  .nav-open .navbar .container {\n    left: -260px; }\n  .nav-open .main-panel {\n    left: 0;\n    transform: translate3d(-260px, 0, 0); }\n  .navbar-toggle .icon-bar {\n    display: block;\n    position: relative;\n    background: #fff;\n    width: 24px;\n    height: 2px;\n    border-radius: 1px;\n    margin: 0 auto; }\n  .navbar-header .navbar-toggle {\n    margin: 10px 15px 10px 0;\n    width: 40px;\n    height: 40px; }\n  .bar1,\n  .bar2,\n  .bar3 {\n    outline: 1px solid transparent; }\n  .bar1 {\n    top: 0px;\n    animation: topbar-back 500ms 0s;\n    animation-fill-mode: forwards; }\n  .bar2 {\n    opacity: 1; }\n  .bar3 {\n    bottom: 0px;\n    animation: bottombar-back 500ms 0s;\n    animation-fill-mode: forwards; }\n  .toggled .bar1 {\n    top: 6px;\n    animation: topbar-x 500ms 0s;\n    animation-fill-mode: forwards; }\n  .toggled .bar2 {\n    opacity: 0; }\n  .toggled .bar3 {\n    bottom: 6px;\n    animation: bottombar-x 500ms 0s;\n    animation-fill-mode: forwards; }\n  @keyframes topbar-x {\n    0% {\n      top: 0px;\n      transform: rotate(0deg); }\n    45% {\n      top: 6px;\n      transform: rotate(145deg); }\n    75% {\n      transform: rotate(130deg); }\n    100% {\n      transform: rotate(135deg); } }\n  @keyframes topbar-back {\n    0% {\n      top: 6px;\n      transform: rotate(135deg); }\n    45% {\n      transform: rotate(-10deg); }\n    75% {\n      transform: rotate(5deg); }\n    100% {\n      top: 0px;\n      transform: rotate(0); } }\n  @keyframes bottombar-x {\n    0% {\n      bottom: 0px;\n      transform: rotate(0deg); }\n    45% {\n      bottom: 6px;\n      transform: rotate(-145deg); }\n    75% {\n      transform: rotate(-130deg); }\n    100% {\n      transform: rotate(-135deg); } }\n  @keyframes bottombar-back {\n    0% {\n      bottom: 6px;\n      transform: rotate(-135deg); }\n    45% {\n      transform: rotate(10deg); }\n    75% {\n      transform: rotate(-5deg); }\n    100% {\n      bottom: 0px;\n      transform: rotate(0); } }\n  @keyframes fadeIn {\n    0% {\n      opacity: 0; }\n    100% {\n      opacity: 1; } }\n  .dropdown-menu .divider {\n    background-color: rgba(229, 229, 229, 0.15); }\n  .navbar-nav {\n    margin: 1px 0; }\n    .navbar-nav .open .dropdown-menu > li > a {\n      padding: 15px 15px 5px 50px; }\n    .navbar-nav .open .dropdown-menu > li:first-child > a {\n      padding: 5px 15px 5px 50px; }\n    .navbar-nav .open .dropdown-menu > li:last-child > a {\n      padding: 15px 15px 25px 50px; }\n  [class*=\"navbar-\"] .navbar-nav > li > a,\n  [class*=\"navbar-\"] .navbar-nav > li > a:hover,\n  [class*=\"navbar-\"] .navbar-nav > li > a:focus,\n  [class*=\"navbar-\"] .navbar-nav .active > a,\n  [class*=\"navbar-\"] .navbar-nav .active > a:hover,\n  [class*=\"navbar-\"] .navbar-nav .active > a:focus,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a:hover,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a:focus,\n  [class*=\"navbar-\"] .navbar-nav .navbar-nav .open .dropdown-menu > li > a:active {\n    color: white; }\n  [class*=\"navbar-\"] .navbar-nav > li > a,\n  [class*=\"navbar-\"] .navbar-nav > li > a:hover,\n  [class*=\"navbar-\"] .navbar-nav > li > a:focus,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a:hover,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a:focus {\n    opacity: .7;\n    background: transparent; }\n  [class*=\"navbar-\"] .navbar-nav.navbar-nav .open .dropdown-menu > li > a:active {\n    opacity: 1; }\n  [class*=\"navbar-\"] .navbar-nav .dropdown > a:hover .caret {\n    border-bottom-color: #777;\n    border-top-color: #777; }\n  [class*=\"navbar-\"] .navbar-nav .dropdown > a:active .caret {\n    border-bottom-color: white;\n    border-top-color: white; }\n  .dropdown-menu {\n    display: none; }\n  .navbar-fixed-top {\n    -webkit-backface-visibility: hidden; }\n  #bodyClick {\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    opacity: 0;\n    top: 0;\n    left: auto;\n    right: 250px;\n    content: \"\";\n    z-index: 9999;\n    overflow-x: hidden; }\n  .social-line .btn {\n    margin: 0 0 10px 0; }\n  .subscribe-line .form-control {\n    margin: 0 0 10px 0; }\n  .social-line.pull-right {\n    float: none; }\n  .footer nav.pull-left {\n    float: none !important; }\n  .footer:not(.footer-big) nav > ul li {\n    float: none; }\n  .social-area.pull-right {\n    float: none !important; }\n  .form-control + .form-control-feedback {\n    margin-top: -8px; }\n  .navbar-toggle:hover, .navbar-toggle:focus {\n    background-color: transparent !important; }\n  .btn.dropdown-toggle {\n    margin-bottom: 0; }\n  .media-post .author {\n    width: 20%;\n    float: none !important;\n    display: block;\n    margin: 0 auto 10px; }\n  .media-post .media-body {\n    width: 100%; }\n  .navbar-collapse.collapse {\n    height: 100% !important; }\n  .navbar-collapse.collapse.in {\n    display: block; }\n  .navbar-header .collapse, .navbar-toggle {\n    display: block !important; }\n  .navbar-header {\n    float: none; }\n  .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    box-shadow: none; }\n  .navbar-collapse .nav p {\n    font-size: 14px;\n    margin: 0; }\n  .navbar-collapse [class^=\"pe-7s-\"] {\n    float: left;\n    font-size: 20px;\n    margin-right: 10px; } }\n\n@media (min-width: 992px) {\n  .table-full-width {\n    margin-left: -15px;\n    margin-right: -15px; }\n  .table-responsive {\n    overflow: visible; } }\n\n@media (max-width: 991px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    -webkit-overflow-scrolling: touch; } }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/animate.min.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/assets/css/animate.min.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";/*!\nAnimate.css - http://daneden.me/animate\nLicensed under the MIT license - http://opensource.org/licenses/MIT\n\nCopyright (c) 2015 Daniel Eden\n*/.animated{animation-duration:1s;animation-fill-mode:both}.animated.infinite{animation-iteration-count:infinite}.animated.hinge{animation-duration:2s}.animated.bounceIn,.animated.bounceOut,.animated.flipOutX,.animated.flipOutY{animation-duration:.75s}@keyframes bounce{100%,20%,53%,80%,from{animation-timing-function:cubic-bezier(0.215,.61,.355,1);transform:translate3d(0,0,0)}40%,43%{animation-timing-function:cubic-bezier(0.755,.050,.855,.060);transform:translate3d(0,-30px,0)}70%{animation-timing-function:cubic-bezier(0.755,.050,.855,.060);transform:translate3d(0,-15px,0)}90%{transform:translate3d(0,-4px,0)}}.bounce{animation-name:bounce;transform-origin:center bottom}@keyframes flash{100%,50%,from{opacity:1}25%,75%{opacity:0}}.flash{animation-name:flash}@keyframes pulse{from{transform:scale3d(1,1,1)}50%{transform:scale3d(1.05,1.05,1.05)}100%{transform:scale3d(1,1,1)}}.pulse{animation-name:pulse}@keyframes rubberBand{from{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(0.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}100%{transform:scale3d(1,1,1)}}.rubberBand{animation-name:rubberBand}@keyframes shake{100%,from{transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{transform:translate3d(-10px,0,0)}20%,40%,60%,80%{transform:translate3d(10px,0,0)}}.shake{animation-name:shake}@keyframes swing{20%{transform:rotate3d(0,0,1,15deg)}40%{transform:rotate3d(0,0,1,-10deg)}60%{transform:rotate3d(0,0,1,5deg)}80%{transform:rotate3d(0,0,1,-5deg)}100%{transform:rotate3d(0,0,1,0deg)}}.swing{transform-origin:top center;animation-name:swing}@keyframes tada{from{transform:scale3d(1,1,1)}10%,20%{transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)}100%{transform:scale3d(1,1,1)}}.tada{animation-name:tada}@keyframes wobble{from{transform:none}15%{transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg)}30%{transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg)}45%{transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg)}60%{transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg)}75%{transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg)}100%{transform:none}}.wobble{animation-name:wobble}@keyframes jello{100%,11.1%,from{transform:none}22.2%{transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{transform:skewX(6.25deg) skewY(6.25deg)}44.4%{transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.jello{animation-name:jello;transform-origin:center}@keyframes bounceIn{100%,20%,40%,60%,80%,from{animation-timing-function:cubic-bezier(0.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}100%{opacity:1;transform:scale3d(1,1,1)}}.bounceIn{animation-name:bounceIn}@keyframes bounceInDown{100%,60%,75%,90%,from{animation-timing-function:cubic-bezier(0.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}100%{transform:none}}.bounceInDown{animation-name:bounceInDown}@keyframes bounceInLeft{100%,60%,75%,90%,from{animation-timing-function:cubic-bezier(0.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}100%{transform:none}}.bounceInLeft{animation-name:bounceInLeft}@keyframes bounceInRight{100%,60%,75%,90%,from{animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}100%{transform:none}}.bounceInRight{animation-name:bounceInRight}@keyframes bounceInUp{100%,60%,75%,90%,from{animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}100%{transform:translate3d(0,0,0)}}.bounceInUp{animation-name:bounceInUp}@keyframes bounceOut{20%{transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;transform:scale3d(1.1,1.1,1.1)}100%{opacity:0;transform:scale3d(.3,.3,.3)}}.bounceOut{animation-name:bounceOut}@keyframes bounceOutDown{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}100%{opacity:0;transform:translate3d(0,2000px,0)}}.bounceOutDown{animation-name:bounceOutDown}@keyframes bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0)}100%{opacity:0;transform:translate3d(-2000px,0,0)}}.bounceOutLeft{animation-name:bounceOutLeft}@keyframes bounceOutRight{20%{opacity:1;transform:translate3d(-20px,0,0)}100%{opacity:0;transform:translate3d(2000px,0,0)}}.bounceOutRight{animation-name:bounceOutRight}@keyframes bounceOutUp{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}100%{opacity:0;transform:translate3d(0,-2000px,0)}}.bounceOutUp{animation-name:bounceOutUp}@keyframes fadeIn{from{opacity:0}100%{opacity:1}}.fadeIn{animation-name:fadeIn}@keyframes fadeInDown{from{opacity:0;transform:translate3d(0,-100%,0)}100%{opacity:1;transform:none}}.fadeInDown{animation-name:fadeInDown}@keyframes fadeInDownBig{from{opacity:0;transform:translate3d(0,-2000px,0)}100%{opacity:1;transform:none}}.fadeInDownBig{animation-name:fadeInDownBig}@keyframes fadeInLeft{from{opacity:0;transform:translate3d(-100%,0,0)}100%{opacity:1;transform:none}}.fadeInLeft{animation-name:fadeInLeft}@keyframes fadeInLeftBig{from{opacity:0;transform:translate3d(-2000px,0,0)}100%{opacity:1;transform:none}}.fadeInLeftBig{animation-name:fadeInLeftBig}@keyframes fadeInRight{from{opacity:0;transform:translate3d(100%,0,0)}100%{opacity:1;transform:none}}.fadeInRight{animation-name:fadeInRight}@keyframes fadeInRightBig{from{opacity:0;transform:translate3d(2000px,0,0)}100%{opacity:1;transform:none}}.fadeInRightBig{animation-name:fadeInRightBig}@keyframes fadeInUp{from{opacity:0;transform:translate3d(0,100%,0)}100%{opacity:1;transform:none}}.fadeInUp{animation-name:fadeInUp}@keyframes fadeInUpBig{from{opacity:0;transform:translate3d(0,2000px,0)}100%{opacity:1;transform:none}}.fadeInUpBig{animation-name:fadeInUpBig}@keyframes fadeOut{from{opacity:1}100%{opacity:0}}.fadeOut{animation-name:fadeOut}@keyframes fadeOutDown{from{opacity:1}100%{opacity:0;transform:translate3d(0,100%,0)}}.fadeOutDown{animation-name:fadeOutDown}@keyframes fadeOutDownBig{from{opacity:1}100%{opacity:0;transform:translate3d(0,2000px,0)}}.fadeOutDownBig{animation-name:fadeOutDownBig}@keyframes fadeOutLeft{from{opacity:1}100%{opacity:0;transform:translate3d(-100%,0,0)}}.fadeOutLeft{animation-name:fadeOutLeft}@keyframes fadeOutLeftBig{from{opacity:1}100%{opacity:0;transform:translate3d(-2000px,0,0)}}.fadeOutLeftBig{animation-name:fadeOutLeftBig}@keyframes fadeOutRight{from{opacity:1}100%{opacity:0;transform:translate3d(100%,0,0)}}.fadeOutRight{animation-name:fadeOutRight}@keyframes fadeOutRightBig{from{opacity:1}100%{opacity:0;transform:translate3d(2000px,0,0)}}.fadeOutRightBig{animation-name:fadeOutRightBig}@keyframes fadeOutUp{from{opacity:1}100%{opacity:0;transform:translate3d(0,-100%,0)}}.fadeOutUp{animation-name:fadeOutUp}@keyframes fadeOutUpBig{from{opacity:1}100%{opacity:0;transform:translate3d(0,-2000px,0)}}.fadeOutUpBig{animation-name:fadeOutUpBig}@keyframes flip{from{transform:perspective(400px) rotate3d(0,1,0,-360deg);animation-timing-function:ease-out}40%{transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);animation-timing-function:ease-out}50%{transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);animation-timing-function:ease-in}80%{transform:perspective(400px) scale3d(.95,.95,.95);animation-timing-function:ease-in}100%{transform:perspective(400px);animation-timing-function:ease-in}}.animated.flip{-webkit-backface-visibility:visible;backface-visibility:visible;animation-name:flip}@keyframes flipInX{from{transform:perspective(400px) rotate3d(1,0,0,90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotate3d(1,0,0,-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotate3d(1,0,0,10deg);opacity:1}80%{transform:perspective(400px) rotate3d(1,0,0,-5deg)}100%{transform:perspective(400px)}}.flipInX{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipInX}@keyframes flipInY{from{transform:perspective(400px) rotate3d(0,1,0,90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotate3d(0,1,0,-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotate3d(0,1,0,10deg);opacity:1}80%{transform:perspective(400px) rotate3d(0,1,0,-5deg)}100%{transform:perspective(400px)}}.flipInY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipInY}@keyframes flipOutX{from{transform:perspective(400px)}30%{transform:perspective(400px) rotate3d(1,0,0,-20deg);opacity:1}100%{transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}}.flipOutX{animation-name:flipOutX;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}@keyframes flipOutY{from{transform:perspective(400px)}30%{transform:perspective(400px) rotate3d(0,1,0,-15deg);opacity:1}100%{transform:perspective(400px) rotate3d(0,1,0,90deg);opacity:0}}.flipOutY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipOutY}@keyframes lightSpeedIn{from{transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{transform:skewX(20deg);opacity:1}80%{transform:skewX(-5deg);opacity:1}100%{transform:none;opacity:1}}.lightSpeedIn{animation-name:lightSpeedIn;animation-timing-function:ease-out}@keyframes lightSpeedOut{from{opacity:1}100%{transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}.lightSpeedOut{animation-name:lightSpeedOut;animation-timing-function:ease-in}@keyframes rotateIn{from{transform-origin:center;transform:rotate3d(0,0,1,-200deg);opacity:0}100%{transform-origin:center;transform:none;opacity:1}}.rotateIn{animation-name:rotateIn}@keyframes rotateInDownLeft{from{transform-origin:left bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}100%{transform-origin:left bottom;transform:none;opacity:1}}.rotateInDownLeft{animation-name:rotateInDownLeft}@keyframes rotateInDownRight{from{transform-origin:right bottom;transform:rotate3d(0,0,1,45deg);opacity:0}100%{transform-origin:right bottom;transform:none;opacity:1}}.rotateInDownRight{animation-name:rotateInDownRight}@keyframes rotateInUpLeft{from{transform-origin:left bottom;transform:rotate3d(0,0,1,45deg);opacity:0}100%{transform-origin:left bottom;transform:none;opacity:1}}.rotateInUpLeft{animation-name:rotateInUpLeft}@keyframes rotateInUpRight{from{transform-origin:right bottom;transform:rotate3d(0,0,1,-90deg);opacity:0}100%{transform-origin:right bottom;transform:none;opacity:1}}.rotateInUpRight{animation-name:rotateInUpRight}@keyframes rotateOut{from{transform-origin:center;opacity:1}100%{transform-origin:center;transform:rotate3d(0,0,1,200deg);opacity:0}}.rotateOut{animation-name:rotateOut}@keyframes rotateOutDownLeft{from{transform-origin:left bottom;opacity:1}100%{transform-origin:left bottom;transform:rotate3d(0,0,1,45deg);opacity:0}}.rotateOutDownLeft{animation-name:rotateOutDownLeft}@keyframes rotateOutDownRight{from{transform-origin:right bottom;opacity:1}100%{transform-origin:right bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}}.rotateOutDownRight{animation-name:rotateOutDownRight}@keyframes rotateOutUpLeft{from{transform-origin:left bottom;opacity:1}100%{transform-origin:left bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}}.rotateOutUpLeft{animation-name:rotateOutUpLeft}@keyframes rotateOutUpRight{from{transform-origin:right bottom;opacity:1}100%{transform-origin:right bottom;transform:rotate3d(0,0,1,90deg);opacity:0}}.rotateOutUpRight{animation-name:rotateOutUpRight}@keyframes hinge{0%{transform-origin:top left;animation-timing-function:ease-in-out}20%,60%{transform:rotate3d(0,0,1,80deg);transform-origin:top left;animation-timing-function:ease-in-out}40%,80%{transform:rotate3d(0,0,1,60deg);transform-origin:top left;animation-timing-function:ease-in-out;opacity:1}100%{transform:translate3d(0,700px,0);opacity:0}}.hinge{animation-name:hinge}@keyframes rollIn{from{opacity:0;transform:translate3d(-100%,0,0) rotate3d(0,0,1,-120deg)}100%{opacity:1;transform:none}}.rollIn{animation-name:rollIn}@keyframes rollOut{from{opacity:1}100%{opacity:0;transform:translate3d(100%,0,0) rotate3d(0,0,1,120deg)}}.rollOut{animation-name:rollOut}@keyframes zoomIn{from{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}.zoomIn{animation-name:zoomIn}@keyframes zoomInDown{from{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);animation-timing-function:cubic-bezier(0.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(0.175,.885,.32,1)}}.zoomInDown{animation-name:zoomInDown}@keyframes zoomInLeft{from{opacity:0;transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);animation-timing-function:cubic-bezier(0.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(10px,0,0);animation-timing-function:cubic-bezier(0.175,.885,.32,1)}}.zoomInLeft{animation-name:zoomInLeft}@keyframes zoomInRight{from{opacity:0;transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);animation-timing-function:cubic-bezier(0.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);animation-timing-function:cubic-bezier(0.175,.885,.32,1)}}.zoomInRight{animation-name:zoomInRight}@keyframes zoomInUp{from{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);animation-timing-function:cubic-bezier(0.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(0.175,.885,.32,1)}}.zoomInUp{animation-name:zoomInUp}@keyframes zoomOut{from{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}100%{opacity:0}}.zoomOut{animation-name:zoomOut}@keyframes zoomOutDown{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(0.55,.055,.675,.19)}100%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform-origin:center bottom;animation-timing-function:cubic-bezier(0.175,.885,.32,1)}}.zoomOutDown{animation-name:zoomOutDown}@keyframes zoomOutLeft{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}100%{opacity:0;transform:scale(.1) translate3d(-2000px,0,0);transform-origin:left center}}.zoomOutLeft{animation-name:zoomOutLeft}@keyframes zoomOutRight{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}100%{opacity:0;transform:scale(.1) translate3d(2000px,0,0);transform-origin:right center}}.zoomOutRight{animation-name:zoomOutRight}@keyframes zoomOutUp{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(0.55,.055,.675,.19)}100%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform-origin:center bottom;animation-timing-function:cubic-bezier(0.175,.885,.32,1)}}.zoomOutUp{animation-name:zoomOutUp}@keyframes slideInDown{from{transform:translate3d(0,-100%,0);visibility:visible}100%{transform:translate3d(0,0,0)}}.slideInDown{animation-name:slideInDown}@keyframes slideInLeft{from{transform:translate3d(-100%,0,0);visibility:visible}100%{transform:translate3d(0,0,0)}}.slideInLeft{animation-name:slideInLeft}@keyframes slideInRight{from{transform:translate3d(100%,0,0);visibility:visible}100%{transform:translate3d(0,0,0)}}.slideInRight{animation-name:slideInRight}@keyframes slideInUp{from{transform:translate3d(0,100%,0);visibility:visible}100%{transform:translate3d(0,0,0)}}.slideInUp{animation-name:slideInUp}@keyframes slideOutDown{from{transform:translate3d(0,0,0)}100%{visibility:hidden;transform:translate3d(0,100%,0)}}.slideOutDown{animation-name:slideOutDown}@keyframes slideOutLeft{from{transform:translate3d(0,0,0)}100%{visibility:hidden;transform:translate3d(-100%,0,0)}}.slideOutLeft{animation-name:slideOutLeft}@keyframes slideOutRight{from{transform:translate3d(0,0,0)}100%{visibility:hidden;transform:translate3d(100%,0,0)}}.slideOutRight{animation-name:slideOutRight}@keyframes slideOutUp{from{transform:translate3d(0,0,0)}100%{visibility:hidden;transform:translate3d(0,-100%,0)}}.slideOutUp{animation-name:slideOutUp}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/demo.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/assets/css/demo.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*!\n\n=========================================================\n* Light Bootstrap Dashboard React - v1.3.0\n=========================================================\n\n* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react\n* Copyright 2019 Creative Tim (https://www.creative-tim.com)\n* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)\n\n* Coded by Creative Tim\n\n=========================================================\n\n* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n*/\n.fixed-plugin .button-container .github-btn{\n    display: inline-block;\n    font-size: 14px;\n}\n/*.fixed-plugin .button-container .github-btn .gh-btn,\n.fixed-plugin .button-container .github-btn .gh-count{\n    padding: 5px 7px 5px 7px;\n}*/\n.fixed-plugin .SocialMediaShareButton{\n    display: inline-block;\n    margin: 0 2px;\n}\n.fixed-plugin li > a,\n.fixed-plugin .badge{\n    transition: all .34s;\n    -webkit-transition: all .34s;\n    -moz-transition: all .34s;\n}\n\n.all-icons [class*=\"pe-\"]{\n    font-size: 40px;\n}\n.all-icons input{\n    border: 0;\n}\n.all-icons .font-icon-detail{\n    text-align: center;\n    padding: 45px 0px 30px;\n    border: 1px solid #e5e5e5;\n    border-radius: 6px;\n    margin: 15px 0;\n}\n.all-icons .font-icon-detail input{\n    margin: 25px auto 0;\n    width: 100%;\n    text-align: center;\n    display: block;\n    color: #aaa;\n    font-size: 13px;\n}\n\n#map{\n    position:relative;\n    width:100%;\n    height: calc(100% - 60px);\n}\n\n.places-buttons .btn{\n    margin-bottom: 30px\n}\n.sidebar .nav > li.active-pro{\n    position: absolute;\n    width: 100%;\n    bottom: 10px;\n}\n.sidebar .nav > li.active-pro a{\n    background: rgba(255, 255, 255, 0.14);\n    opacity: 1;\n    color: #FFFFFF;\n}\n\n.table-upgrade td:nth-child(2),\n.table-upgrade td:nth-child(3){\n    text-align: center;\n}\n\n.fixed-plugin{\n    position: absolute;\n    top: 180px;\n    right: 0;\n    width: 64px;\n    background: rgba(0,0,0,.3);\n    z-index: 1031;\n    border-radius: 8px 0 0 8px;\n    text-align: center;\n}\n.fixed-plugin .fa-cog{\n    color: #FFFFFF;\n    padding: 10px;\n    border-radius: 0 0 6px 6px;\n    width: auto;\n}\n.fixed-plugin .dropdown-menu{\n    right: 80px;\n    left: auto;\n    width: 290px;\n    border-radius: 10px;\n    padding: 0 10px;\n}\n.fixed-plugin .dropdown-menu:after, .fixed-plugin .dropdown-menu:before{\n    right: 10px;\n    margin-left: auto;\n    left: auto;\n}\n.fixed-plugin .fa-circle-thin{\n    color: #FFFFFF;\n}\n.fixed-plugin .active .fa-circle-thin{\n    color: #00bbff;\n}\n\n.footer-dropdown{\n\ttop: -120px !important;\n}\n\n.footer-dropdown:before, .footer-dropdown:after{\n\ttop: 300px !important;\n}\n\n.fixed-plugin .dropdown-menu > .active > a,\n.fixed-plugin .dropdown-menu > .active > a:hover,\n.fixed-plugin .dropdown-menu > .active > a:focus{\n    color: #777777;\n    text-align: center;\n}\n\n.fixed-plugin img{\n    border-radius: 0;\n    width: 100%;\n    max-height: 175px;\n    margin: 0 auto;\n}\n\n.fixed-plugin .badge{\n    border: 3px solid #FFFFFF;\n    border-radius: 50%;\n    cursor: pointer;\n    display: inline-block;\n    height: 23px;\n    margin-right: 5px;\n    position: relative;\n    width: 23px;\n}\n.fixed-plugin .badge.active,\n.fixed-plugin .badge:hover{\n    border-color: #00bbff;\n}\n\n.fixed-plugin .badge-white{\n    background-color: #FFFFFF;\n}\n.fixed-plugin .badge-black{\n    background-color: #1DC7EA;\n}\n.fixed-plugin .badge-azure{\n    background-color: #1DC7EA;\n}\n.fixed-plugin .badge-green{\n    background-color: #87CB16;\n}\n.fixed-plugin .badge-orange{\n    background-color: #FFA534;\n}\n.fixed-plugin .badge-purple{\n    background-color: #9368E9;\n}\n.fixed-plugin .badge-red{\n    background-color: #FB404B;\n}\n.fixed-plugin h5{\n    font-size: 14px;\n    margin: 10px;\n}\n.fixed-plugin .dropdown-menu li{\n    display: block;\n    padding: 5px 2px;\n    width: 25%;\n    float: left;\n}\n\n.fixed-plugin li.adjustments-line,\n.fixed-plugin li.header-title,\n.fixed-plugin li.button-container{\n    width: 100%;\n    height: 50px;\n    min-height: inherit;\n    text-align: center;\n}\n.fixed-plugin .pro-title{\n    margin: 10px 0 5px 0;\n    text-align: center;\n}\n\n.fixed-plugin #sharrreTitle{\n    text-align: center;\n    padding: 10px 0;\n    height: 50px;\n}\n\n.fixed-plugin li.header-title{\n    height: 30px;\n    line-height: 40px;\n    font-size: 12px;\n    font-weight: 600;\n    text-transform: uppercase;\n}\n\n.fixed-plugin .adjustments-line p{\n    float: left;\n    display: inline-block;\n    margin-bottom: 0;\n    font-size: 1em;\n}\n.fixed-plugin .adjustments-line .switch{\n    float: right;\n}\n.fixed-plugin .dropdown-menu > li.adjustments-line > a{\n      padding-right: 0;\n      padding-left: 0;\n      border-bottom: 1px solid #ddd;\n      margin: 0;\n}\n.fixed-plugin .dropdown-menu > li > a.img-holder{\n      font-size: 16px;\n      text-align: center;\n      border-radius: 10px;\n      background-color: #FFF;\n      border: 3px solid #FFF;\n      padding-left: 0;\n      padding-right: 0;\n      opacity: 1;\n      cursor: pointer;\n      max-height: 86px;\n      overflow: hidden;\n      padding: 0;\n}\n\n.fixed-plugin .dropdown-menu > li > a.switch-trigger:hover,\n.fixed-plugin .dropdown-menu > li > a.switch-trigger:focus{\n    background-color: transparent;\n}\n.fixed-plugin .dropdown-menu > li:hover > a.img-holder,\n.fixed-plugin .dropdown-menu > li:focus > a.img-holder{\n    border-color: rgba(0, 187, 255, 0.53);;\n}\n.fixed-plugin .dropdown-menu > .active > a.img-holder,\n.fixed-plugin .dropdown-menu > .active > a.img-holder{\n    border-color: #00bbff;\n    background-color: #FFFFFF;\n}\n\n.fixed-plugin .dropdown-menu > li > a img{\n    margin-top: auto;\n}\n\n.fixed-plugin .btn-social{\n    width: 50%;\n    display: block;\n    width: 48%;\n    float: left;\n    font-weight: 600;\n}\n.fixed-plugin .btn-social i{\n    margin-right: 5px;\n}\n.fixed-plugin .btn-social:first-child{\n    margin-right: 2%;\n}\n\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus{\n    opacity: 1;\n}\n\n\n@media (min-width: 992px){\n    .fixed-plugin .dropdown .dropdown-menu{\n         transform: translateY(-50%);\n         top: 27px;\n         opacity: 0;\n\n         transform-origin: 0 0;\n    }\n    .fixed-plugin .dropdown.open .dropdown-menu{\n         opacity: 1;\n         transform: translateY(-50%);\n\n         transform-origin: 0 0;\n    }\n\n    .fixed-plugin .dropdown-menu:before,\n    .fixed-plugin .dropdown-menu:after{\n        content: \"\";\n        display: inline-block;\n        position: absolute;\n        top: 50%;\n        width: 16px;\n        transform: translateY(-50%);\n        -webkit-transform: translateY(-50%);\n        -moz-transform: translateY(-50%);\n\n    }\n    .fixed-plugin .dropdown-menu:before{\n        border-bottom: 16px solid rgba(0, 0, 0, 0);\n        border-left: 16px solid rgba(0,0,0,0.2);\n        border-top: 16px solid rgba(0,0,0,0);\n        right: -16px;\n    }\n\n    .fixed-plugin .dropdown-menu:after{\n        border-bottom: 16px solid rgba(0, 0, 0, 0);\n        border-left: 16px solid #FFFFFF;\n        border-top: 16px solid rgba(0,0,0,0);\n        right: -15px;\n    }\n\n    .typo-line{\n        padding-left: 140px;\n        margin-bottom: 40px;\n        position: relative;\n    }\n\n    .typo-line .category{\n        transform: translateY(-50%);\n        top: 50%;\n        left: 0px;\n        position: absolute;\n    }\n\n    .fixed-plugin{\n        top: 300px;\n    }\n\n}\n\n@media (max-width: 991px){\n    .fixed-plugin .dropdown-menu{\n        right: 60px;\n        width: 220px;\n    }\n    .fixed-plugin .dropdown-menu li{\n        width: 50%;\n    }\n\n    .fixed-plugin li.adjustments-line,\n    .fixed-plugin li.header-title,\n    .fixed-plugin li.button-container{\n        width: 100%;\n        height: 55px;\n        min-height: inherit;\n    }\n\n    .fixed-plugin .adjustments-line .switch{\n        float: right;\n        margin: 0 0px;\n    }\n\n    .fixed-plugin li.header-title{\n        height: 40px;\n    }\n    .fixed-plugin .dropdown .dropdown-menu{\n        top: -170px;\n    }\n}\n\n.btn-social {\n  opacity: 0.85;\n  padding: 8px 9px;\n}\n.btn-social .fa {\n  font-size: 18px;\n  vertical-align: middle;\n  display: inline-block;\n}\n.btn-social.btn-round {\n  padding: 9px 10px;\n}\n.btn-social.btn-simple {\n  padding: 9px 5px;\n  font-size: 16px;\n}\n.btn-social.btn-simple .fa {\n  font-size: 20px;\n  position: relative;\n  top: -2px;\n  width: 24px;\n}\n\n.btn-facebook {\n  border-color: #3b5998;\n  color: #3b5998;\n}\n.btn-facebook:hover,\n.btn-facebook:focus,\n.btn-facebook:active,\n.btn-facebook.active,\n.open > .btn-facebook.dropdown-toggle {\n  background-color: transparent;\n  color: #3b5998;\n  border-color: #3b5998;\n  opacity: 1;\n}\n.btn-facebook:disabled,\n.btn-facebook[disabled],\n.btn-facebook.disabled {\n  background-color: transparent;\n  border-color: #3b5998;\n}\n.btn-facebook.btn-fill {\n  color: #ffffff;\n  background-color: #3b5998;\n  opacity: 0.9;\n}\n.btn-facebook.btn-fill:hover,\n.btn-facebook.btn-fill:focus,\n.btn-facebook.btn-fill:active,\n.btn-facebook.btn-fill.active,\n.open > .btn-facebook.btn-fill.dropdown-toggle {\n  background-color: #3b5998;\n  color: #ffffff;\n  opacity: 1;\n}\n.btn-twitter {\n  border-color: #55acee;\n  color: #55acee;\n}\n.btn-twitter:hover,\n.btn-twitter:focus,\n.btn-twitter:active,\n.btn-twitter.active,\n.open > .btn-twitter.dropdown-toggle {\n  background-color: transparent;\n  color: #55acee;\n  border-color: #55acee;\n  opacity: 1;\n}\n.btn-twitter:disabled,\n.btn-twitter[disabled],\n.btn-twitter.disabled {\n  background-color: transparent;\n  border-color: #55acee;\n}\n.btn-twitter.btn-fill {\n  color: #ffffff;\n  background-color: #55acee;\n  opacity: 0.9;\n}\n.btn-twitter.btn-fill:hover,\n.btn-twitter.btn-fill:focus,\n.btn-twitter.btn-fill:active,\n.btn-twitter.btn-fill.active,\n.open > .btn-twitter.btn-fill.dropdown-toggle {\n  background-color: #55acee;\n  color: #ffffff;\n  opacity: 1;\n}\n\n@media (min-width: 992px){\n    .typo-line{\n        padding-left: 140px;\n        margin-bottom: 40px;\n        position: relative;\n    }\n\n    .typo-line .category{\n        transform: translateY(-50%);\n        top: 50%;\n        left: 0px;\n        position: absolute;\n    }\n}\n\n.all-icons [class*=\"pe-\"]{\n    font-size: 40px;\n}\n.all-icons input{\n    border: 0;\n}\n.all-icons .font-icon-detail{\n    text-align: center;\n    padding: 45px 0px 30px;\n    border: 1px solid #e5e5e5;\n    border-radius: 6px;\n    margin: 15px 0;\n}\n.all-icons .font-icon-detail input{\n    margin: 25px auto 0;\n    width: 100%;\n    text-align: center;\n    display: block;\n    color: #aaa;\n    font-size: 13px;\n}\n\n#map{\n    position:relative;\n    width:100%;\n    height: calc(100% - 60px);\n}\n\n.places-buttons .btn{\n    margin-bottom: 30px\n}\n.sidebar .nav > li.active-pro{\n    position: absolute;\n    width: 100%;\n    bottom: 10px;\n}\n.sidebar .nav > li.active-pro a{\n    background: rgba(255, 255, 255, 0.14);\n    opacity: 1;\n    color: #FFFFFF;\n}\n\n.table-upgrade td:nth-child(2),\n.table-upgrade td:nth-child(3){\n    text-align: center;\n}\n.react-toggle {\n  touch-action: pan-x;\n\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  background-color: transparent;\n  border: 0;\n  padding: 0;\n\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n  -webkit-tap-highlight-color: transparent;\n}\n\n.react-toggle-screenreader-only {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.react-toggle--disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n  transition: opacity 0.25s;\n}\n\n.react-toggle-track {\n  width: 50px;\n  height: 24px;\n  padding: 0;\n  border-radius: 30px;\n  background-color: #4D4D4D;\n  transition: all 0.2s ease;\n}\n\n.react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {\n  background-color: #5d5d5d;\n}\n\n.react-toggle--checked .react-toggle-track {\n  background-color: #1fc6ea;\n}\n\n.react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {\n  background-color: #1fc6ea;\n}\n\n.react-toggle-track-check {\n  position: absolute;\n  width: 14px;\n  height: 10px;\n  top: 0px;\n  bottom: 0px;\n  margin-top: auto;\n  margin-bottom: auto;\n  line-height: 0;\n  left: 8px;\n  opacity: 0;\n  transition: opacity 0.25s ease;\n}\n\n.react-toggle--checked .react-toggle-track-check {\n  opacity: 1;\n  transition: opacity 0.25s ease;\n}\n\n.react-toggle-track-x {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  top: 0px;\n  bottom: 0px;\n  margin-top: auto;\n  margin-bottom: auto;\n  line-height: 0;\n  right: 10px;\n  opacity: 1;\n  transition: opacity 0.25s ease;\n}\n\n.react-toggle--checked .react-toggle-track-x {\n  opacity: 0;\n}\n\n.react-toggle-thumb {\n  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  width: 22px;\n  height: 22px;\n  border: 1px solid #4D4D4D;\n  border-radius: 50%;\n  background-color: #FAFAFA;\n  box-sizing: border-box;\n  transition: all 0.25s ease;\n\n  outline: 0;\n}\n\n.react-toggle--checked .react-toggle-thumb {\n  left: 27px;\n  border-color: #1fc6ea;\n}\n\n.github-btn {\n  font: bold 11px/14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  height: 20px;\n  overflow: hidden;\n}\n.gh-btn,\n.gh-count,\n.gh-ico {\n  float: left;\n}\n.gh-btn,\n.gh-count {\n  padding: 2px 5px 2px 4px;\n  color: #333;\n  text-decoration: none;\n  white-space: nowrap;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.gh-btn {\n  background-color: #eee;\n  background-image: linear-gradient(to bottom, #fcfcfc 0, #eee 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fcfcfc', endColorstr='#eeeeee', GradientType=0);\n  background-repeat: no-repeat;\n  border: 1px solid #d5d5d5;\n}\n.gh-btn:hover,\n.gh-btn:focus {\n  text-decoration: none;\n  background-color: #ddd;\n  background-image: linear-gradient(to bottom, #eee 0, #ddd 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#eeeeee', endColorstr='#dddddd', GradientType=0);\n  border-color: #ccc;\n}\n.gh-btn:active {\n  background-image: none;\n  background-color: #dcdcdc;\n  border-color: #b5b5b5;\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);\n}\n.gh-ico {\n  width: 14px;\n  height: 14px;\n  margin-right: 4px;\n  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCIgdmlld0JveD0iMTIgMTIgNDAgNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMTIgMTIgNDAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiMzMzMzMzMiIGQ9Ik0zMiAxMy40Yy0xMC41IDAtMTkgOC41LTE5IDE5YzAgOC40IDUuNSAxNS41IDEzIDE4YzEgMC4yIDEuMy0wLjQgMS4zLTAuOWMwLTAuNSAwLTEuNyAwLTMuMiBjLTUuMyAxLjEtNi40LTIuNi02LjQtMi42QzIwIDQxLjYgMTguOCA0MSAxOC44IDQxYy0xLjctMS4yIDAuMS0xLjEgMC4xLTEuMWMxLjkgMC4xIDIuOSAyIDIuOSAyYzEuNyAyLjkgNC41IDIuMSA1LjUgMS42IGMwLjItMS4yIDAuNy0yLjEgMS4yLTIuNmMtNC4yLTAuNS04LjctMi4xLTguNy05LjRjMC0yLjEgMC43LTMuNyAyLTUuMWMtMC4yLTAuNS0wLjgtMi40IDAuMi01YzAgMCAxLjYtMC41IDUuMiAyIGMxLjUtMC40IDMuMS0wLjcgNC44LTAuN2MxLjYgMCAzLjMgMC4yIDQuNyAwLjdjMy42LTIuNCA1LjItMiA1LjItMmMxIDIuNiAwLjQgNC42IDAuMiA1YzEuMiAxLjMgMiAzIDIgNS4xYzAgNy4zLTQuNSA4LjktOC43IDkuNCBjMC43IDAuNiAxLjMgMS43IDEuMyAzLjVjMCAyLjYgMCA0LjYgMCA1LjJjMCAwLjUgMC40IDEuMSAxLjMgMC45YzcuNS0yLjYgMTMtOS43IDEzLTE4LjFDNTEgMjEuOSA0Mi41IDEzLjQgMzIgMTMuNHoiLz48L3N2Zz4=');\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n.gh-count {\n  position: relative;\n  display: none; /* hidden to start */\n  margin-left: 4px;\n  background-color: #fafafa;\n  border: 1px solid #d4d4d4;\n}\n.gh-count:hover,\n.gh-count:focus {\n  color: #4183C4;\n}\n.gh-count:before,\n.gh-count:after {\n  content: '';\n  position: absolute;\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.gh-count:before {\n  top: 50%;\n  left: -3px;\n  margin-top: -4px;\n  border-width: 4px 4px 4px 0;\n  border-right-color: #fafafa;\n}\n.gh-count:after {\n  top: 50%;\n  left: -4px;\n  z-index: -1;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #d4d4d4;\n}\n.github-btn-large {\n  height: 30px;\n}\n.github-btn-large .gh-btn,\n.github-btn-large .gh-count {\n  padding: 3px 10px 3px 8px;\n  font-size: 16px;\n  line-height: 22px;\n  border-radius: 4px;\n}\n.github-btn-large .gh-ico {\n  width: 20px;\n  height: 20px;\n}\n.github-btn-large .gh-count {\n  margin-left: 6px;\n}\n.github-btn-large .gh-count:before {\n  left: -5px;\n  margin-top: -6px;\n  border-width: 6px 6px 6px 0;\n}\n.github-btn-large .gh-count:after {\n  left: -6px;\n  margin-top: -7px;\n  border-width: 7px 7px 7px 0;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/pe-icon-7-stroke.css":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/assets/css/pe-icon-7-stroke.css ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../fonts/Pe-icon-7-stroke.eot?d7yf1v */ "./src/assets/fonts/Pe-icon-7-stroke.eot?d7yf1v"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../fonts/Pe-icon-7-stroke.eot */ "./src/assets/fonts/Pe-icon-7-stroke.eot") + "?#iefixd7yf1v");
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../fonts/Pe-icon-7-stroke.woff?d7yf1v */ "./src/assets/fonts/Pe-icon-7-stroke.woff?d7yf1v"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../fonts/Pe-icon-7-stroke.ttf?d7yf1v */ "./src/assets/fonts/Pe-icon-7-stroke.ttf?d7yf1v"));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ../fonts/Pe-icon-7-stroke.svg?d7yf1v */ "./src/assets/fonts/Pe-icon-7-stroke.svg?d7yf1v") + "#Pe-icon-7-stroke");

// Module
exports.push([module.i, "/*!\n\n=========================================================\n* Light Bootstrap Dashboard React - v1.3.0\n=========================================================\n\n* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react\n* Copyright 2019 Creative Tim (https://www.creative-tim.com)\n* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)\n\n* Coded by Creative Tim\n\n=========================================================\n\n* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n*/\n@font-face {\n\tfont-family: 'Pe-icon-7-stroke';\n\tsrc:url(" + ___CSS_LOADER_URL___0___ + ");\n\tsrc:url(" + ___CSS_LOADER_URL___1___ + ") format('embedded-opentype'),\n\t\turl(" + ___CSS_LOADER_URL___2___ + ") format('woff'),\n\t\turl(" + ___CSS_LOADER_URL___3___ + ") format('truetype'),\n\t\turl(" + ___CSS_LOADER_URL___4___ + ") format('svg');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n[class^=\"pe-7s-\"], [class*=\" pe-7s-\"] {\n\tdisplay: inline-block;\n\tfont-family: 'Pe-icon-7-stroke';\n\tspeak: none;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-feature-settings: normal;\n\tfont-variant: normal;\n\ttext-transform: none;\n\tline-height: 1;\n\n\t/* Better Font Rendering =========== */\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\n.pe-7s-album:before {\n\tcontent: \"\\e6aa\";\n}\n.pe-7s-arc:before {\n\tcontent: \"\\e6ab\";\n}\n.pe-7s-back-2:before {\n\tcontent: \"\\e6ac\";\n}\n.pe-7s-bandaid:before {\n\tcontent: \"\\e6ad\";\n}\n.pe-7s-car:before {\n\tcontent: \"\\e6ae\";\n}\n.pe-7s-diamond:before {\n\tcontent: \"\\e6af\";\n}\n.pe-7s-door-lock:before {\n\tcontent: \"\\e6b0\";\n}\n.pe-7s-eyedropper:before {\n\tcontent: \"\\e6b1\";\n}\n.pe-7s-female:before {\n\tcontent: \"\\e6b2\";\n}\n.pe-7s-gym:before {\n\tcontent: \"\\e6b3\";\n}\n.pe-7s-hammer:before {\n\tcontent: \"\\e6b4\";\n}\n.pe-7s-headphones:before {\n\tcontent: \"\\e6b5\";\n}\n.pe-7s-helm:before {\n\tcontent: \"\\e6b6\";\n}\n.pe-7s-hourglass:before {\n\tcontent: \"\\e6b7\";\n}\n.pe-7s-leaf:before {\n\tcontent: \"\\e6b8\";\n}\n.pe-7s-magic-wand:before {\n\tcontent: \"\\e6b9\";\n}\n.pe-7s-male:before {\n\tcontent: \"\\e6ba\";\n}\n.pe-7s-map-2:before {\n\tcontent: \"\\e6bb\";\n}\n.pe-7s-next-2:before {\n\tcontent: \"\\e6bc\";\n}\n.pe-7s-paint-bucket:before {\n\tcontent: \"\\e6bd\";\n}\n.pe-7s-pendrive:before {\n\tcontent: \"\\e6be\";\n}\n.pe-7s-photo:before {\n\tcontent: \"\\e6bf\";\n}\n.pe-7s-piggy:before {\n\tcontent: \"\\e6c0\";\n}\n.pe-7s-plugin:before {\n\tcontent: \"\\e6c1\";\n}\n.pe-7s-refresh-2:before {\n\tcontent: \"\\e6c2\";\n}\n.pe-7s-rocket:before {\n\tcontent: \"\\e6c3\";\n}\n.pe-7s-settings:before {\n\tcontent: \"\\e6c4\";\n}\n.pe-7s-shield:before {\n\tcontent: \"\\e6c5\";\n}\n.pe-7s-smile:before {\n\tcontent: \"\\e6c6\";\n}\n.pe-7s-usb:before {\n\tcontent: \"\\e6c7\";\n}\n.pe-7s-vector:before {\n\tcontent: \"\\e6c8\";\n}\n.pe-7s-wine:before {\n\tcontent: \"\\e6c9\";\n}\n.pe-7s-cloud-upload:before {\n\tcontent: \"\\e68a\";\n}\n.pe-7s-cash:before {\n\tcontent: \"\\e68c\";\n}\n.pe-7s-close:before {\n\tcontent: \"\\e680\";\n}\n.pe-7s-bluetooth:before {\n\tcontent: \"\\e68d\";\n}\n.pe-7s-cloud-download:before {\n\tcontent: \"\\e68b\";\n}\n.pe-7s-way:before {\n\tcontent: \"\\e68e\";\n}\n.pe-7s-close-circle:before {\n\tcontent: \"\\e681\";\n}\n.pe-7s-id:before {\n\tcontent: \"\\e68f\";\n}\n.pe-7s-angle-up:before {\n\tcontent: \"\\e682\";\n}\n.pe-7s-wristwatch:before {\n\tcontent: \"\\e690\";\n}\n.pe-7s-angle-up-circle:before {\n\tcontent: \"\\e683\";\n}\n.pe-7s-world:before {\n\tcontent: \"\\e691\";\n}\n.pe-7s-angle-right:before {\n\tcontent: \"\\e684\";\n}\n.pe-7s-volume:before {\n\tcontent: \"\\e692\";\n}\n.pe-7s-angle-right-circle:before {\n\tcontent: \"\\e685\";\n}\n.pe-7s-users:before {\n\tcontent: \"\\e693\";\n}\n.pe-7s-angle-left:before {\n\tcontent: \"\\e686\";\n}\n.pe-7s-user-female:before {\n\tcontent: \"\\e694\";\n}\n.pe-7s-angle-left-circle:before {\n\tcontent: \"\\e687\";\n}\n.pe-7s-up-arrow:before {\n\tcontent: \"\\e695\";\n}\n.pe-7s-angle-down:before {\n\tcontent: \"\\e688\";\n}\n.pe-7s-switch:before {\n\tcontent: \"\\e696\";\n}\n.pe-7s-angle-down-circle:before {\n\tcontent: \"\\e689\";\n}\n.pe-7s-scissors:before {\n\tcontent: \"\\e697\";\n}\n.pe-7s-wallet:before {\n\tcontent: \"\\e600\";\n}\n.pe-7s-safe:before {\n\tcontent: \"\\e698\";\n}\n.pe-7s-volume2:before {\n\tcontent: \"\\e601\";\n}\n.pe-7s-volume1:before {\n\tcontent: \"\\e602\";\n}\n.pe-7s-voicemail:before {\n\tcontent: \"\\e603\";\n}\n.pe-7s-video:before {\n\tcontent: \"\\e604\";\n}\n.pe-7s-user:before {\n\tcontent: \"\\e605\";\n}\n.pe-7s-upload:before {\n\tcontent: \"\\e606\";\n}\n.pe-7s-unlock:before {\n\tcontent: \"\\e607\";\n}\n.pe-7s-umbrella:before {\n\tcontent: \"\\e608\";\n}\n.pe-7s-trash:before {\n\tcontent: \"\\e609\";\n}\n.pe-7s-tools:before {\n\tcontent: \"\\e60a\";\n}\n.pe-7s-timer:before {\n\tcontent: \"\\e60b\";\n}\n.pe-7s-ticket:before {\n\tcontent: \"\\e60c\";\n}\n.pe-7s-target:before {\n\tcontent: \"\\e60d\";\n}\n.pe-7s-sun:before {\n\tcontent: \"\\e60e\";\n}\n.pe-7s-study:before {\n\tcontent: \"\\e60f\";\n}\n.pe-7s-stopwatch:before {\n\tcontent: \"\\e610\";\n}\n.pe-7s-star:before {\n\tcontent: \"\\e611\";\n}\n.pe-7s-speaker:before {\n\tcontent: \"\\e612\";\n}\n.pe-7s-signal:before {\n\tcontent: \"\\e613\";\n}\n.pe-7s-shuffle:before {\n\tcontent: \"\\e614\";\n}\n.pe-7s-shopbag:before {\n\tcontent: \"\\e615\";\n}\n.pe-7s-share:before {\n\tcontent: \"\\e616\";\n}\n.pe-7s-server:before {\n\tcontent: \"\\e617\";\n}\n.pe-7s-search:before {\n\tcontent: \"\\e618\";\n}\n.pe-7s-film:before {\n\tcontent: \"\\e6a5\";\n}\n.pe-7s-science:before {\n\tcontent: \"\\e619\";\n}\n.pe-7s-disk:before {\n\tcontent: \"\\e6a6\";\n}\n.pe-7s-ribbon:before {\n\tcontent: \"\\e61a\";\n}\n.pe-7s-repeat:before {\n\tcontent: \"\\e61b\";\n}\n.pe-7s-refresh:before {\n\tcontent: \"\\e61c\";\n}\n.pe-7s-add-user:before {\n\tcontent: \"\\e6a9\";\n}\n.pe-7s-refresh-cloud:before {\n\tcontent: \"\\e61d\";\n}\n.pe-7s-paperclip:before {\n\tcontent: \"\\e69c\";\n}\n.pe-7s-radio:before {\n\tcontent: \"\\e61e\";\n}\n.pe-7s-note2:before {\n\tcontent: \"\\e69d\";\n}\n.pe-7s-print:before {\n\tcontent: \"\\e61f\";\n}\n.pe-7s-network:before {\n\tcontent: \"\\e69e\";\n}\n.pe-7s-prev:before {\n\tcontent: \"\\e620\";\n}\n.pe-7s-mute:before {\n\tcontent: \"\\e69f\";\n}\n.pe-7s-power:before {\n\tcontent: \"\\e621\";\n}\n.pe-7s-medal:before {\n\tcontent: \"\\e6a0\";\n}\n.pe-7s-portfolio:before {\n\tcontent: \"\\e622\";\n}\n.pe-7s-like2:before {\n\tcontent: \"\\e6a1\";\n}\n.pe-7s-plus:before {\n\tcontent: \"\\e623\";\n}\n.pe-7s-left-arrow:before {\n\tcontent: \"\\e6a2\";\n}\n.pe-7s-play:before {\n\tcontent: \"\\e624\";\n}\n.pe-7s-key:before {\n\tcontent: \"\\e6a3\";\n}\n.pe-7s-plane:before {\n\tcontent: \"\\e625\";\n}\n.pe-7s-joy:before {\n\tcontent: \"\\e6a4\";\n}\n.pe-7s-photo-gallery:before {\n\tcontent: \"\\e626\";\n}\n.pe-7s-pin:before {\n\tcontent: \"\\e69b\";\n}\n.pe-7s-phone:before {\n\tcontent: \"\\e627\";\n}\n.pe-7s-plug:before {\n\tcontent: \"\\e69a\";\n}\n.pe-7s-pen:before {\n\tcontent: \"\\e628\";\n}\n.pe-7s-right-arrow:before {\n\tcontent: \"\\e699\";\n}\n.pe-7s-paper-plane:before {\n\tcontent: \"\\e629\";\n}\n.pe-7s-delete-user:before {\n\tcontent: \"\\e6a7\";\n}\n.pe-7s-paint:before {\n\tcontent: \"\\e62a\";\n}\n.pe-7s-bottom-arrow:before {\n\tcontent: \"\\e6a8\";\n}\n.pe-7s-notebook:before {\n\tcontent: \"\\e62b\";\n}\n.pe-7s-note:before {\n\tcontent: \"\\e62c\";\n}\n.pe-7s-next:before {\n\tcontent: \"\\e62d\";\n}\n.pe-7s-news-paper:before {\n\tcontent: \"\\e62e\";\n}\n.pe-7s-musiclist:before {\n\tcontent: \"\\e62f\";\n}\n.pe-7s-music:before {\n\tcontent: \"\\e630\";\n}\n.pe-7s-mouse:before {\n\tcontent: \"\\e631\";\n}\n.pe-7s-more:before {\n\tcontent: \"\\e632\";\n}\n.pe-7s-moon:before {\n\tcontent: \"\\e633\";\n}\n.pe-7s-monitor:before {\n\tcontent: \"\\e634\";\n}\n.pe-7s-micro:before {\n\tcontent: \"\\e635\";\n}\n.pe-7s-menu:before {\n\tcontent: \"\\e636\";\n}\n.pe-7s-map:before {\n\tcontent: \"\\e637\";\n}\n.pe-7s-map-marker:before {\n\tcontent: \"\\e638\";\n}\n.pe-7s-mail:before {\n\tcontent: \"\\e639\";\n}\n.pe-7s-mail-open:before {\n\tcontent: \"\\e63a\";\n}\n.pe-7s-mail-open-file:before {\n\tcontent: \"\\e63b\";\n}\n.pe-7s-magnet:before {\n\tcontent: \"\\e63c\";\n}\n.pe-7s-loop:before {\n\tcontent: \"\\e63d\";\n}\n.pe-7s-look:before {\n\tcontent: \"\\e63e\";\n}\n.pe-7s-lock:before {\n\tcontent: \"\\e63f\";\n}\n.pe-7s-lintern:before {\n\tcontent: \"\\e640\";\n}\n.pe-7s-link:before {\n\tcontent: \"\\e641\";\n}\n.pe-7s-like:before {\n\tcontent: \"\\e642\";\n}\n.pe-7s-light:before {\n\tcontent: \"\\e643\";\n}\n.pe-7s-less:before {\n\tcontent: \"\\e644\";\n}\n.pe-7s-keypad:before {\n\tcontent: \"\\e645\";\n}\n.pe-7s-junk:before {\n\tcontent: \"\\e646\";\n}\n.pe-7s-info:before {\n\tcontent: \"\\e647\";\n}\n.pe-7s-home:before {\n\tcontent: \"\\e648\";\n}\n.pe-7s-help2:before {\n\tcontent: \"\\e649\";\n}\n.pe-7s-help1:before {\n\tcontent: \"\\e64a\";\n}\n.pe-7s-graph3:before {\n\tcontent: \"\\e64b\";\n}\n.pe-7s-graph2:before {\n\tcontent: \"\\e64c\";\n}\n.pe-7s-graph1:before {\n\tcontent: \"\\e64d\";\n}\n.pe-7s-graph:before {\n\tcontent: \"\\e64e\";\n}\n.pe-7s-global:before {\n\tcontent: \"\\e64f\";\n}\n.pe-7s-gleam:before {\n\tcontent: \"\\e650\";\n}\n.pe-7s-glasses:before {\n\tcontent: \"\\e651\";\n}\n.pe-7s-gift:before {\n\tcontent: \"\\e652\";\n}\n.pe-7s-folder:before {\n\tcontent: \"\\e653\";\n}\n.pe-7s-flag:before {\n\tcontent: \"\\e654\";\n}\n.pe-7s-filter:before {\n\tcontent: \"\\e655\";\n}\n.pe-7s-file:before {\n\tcontent: \"\\e656\";\n}\n.pe-7s-expand1:before {\n\tcontent: \"\\e657\";\n}\n.pe-7s-exapnd2:before {\n\tcontent: \"\\e658\";\n}\n.pe-7s-edit:before {\n\tcontent: \"\\e659\";\n}\n.pe-7s-drop:before {\n\tcontent: \"\\e65a\";\n}\n.pe-7s-drawer:before {\n\tcontent: \"\\e65b\";\n}\n.pe-7s-download:before {\n\tcontent: \"\\e65c\";\n}\n.pe-7s-display2:before {\n\tcontent: \"\\e65d\";\n}\n.pe-7s-display1:before {\n\tcontent: \"\\e65e\";\n}\n.pe-7s-diskette:before {\n\tcontent: \"\\e65f\";\n}\n.pe-7s-date:before {\n\tcontent: \"\\e660\";\n}\n.pe-7s-cup:before {\n\tcontent: \"\\e661\";\n}\n.pe-7s-culture:before {\n\tcontent: \"\\e662\";\n}\n.pe-7s-crop:before {\n\tcontent: \"\\e663\";\n}\n.pe-7s-credit:before {\n\tcontent: \"\\e664\";\n}\n.pe-7s-copy-file:before {\n\tcontent: \"\\e665\";\n}\n.pe-7s-config:before {\n\tcontent: \"\\e666\";\n}\n.pe-7s-compass:before {\n\tcontent: \"\\e667\";\n}\n.pe-7s-comment:before {\n\tcontent: \"\\e668\";\n}\n.pe-7s-coffee:before {\n\tcontent: \"\\e669\";\n}\n.pe-7s-cloud:before {\n\tcontent: \"\\e66a\";\n}\n.pe-7s-clock:before {\n\tcontent: \"\\e66b\";\n}\n.pe-7s-check:before {\n\tcontent: \"\\e66c\";\n}\n.pe-7s-chat:before {\n\tcontent: \"\\e66d\";\n}\n.pe-7s-cart:before {\n\tcontent: \"\\e66e\";\n}\n.pe-7s-camera:before {\n\tcontent: \"\\e66f\";\n}\n.pe-7s-call:before {\n\tcontent: \"\\e670\";\n}\n.pe-7s-calculator:before {\n\tcontent: \"\\e671\";\n}\n.pe-7s-browser:before {\n\tcontent: \"\\e672\";\n}\n.pe-7s-box2:before {\n\tcontent: \"\\e673\";\n}\n.pe-7s-box1:before {\n\tcontent: \"\\e674\";\n}\n.pe-7s-bookmarks:before {\n\tcontent: \"\\e675\";\n}\n.pe-7s-bicycle:before {\n\tcontent: \"\\e676\";\n}\n.pe-7s-bell:before {\n\tcontent: \"\\e677\";\n}\n.pe-7s-battery:before {\n\tcontent: \"\\e678\";\n}\n.pe-7s-ball:before {\n\tcontent: \"\\e679\";\n}\n.pe-7s-back:before {\n\tcontent: \"\\e67a\";\n}\n.pe-7s-attention:before {\n\tcontent: \"\\e67b\";\n}\n.pe-7s-anchor:before {\n\tcontent: \"\\e67c\";\n}\n.pe-7s-albums:before {\n\tcontent: \"\\e67d\";\n}\n.pe-7s-alarm:before {\n\tcontent: \"\\e67e\";\n}\n.pe-7s-airplay:before {\n\tcontent: \"\\e67f\";\n}\n", ""]);



/***/ }),

/***/ "./src/assets/css/animate.min.css":
/*!****************************************!*\
  !*** ./src/assets/css/animate.min.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./animate.min.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/animate.min.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./animate.min.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/animate.min.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./animate.min.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/animate.min.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/assets/css/demo.css":
/*!*********************************!*\
  !*** ./src/assets/css/demo.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./demo.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/demo.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./demo.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/demo.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./demo.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/demo.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/assets/css/pe-icon-7-stroke.css":
/*!*********************************************!*\
  !*** ./src/assets/css/pe-icon-7-stroke.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./pe-icon-7-stroke.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/pe-icon-7-stroke.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./pe-icon-7-stroke.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/pe-icon-7-stroke.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./pe-icon-7-stroke.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/pe-icon-7-stroke.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/assets/fonts/Pe-icon-7-stroke.eot":
/*!***********************************************!*\
  !*** ./src/assets/fonts/Pe-icon-7-stroke.eot ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Pe-icon-7-stroke.71394c0c.eot";

/***/ }),

/***/ "./src/assets/fonts/Pe-icon-7-stroke.eot?d7yf1v":
/*!******************************************************!*\
  !*** ./src/assets/fonts/Pe-icon-7-stroke.eot?d7yf1v ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Pe-icon-7-stroke.71394c0c.eot";

/***/ }),

/***/ "./src/assets/fonts/Pe-icon-7-stroke.svg?d7yf1v":
/*!******************************************************!*\
  !*** ./src/assets/fonts/Pe-icon-7-stroke.svg?d7yf1v ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Pe-icon-7-stroke.c45f7de0.svg";

/***/ }),

/***/ "./src/assets/fonts/Pe-icon-7-stroke.ttf?d7yf1v":
/*!******************************************************!*\
  !*** ./src/assets/fonts/Pe-icon-7-stroke.ttf?d7yf1v ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Pe-icon-7-stroke.01798bc1.ttf";

/***/ }),

/***/ "./src/assets/fonts/Pe-icon-7-stroke.woff?d7yf1v":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/Pe-icon-7-stroke.woff?d7yf1v ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Pe-icon-7-stroke.b38ef310.woff";

/***/ }),

/***/ "./src/assets/img/faces/face-3.jpg":
/*!*****************************************!*\
  !*** ./src/assets/img/faces/face-3.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/face-3.ce7a6b79.jpg";

/***/ }),

/***/ "./src/assets/img/nba_PNG20.png":
/*!**************************************!*\
  !*** ./src/assets/img/nba_PNG20.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/nba_PNG20.e69a6812.png";

/***/ }),



/***/ "./src/assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0":
/*!**********************************************************************!*\
  !*** ./src/assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0 ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./light-bootstrap-dashboard-react.scss?v=1.3.0 */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./light-bootstrap-dashboard-react.scss?v=1.3.0 */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./light-bootstrap-dashboard-react.scss?v=1.3.0 */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Card/Card.jsx":
/*!**************************************!*\
  !*** ./src/components/Card/Card.jsx ***!
  \**************************************/
/*! exports provided: Card, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jeffreychow/Documents/GitHub/light-bootstrap-dashboard-react-master/src/components/Card/Card.jsx";

/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

class Card extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card" + (this.props.plain ? " card-plain" : ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header" + (this.props.hCenter ? " text-center" : ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, this.props.category)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content" + (this.props.ctAllIcons ? " all-icons" : "") + (this.props.ctTableFullWidth ? " table-full-width" : "") + (this.props.ctTableResponsive ? " table-responsive" : "") + (this.props.ctTableUpgrade ? " table-upgrade" : ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, this.props.content, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, this.props.legend, this.props.stats != null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }) : "", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "stats",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: this.props.statsIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), " ", this.props.stats))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/components/CustomButton/CustomButton.jsx":
/*!******************************************************!*\
  !*** ./src/components/CustomButton/CustomButton.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_jeffreychow_Documents_GitHub_light_bootstrap_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/jeffreychow/Documents/GitHub/light-bootstrap-dashboard-react-master/src/components/CustomButton/CustomButton.jsx";

/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





class CustomButton extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    const _this$props = this.props,
          fill = _this$props.fill,
          simple = _this$props.simple,
          pullRight = _this$props.pullRight,
          round = _this$props.round,
          block = _this$props.block,
          rest = Object(_Users_jeffreychow_Documents_GitHub_light_bootstrap_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["fill", "simple", "pullRight", "round", "block"]);

    const btnClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      "btn-fill": fill,
      "btn-simple": simple,
      "pull-right": pullRight,
      "btn-block": block,
      "btn-round": round
    });
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], Object.assign({
      className: btnClasses
    }, rest, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }));
  }

}

CustomButton.propTypes = {
  fill: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  simple: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  pullRight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  block: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  round: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (CustomButton);

/***/ }),

/***/ "./src/components/CustomCheckbox/CustomCheckbox.jsx":
/*!**********************************************************!*\
  !*** ./src/components/CustomCheckbox/CustomCheckbox.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_jeffreychow_Documents_GitHub_light_bootstrap_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/jeffreychow/Documents/GitHub/light-bootstrap-dashboard-react-master/src/components/CustomCheckbox/CustomCheckbox.jsx";

/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


class CustomCheckbox extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      is_checked: props.isChecked ? true : false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      is_checked: !this.state.is_checked
    });
  }

  render() {
    const _this$props = this.props,
          isChecked = _this$props.isChecked,
          number = _this$props.number,
          label = _this$props.label,
          inline = _this$props.inline,
          rest = Object(_Users_jeffreychow_Documents_GitHub_light_bootstrap_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["isChecked", "number", "label", "inline"]);

    const classes = inline !== undefined ? "checkbox checkbox-inline" : "checkbox";
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", Object.assign({
      id: number,
      type: "checkbox",
      onChange: this.handleClick,
      checked: this.state.is_checked
    }, rest, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: number,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, label));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CustomCheckbox);

/***/ }),

/***/ "./src/components/FixedPlugin/FixedPlugin.jsx":
/*!****************************************************!*\
  !*** ./src/components/FixedPlugin/FixedPlugin.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toggle */ "./node_modules/react-toggle/dist/component/index.js");
/* harmony import */ var react_toggle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toggle__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jeffreychow/Documents/GitHub/light-bootstrap-dashboard-react-master/src/components/FixedPlugin/FixedPlugin.jsx";

/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

/*eslint-disable*/







class FixedPlugin extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.handleClick = () => {
      this.props.handleFixedClick();
    };

    this.onChangeClick = () => {
      this.props.handleHasImage(!this.state.bg_checked);
      this.setState({
        bg_checked: !this.state.bg_checked
      });
    };

    this.state = {
      classes: "dropdown show-dropdown open",
      bg_checked: true,
      bgImage: this.props.bgImage
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "fixed-plugin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "fixedPluginClasses",
      className: this.props.fixedClasses,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.handleClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-cog fa-2x",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "dropdown-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "header-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "Configuration"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "adjustments-line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "pull-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Background Image"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pull-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_toggle__WEBPACK_IMPORTED_MODULE_1___default.a, {
      defaultChecked: this.state.bg_checked,
      onChange: this.onChangeClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "clearfix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "adjustments-line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "switch-trigger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Filters"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pull-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: this.props.bgColor === "black" ? "badge filter active" : "badge filter",
      "data-color": "black",
      onClick: () => {
        this.props.handleColorClick("black");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: this.props.bgColor === "azure" ? "badge filter badge-azure active" : "badge filter badge-azure",
      "data-color": "azure",
      onClick: () => {
        this.props.handleColorClick("azure");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: this.props.bgColor === "green" ? "badge filter badge-green active" : "badge filter badge-green",
      "data-color": "green",
      onClick: () => {
        this.props.handleColorClick("green");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: this.props.bgColor === "orange" ? "badge filter badge-orange active" : "badge filter badge-orange",
      "data-color": "orange",
      onClick: () => {
        this.props.handleColorClick("orange");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: this.props.bgColor === "red" ? "badge filter badge-red active" : "badge filter badge-red",
      "data-color": "red",
      onClick: () => {
        this.props.handleColorClick("red");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: this.props.bgColor === "purple" ? "badge filter badge-purple active" : "badge filter badge-purple",
      "data-color": "purple",
      onClick: () => {
        this.props.handleColorClick("purple");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "clearfix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "header-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, "Sidebar Images"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: this.state["bgImage"] === assets_img_sidebar_1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a ? "active" : "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "img-holder switch-trigger",
      onClick: () => {
        this.setState({
          bgImage: assets_img_sidebar_1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a
        });
        this.props.handleImageClick(assets_img_sidebar_1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: assets_img_sidebar_1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
      alt: "...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: this.state["bgImage"] === assets_img_sidebar_2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a ? "active" : "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "img-holder switch-trigger",
      onClick: () => {
        this.setState({
          bgImage: assets_img_sidebar_2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a
        });
        this.props.handleImageClick(assets_img_sidebar_2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: assets_img_sidebar_2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: this.state["bgImage"] === assets_img_sidebar_3_jpg__WEBPACK_IMPORTED_MODULE_4___default.a ? "active" : "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "img-holder switch-trigger",
      onClick: () => {
        this.setState({
          bgImage: assets_img_sidebar_3_jpg__WEBPACK_IMPORTED_MODULE_4___default.a
        });
        this.props.handleImageClick(assets_img_sidebar_3_jpg__WEBPACK_IMPORTED_MODULE_4___default.a);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: assets_img_sidebar_3_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: this.state["bgImage"] === assets_img_sidebar_4_jpg__WEBPACK_IMPORTED_MODULE_5___default.a ? "active" : "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "img-holder switch-trigger",
      onClick: () => {
        this.setState({
          bgImage: assets_img_sidebar_4_jpg__WEBPACK_IMPORTED_MODULE_5___default.a
        });
        this.props.handleImageClick(assets_img_sidebar_4_jpg__WEBPACK_IMPORTED_MODULE_5___default.a);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: assets_img_sidebar_4_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
      alt: "...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "button-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://www.creative-tim.com/product/light-bootstrap-dashboard-react?ref=lbdr-fixed-plugin",
      target: "_blank",
      className: "btn btn-success btn-block btn-fill",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, "Download free!"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "button-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react?ref=lbdr-fixed-plugin",
      target: "_blank",
      className: "btn btn-warning btn-block btn-fill",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, "Buy Pro"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "button-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://demos.creative-tim.com/light-bootstrap-dashboard-react/#/documentation/getting-started?ref=lbdr-fixed-plugin",
      target: "_blank",
      className: "btn btn-fill btn-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, "Documentation")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FixedPlugin);

/***/ }),

/***/ "./src/components/Footer/Footer.jsx":
/*!******************************************!*\
  !*** ./src/components/Footer/Footer.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/Users/jeffreychow/Documents/GitHub/light-bootstrap-dashboard-react-master/src/components/Footer/Footer.jsx";

/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/



class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
      className: "footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      fluid: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      className: "pull-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#pablo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#pablo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Company")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#pablo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "Portfolio")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#pablo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "Blog")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "copyright pull-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "\xA9 ", new Date().getFullYear(), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "http://www.creative-tim.com?ref=lbr-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Creative Tim"), ", made with love for a better web")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/FormInputs/FormInputs.jsx":
/*!**************************************************!*\
  !*** ./src/components/FormInputs/FormInputs.jsx ***!
  \**************************************************/
/*! exports provided: FormInputs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInputs", function() { return FormInputs; });
/* harmony import */ var _Users_jeffreychow_Documents_GitHub_light_bootstrap_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

var _jsxFileName = "/Users/jeffreychow/Documents/GitHub/light-bootstrap-dashboard-react-master/src/components/FormInputs/FormInputs.jsx";

/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/



function FieldGroup(_ref) {
  let label = _ref.label,
      props = Object(_Users_jeffreychow_Documents_GitHub_light_bootstrap_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["label"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ControlLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, label), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormControl"], Object.assign({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })));
}

class FormInputs extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    var row = [];

    for (var i = 0; i < this.props.ncols.length; i++) {
      row.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: i,
        className: this.props.ncols[i],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldGroup, Object.assign({}, this.props.properties[i], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }))));
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, row);
  }

}
/* harmony default export */ __webpack_exports__["default"] = (FormInputs);

/***/ }),

/***/ "./src/components/Navbars/AdminNavbar.jsx":
/*!************************************************!*\
  !*** ./src/components/Navbars/AdminNavbar.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _AdminNavbarLinks_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminNavbarLinks.jsx */ "./src/components/Navbars/AdminNavbarLinks.jsx");
var _jsxFileName = "/Users/jeffreychow/Documents/GitHub/light-bootstrap-dashboard-react-master/src/components/Navbars/AdminNavbar.jsx";

/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
    this.state = {
      sidebarExists: false
    };
  }

  mobileSidebarToggle(e) {
    if (this.state.sidebarExists === false) {
      this.setState({
        sidebarExists: true
      });
    }

    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";

    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };

    document.body.appendChild(node);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
      fluid: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Header, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#pablo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, this.props.brandText)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Toggle, {
      onClick: this.mobileSidebarToggle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Collapse, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AdminNavbarLinks_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Navbars/AdminNavbarLinks.jsx":
/*!*****************************************************!*\
  !*** ./src/components/Navbars/AdminNavbarLinks.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/Users/jeffreychow/Documents/GitHub/light-bootstrap-dashboard-react-master/src/components/Navbars/AdminNavbarLinks.jsx";

/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/



class AdminNavbarLinks extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const notification = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-globe",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      className: "caret",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "notification",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "5"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "hidden-lg hidden-md",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Notification"));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      eventKey: 1,
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-dashboard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "hidden-lg hidden-md",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Dashboard")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"], {
      eventKey: 2,
      title: notification,
      noCaret: true,
      id: "basic-nav-dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
      eventKey: 2.1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Notification 1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
      eventKey: 2.2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Notification 2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
      eventKey: 2.3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Notification 3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
      eventKey: 2.4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Notification 4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
      eventKey: 2.5,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Another notifications")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      eventKey: 3,
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-search",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "hidden-lg hidden-md",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Search"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
      pullRight: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      eventKey: 1,
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "Account"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"], {
      eventKey: 2,
      title: "Dropdown",
      id: "basic-nav-dropdown-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
      eventKey: 2.1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
      eventKey: 2.2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "Another action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
      eventKey: 2.3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "Something"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
      eventKey: 2.4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "Another action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
      eventKey: 2.5,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "Something"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
      divider: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
      eventKey: 2.5,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "Separated link")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      eventKey: 3,
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "Log out")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AdminNavbarLinks);

/***/ }),

/***/ "./src/components/Sidebar/Sidebar.jsx":
/*!********************************************!*\
  !*** ./src/components/Sidebar/Sidebar.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Navbars_AdminNavbarLinks_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Navbars/AdminNavbarLinks.jsx */ "./src/components/Navbars/AdminNavbarLinks.jsx");
/* harmony import */ var assets_img_nba_PNG20_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/img/nba_PNG20.png */ "./src/assets/img/nba_PNG20.png");
/* harmony import */ var assets_img_nba_PNG20_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_img_nba_PNG20_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/jeffreychow/Documents/GitHub/light-bootstrap-dashboard-react-master/src/components/Sidebar/Sidebar.jsx";





class Sidebar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }

  updateDimensions() {
    this.setState({
      width: window.innerWidth
    });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    const sidebarBackground = {
      backgroundImage: "url(" + this.props.image + ")"
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "sidebar",
      className: "sidebar",
      "data-color": this.props.color,
      "data-image": this.props.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, this.props.hasImage ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sidebar-background",
      style: sidebarBackground,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://www.creative-tim.com?ref=lbd-sidebar",
      className: "simple-text logo-mini",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "logo-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: assets_img_nba_PNG20_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "logo_image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "simple-text logo-normal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "JC Tracker")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sidebar-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, this.state.width <= 991 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbars_AdminNavbarLinks_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }) : null, this.props.routes.map((prop, key) => {
      if (!prop.redirect) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: prop.upgrade ? "active active-pro" : this.activeRoute(prop.layout + prop.path),
        key: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        to: prop.layout + prop.path,
        className: "nav-link",
        activeClassName: "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: prop.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, prop.name)));
      return null;
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./src/components/StatsCard/StatsCard.jsx":
/*!************************************************!*\
  !*** ./src/components/StatsCard/StatsCard.jsx ***!
  \************************************************/
/*! exports provided: StatsCard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsCard", function() { return StatsCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/Users/jeffreychow/Documents/GitHub/light-bootstrap-dashboard-react-master/src/components/StatsCard/StatsCard.jsx";

/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


class StatsCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card card-stats",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xs: 5,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "icon-big text-center icon-warning",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, this.props.bigIcon)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xs: 7,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "numbers",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, this.props.statsText), this.props.statsValue))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "stats",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, this.props.statsIcon, " ", this.props.statsIconText))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (StatsCard);

/***/ }),

/***/ "./src/components/Tasks/Tasks.jsx":
/*!****************************************!*\
  !*** ./src/components/Tasks/Tasks.jsx ***!
  \****************************************/
/*! exports provided: Tasks, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tasks", function() { return Tasks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var components_CustomCheckbox_CustomCheckbox_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/CustomCheckbox/CustomCheckbox.jsx */ "./src/components/CustomCheckbox/CustomCheckbox.jsx");
/* harmony import */ var components_CustomButton_CustomButton_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/CustomButton/CustomButton.jsx */ "./src/components/CustomButton/CustomButton.jsx");
var _jsxFileName = "/Users/jeffreychow/Documents/GitHub/light-bootstrap-dashboard-react-master/src/components/Tasks/Tasks.jsx";

/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




class Tasks extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.handleCheckbox = event => {
      const target = event.target;
      console.log(event.target);
      this.setState({
        [target.name]: target.checked
      });
    };
  }

  render() {
    const edit = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
      id: "edit_tooltip",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Edit Task");
    const remove = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
      id: "remove_tooltip",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Remove");
    const tasks_title = ['Sign contract for "What are conference organizers afraid of?"', "Lines From Great Russian Literature? Or E-mails From My Boss?", "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroi", "Create 4 Invisible User Experiences you Never Knew About", 'Read "Following makes Medium better"', "Unfollow 5 enemies from twitter"];
    var tasks = [];
    var number;

    for (var i = 0; i < tasks_title.length; i++) {
      number = "checkbox" + i;
      tasks.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomCheckbox_CustomCheckbox_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        number: number,
        isChecked: i === 1 || i === 2 ? true : false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, tasks_title[i]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "td-actions text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["OverlayTrigger"], {
        placement: "top",
        overlay: edit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButton_CustomButton_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        bsStyle: "info",
        simple: true,
        type: "button",
        bsSize: "xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-edit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["OverlayTrigger"], {
        placement: "top",
        overlay: remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButton_CustomButton_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        bsStyle: "danger",
        simple: true,
        type: "button",
        bsSize: "xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-times",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }))))));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, tasks);
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Tasks);

/***/ }),

/***/ "./src/components/UserCard/UserCard.jsx":
/*!**********************************************!*\
  !*** ./src/components/UserCard/UserCard.jsx ***!
  \**********************************************/
/*! exports provided: UserCard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCard", function() { return UserCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jeffreychow/Documents/GitHub/light-bootstrap-dashboard-react-master/src/components/UserCard/UserCard.jsx";

/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

class UserCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card card-user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: this.props.bgImage,
      alt: "...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "author",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#pablo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "avatar border-gray",
      src: this.props.avatar,
      alt: "...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, this.props.name, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, this.props.userName)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "description text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, this.props.description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, this.props.socials));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (UserCard);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_css_animate_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/css/animate.min.css */ "./src/assets/css/animate.min.css");
/* harmony import */ var _assets_css_animate_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_css_animate_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_sass_light_bootstrap_dashboard_react_scss_v_1_3_0__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0 */ "./src/assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0");
/* harmony import */ var _assets_sass_light_bootstrap_dashboard_react_scss_v_1_3_0__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_light_bootstrap_dashboard_react_scss_v_1_3_0__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_css_demo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/css/demo.css */ "./src/assets/css/demo.css");
/* harmony import */ var _assets_css_demo_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_css_demo_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_css_pe_icon_7_stroke_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/css/pe-icon-7-stroke.css */ "./src/assets/css/pe-icon-7-stroke.css");
/* harmony import */ var _assets_css_pe_icon_7_stroke_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_css_pe_icon_7_stroke_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var layouts_Admin_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! layouts/Admin.jsx */ "./src/layouts/Admin.jsx");
var _jsxFileName = "/Users/jeffreychow/Documents/GitHub/light-bootstrap-dashboard-react-master/src/index.js";

/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/









react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  path: "/admin",
  render: props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(layouts_Admin_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  })),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
  from: "/",
  to: "/admin/dashboard",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}))), document.getElementById("root"));

/***/ }),

/***/ "./src/layouts/Admin.jsx":
/*!*******************************!*\
  !*** ./src/layouts/Admin.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_notification_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-notification-system */ "./node_modules/react-notification-system/dist/NotificationSystem.js");
/* harmony import */ var react_notification_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_notification_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Navbars_AdminNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Navbars/AdminNavbar */ "./src/components/Navbars/AdminNavbar.jsx");
/* harmony import */ var components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Footer/Footer */ "./src/components/Footer/Footer.jsx");
/* harmony import */ var components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Sidebar/Sidebar */ "./src/components/Sidebar/Sidebar.jsx");
/* harmony import */ var components_FixedPlugin_FixedPlugin_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/FixedPlugin/FixedPlugin.jsx */ "./src/components/FixedPlugin/FixedPlugin.jsx");
/* harmony import */ var variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! variables/Variables.jsx */ "./src/variables/Variables.jsx");
/* harmony import */ var variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var routes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! routes.js */ "./src/routes.js");
/* harmony import */ var assets_img_sidebar_3_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/img/sidebar-3.jpg */ "./src/assets/img/sidebar-3.jpg");
/* harmony import */ var assets_img_sidebar_3_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_img_sidebar_3_jpg__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/jeffreychow/Documents/GitHub/light-bootstrap-dashboard-react-master/src/layouts/Admin.jsx";











class Admin extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(_props) {
    super(_props);

    this.handleNotificationClick = position => {
      var color = Math.floor(Math.random() * 4 + 1);
      var level;

      switch (color) {
        case 1:
          level = "success";
          break;

        case 2:
          level = "warning";
          break;

        case 3:
          level = "error";
          break;

        case 4:
          level = "info";
          break;

        default:
          break;
      }

      this.state._notificationSystem.addNotification({
        title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          "data-notify": "icon",
          className: "pe-7s-gift",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }),
        message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, "Welcome to ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, "Light Bootstrap Dashboard"), " - a beautiful freebie for every web developer."),
        level: level,
        position: position,
        autoDismiss: 15
      });
    };

    this.getRoutes = routes => {
      return routes.map((prop, key) => {
        if (prop.layout === "/admin") {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
            path: prop.layout + prop.path,
            render: props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(prop.component, Object.assign({}, props, {
              handleClick: this.handleNotificationClick,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              },
              __self: this
            })),
            key: key,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            },
            __self: this
          });
        } else {
          return null;
        }
      });
    };

    this.getBrandText = path => {
      for (let i = 0; i < routes_js__WEBPACK_IMPORTED_MODULE_8__["default"].length; i++) {
        if (this.props.location.pathname.indexOf(routes_js__WEBPACK_IMPORTED_MODULE_8__["default"][i].layout + routes_js__WEBPACK_IMPORTED_MODULE_8__["default"][i].path) !== -1) {
          return routes_js__WEBPACK_IMPORTED_MODULE_8__["default"][i].name;
        }
      }

      return "Brand";
    };

    this.handleImageClick = image => {
      this.setState({
        image: image
      });
    };

    this.handleColorClick = color => {
      this.setState({
        color: color
      });
    };

    this.handleHasImage = hasImage => {
      this.setState({
        hasImage: hasImage
      });
    };

    this.handleFixedClick = () => {
      if (this.state.fixedClasses === "dropdown") {
        this.setState({
          fixedClasses: "dropdown show-dropdown open"
        });
      } else {
        this.setState({
          fixedClasses: "dropdown"
        });
      }
    };

    this.state = {
      _notificationSystem: null,
      image: assets_img_sidebar_3_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
      color: "black",
      hasImage: true,
      fixedClasses: "dropdown show-dropdown open"
    };
  }

  componentDidMount() {
    this.setState({
      _notificationSystem: this.refs.notificationSystem
    });
    var _notificationSystem = this.refs.notificationSystem;
    var color = Math.floor(Math.random() * 4 + 1);
    var level;

    switch (color) {
      case 1:
        level = "success";
        break;

      case 2:
        level = "warning";
        break;

      case 3:
        level = "error";
        break;

      case 4:
        level = "info";
        break;

      default:
        break;
    }

    _notificationSystem.addNotification({
      title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "data-notify": "icon",
        className: "pe-7s-gift",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }),
      message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "Welcome to ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "Light Bootstrap Dashboard"), " - a beautiful freebie for every web developer."),
      level: level,
      position: "tr",
      autoDismiss: 15
    });
  }

  componentDidUpdate(e) {
    if (window.innerWidth < 993 && e.history.location.pathname !== e.location.pathname && document.documentElement.className.indexOf("nav-open") !== -1) {
      document.documentElement.classList.toggle("nav-open");
    }

    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_notification_system__WEBPACK_IMPORTED_MODULE_2___default.a, {
      ref: "notificationSystem",
      style: variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_7__["style"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, this.props, {
      routes: routes_js__WEBPACK_IMPORTED_MODULE_8__["default"],
      image: this.state.image,
      color: this.state.color,
      hasImage: this.state.hasImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "main-panel",
      className: "main-panel",
      ref: "mainPanel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Navbars_AdminNavbar__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, this.props, {
      brandText: this.getBrandText(this.props.location.pathname),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, this.getRoutes(routes_js__WEBPACK_IMPORTED_MODULE_8__["default"])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_FixedPlugin_FixedPlugin_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      handleImageClick: this.handleImageClick,
      handleColorClick: this.handleColorClick,
      handleHasImage: this.handleHasImage,
      bgColor: this.state["color"],
      bgImage: this.state["image"],
      mini: this.state["mini"],
      handleFixedClick: this.handleFixedClick,
      fixedClasses: this.state.fixedClasses,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var views_Dashboard_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! views/Dashboard.jsx */ "./src/views/Dashboard.jsx");
/* harmony import */ var views_UserProfile_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! views/UserProfile.jsx */ "./src/views/UserProfile.jsx");
/* harmony import */ var views_TableList_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! views/TableList.jsx */ "./src/views/TableList.jsx");
/* harmony import */ var views_Typography_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! views/Typography.jsx */ "./src/views/Typography.jsx");
/* harmony import */ var views_Icons_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! views/Icons.jsx */ "./src/views/Icons.jsx");
/* harmony import */ var views_Maps_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! views/Maps.jsx */ "./src/views/Maps.jsx");
/* harmony import */ var views_Notifications_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! views/Notifications.jsx */ "./src/views/Notifications.jsx");
/* harmony import */ var views_Upgrade_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! views/Upgrade.jsx */ "./src/views/Upgrade.jsx");








const dashboardRoutes = [{
  path: "/dashboard",
  name: "Dashboard",
  icon: "pe-7s-graph",
  component: views_Dashboard_jsx__WEBPACK_IMPORTED_MODULE_0__["default"],
  layout: "/admin"
}, {
  path: "/user",
  name: "User Profile",
  icon: "pe-7s-user",
  component: views_UserProfile_jsx__WEBPACK_IMPORTED_MODULE_1__["default"],
  layout: "/admin"
}, {
  path: "/table",
  name: "Table List",
  icon: "pe-7s-note2",
  component: views_TableList_jsx__WEBPACK_IMPORTED_MODULE_2__["default"],
  layout: "/admin"
}, {
  path: "/typography",
  name: "Typography",
  icon: "pe-7s-news-paper",
  component: views_Typography_jsx__WEBPACK_IMPORTED_MODULE_3__["default"],
  layout: "/admin"
}, {
  path: "/icons",
  name: "Icons",
  icon: "pe-7s-science",
  component: views_Icons_jsx__WEBPACK_IMPORTED_MODULE_4__["default"],
  layout: "/admin"
}, {
  path: "/maps",
  name: "Maps",
  icon: "pe-7s-map-marker",
  component: views_Maps_jsx__WEBPACK_IMPORTED_MODULE_5__["default"],
  layout: "/admin"
}, {
  path: "/notifications",
  name: "Notifications",
  icon: "pe-7s-bell",
  component: views_Notifications_jsx__WEBPACK_IMPORTED_MODULE_6__["default"],
  layout: "/admin"
}, {
  upgrade: true,
  path: "/upgrade",
  name: "Upgrade to PRO",
  icon: "pe-7s-rocket",
  component: views_Upgrade_jsx__WEBPACK_IMPORTED_MODULE_7__["default"],
  layout: "/admin"
}];
/* harmony default export */ __webpack_exports__["default"] = (dashboardRoutes);

/***/ }),

/***/ "./src/variables/Variables.jsx":
/*!*************************************!*\
  !*** ./src/variables/Variables.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
//
// //
// // // For notifications
// //
//
var defaultWidth = window.screen.width > 768 ? window.screen.width * 1 / 3 : window.screen.width;
var style = {
  Wrapper: {},
  Containers: {
    DefaultStyle: {
      position: "fixed",
      width: defaultWidth,
      padding: "10px 10px 10px 20px",
      zIndex: 9998,
      WebkitBoxSizing: "",
      MozBoxSizing: "",
      boxSizing: "",
      height: "auto",
      display: "inline-block",
      border: "0",
      fontSize: "14px",
      WebkitFontSmoothing: "antialiased",
      fontFamily: '"Roboto","Helvetica Neue",Arial,sans-serif',
      fontWeight: "400",
      color: "#FFFFFF"
    },
    tl: {
      top: "0px",
      bottom: "auto",
      left: "0px",
      right: "auto"
    },
    tr: {
      top: "0px",
      bottom: "auto",
      left: "auto",
      right: "0px"
    },
    tc: {
      top: "0px",
      bottom: "auto",
      margin: "0 auto",
      left: "50%",
      marginLeft: -(defaultWidth / 2)
    },
    bl: {
      top: "auto",
      bottom: "0px",
      left: "0px",
      right: "auto"
    },
    br: {
      top: "auto",
      bottom: "0px",
      left: "auto",
      right: "0px"
    },
    bc: {
      top: "auto",
      bottom: "0px",
      margin: "0 auto",
      left: "50%",
      marginLeft: -(defaultWidth / 2)
    }
  },
  NotificationItem: {
    DefaultStyle: {
      position: "relative",
      width: "100%",
      cursor: "pointer",
      borderRadius: "4px",
      fontSize: "14px",
      margin: "10px 0 0",
      padding: "10px",
      display: "block",
      WebkitBoxSizing: "border-box",
      MozBoxSizing: "border-box",
      boxSizing: "border-box",
      opacity: 0,
      transition: "all 0.5s ease-in-out",
      WebkitTransform: "translate3d(0, 0, 0)",
      transform: "translate3d(0, 0, 0)",
      willChange: "transform, opacity",
      isHidden: {
        opacity: 0
      },
      isVisible: {
        opacity: 1
      }
    },
    success: {
      borderTop: 0,
      backgroundColor: "#a1e82c",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },
    error: {
      borderTop: 0,
      backgroundColor: "#fc727a",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },
    warning: {
      borderTop: 0,
      backgroundColor: "#ffbc67",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },
    info: {
      borderTop: 0,
      backgroundColor: "#63d8f1",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    }
  },
  Title: {
    DefaultStyle: {
      fontSize: "30px",
      margin: "0",
      padding: 0,
      fontWeight: "bold",
      color: "#FFFFFF",
      display: "block",
      left: "15px",
      position: "absolute",
      top: "50%",
      marginTop: "-15px"
    }
  },
  MessageWrapper: {
    DefaultStyle: {
      marginLeft: "55px",
      marginRight: "30px",
      padding: "0 12px 0 0",
      color: "#FFFFFF",
      maxWidthwidth: "89%"
    }
  },
  Dismiss: {
    DefaultStyle: {
      fontFamily: "inherit",
      fontSize: "21px",
      color: "#000",
      float: "right",
      position: "absolute",
      right: "10px",
      top: "50%",
      marginTop: "-13px",
      backgroundColor: "#FFFFFF",
      display: "block",
      borderRadius: "50%",
      opacity: ".4",
      lineHeight: "11px",
      width: "25px",
      height: "25px",
      outline: "0 !important",
      textAlign: "center",
      padding: "6px 3px 3px 3px",
      fontWeight: "300",
      marginLeft: "65px"
    },
    success: {// color: '#f0f5ea',
      // backgroundColor: '#a1e82c'
    },
    error: {// color: '#f4e9e9',
      // backgroundColor: '#fc727a'
    },
    warning: {// color: '#f9f6f0',
      // backgroundColor: '#ffbc67'
    },
    info: {// color: '#e8f0f4',
      // backgroundColor: '#63d8f1'
    }
  },
  Action: {
    DefaultStyle: {
      background: "#ffffff",
      borderRadius: "2px",
      padding: "6px 20px",
      fontWeight: "bold",
      margin: "10px 0 0 0",
      border: 0
    },
    success: {
      backgroundColor: "#a1e82c",
      color: "#ffffff"
    },
    error: {
      backgroundColor: "#fc727a",
      color: "#ffffff"
    },
    warning: {
      backgroundColor: "#ffbc67",
      color: "#ffffff"
    },
    info: {
      backgroundColor: "#63d8f1",
      color: "#ffffff"
    }
  },
  ActionWrapper: {
    DefaultStyle: {
      margin: 0,
      padding: 0
    }
  }
}; //
// //
// // // For tables
// //
//

const thArray = ["ID", "Name", "Salary", "Country", "City"];
const tdArray = [["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"], ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"], ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"], ["4", "Philip Chaney", "$38,735", "Korea, South", "Overland Park"], ["5", "Doris Greene", "$63,542", "Malawi", "Feldkirchen in Kärnten"], ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]]; //
// //
// // // For icons
// //
//

const iconsArray = ["pe-7s-album", "pe-7s-arc", "pe-7s-back-2", "pe-7s-bandaid", "pe-7s-car", "pe-7s-diamond", "pe-7s-door-lock", "pe-7s-eyedropper", "pe-7s-female", "pe-7s-gym", "pe-7s-hammer", "pe-7s-headphones", "pe-7s-helm", "pe-7s-hourglass", "pe-7s-leaf", "pe-7s-magic-wand", "pe-7s-male", "pe-7s-map-2", "pe-7s-next-2", "pe-7s-paint-bucket", "pe-7s-pendrive", "pe-7s-photo", "pe-7s-piggy", "pe-7s-plugin", "pe-7s-refresh-2", "pe-7s-rocket", "pe-7s-settings", "pe-7s-shield", "pe-7s-smile", "pe-7s-usb", "pe-7s-vector", "pe-7s-wine", "pe-7s-cloud-upload", "pe-7s-cash", "pe-7s-close", "pe-7s-bluetooth", "pe-7s-cloud-download", "pe-7s-way", "pe-7s-close-circle", "pe-7s-id", "pe-7s-angle-up", "pe-7s-wristwatch", "pe-7s-angle-up-circle", "pe-7s-world", "pe-7s-angle-right", "pe-7s-volume", "pe-7s-angle-right-circle", "pe-7s-users", "pe-7s-angle-left", "pe-7s-user-female", "pe-7s-angle-left-circle", "pe-7s-up-arrow", "pe-7s-angle-down", "pe-7s-switch", "pe-7s-angle-down-circle", "pe-7s-scissors", "pe-7s-wallet", "pe-7s-safe", "pe-7s-volume2", "pe-7s-volume1", "pe-7s-voicemail", "pe-7s-video", "pe-7s-user", "pe-7s-upload", "pe-7s-unlock", "pe-7s-umbrella", "pe-7s-trash", "pe-7s-tools", "pe-7s-timer", "pe-7s-ticket", "pe-7s-target", "pe-7s-sun", "pe-7s-study", "pe-7s-stopwatch", "pe-7s-star", "pe-7s-speaker", "pe-7s-signal", "pe-7s-shuffle", "pe-7s-shopbag", "pe-7s-share", "pe-7s-server", "pe-7s-search", "pe-7s-film", "pe-7s-science", "pe-7s-disk", "pe-7s-ribbon", "pe-7s-repeat", "pe-7s-refresh", "pe-7s-add-user", "pe-7s-refresh-cloud", "pe-7s-paperclip", "pe-7s-radio", "pe-7s-note2", "pe-7s-print", "pe-7s-network", "pe-7s-prev", "pe-7s-mute", "pe-7s-power", "pe-7s-medal", "pe-7s-portfolio", "pe-7s-like2", "pe-7s-plus", "pe-7s-left-arrow", "pe-7s-play", "pe-7s-key", "pe-7s-plane", "pe-7s-joy", "pe-7s-photo-gallery", "pe-7s-pin", "pe-7s-phone", "pe-7s-plug", "pe-7s-pen", "pe-7s-right-arrow", "pe-7s-paper-plane", "pe-7s-delete-user", "pe-7s-paint", "pe-7s-bottom-arrow", "pe-7s-notebook", "pe-7s-note", "pe-7s-next", "pe-7s-news-paper", "pe-7s-musiclist", "pe-7s-music", "pe-7s-mouse", "pe-7s-more", "pe-7s-moon", "pe-7s-monitor", "pe-7s-micro", "pe-7s-menu", "pe-7s-map", "pe-7s-map-marker", "pe-7s-mail", "pe-7s-mail-open", "pe-7s-mail-open-file", "pe-7s-magnet", "pe-7s-loop", "pe-7s-look", "pe-7s-lock", "pe-7s-lintern", "pe-7s-link", "pe-7s-like", "pe-7s-light", "pe-7s-less", "pe-7s-keypad", "pe-7s-junk", "pe-7s-info", "pe-7s-home", "pe-7s-help2", "pe-7s-help1", "pe-7s-graph3", "pe-7s-graph2", "pe-7s-graph1", "pe-7s-graph", "pe-7s-global", "pe-7s-gleam", "pe-7s-glasses", "pe-7s-gift", "pe-7s-folder", "pe-7s-flag", "pe-7s-filter", "pe-7s-file", "pe-7s-expand1", "pe-7s-exapnd2", "pe-7s-edit", "pe-7s-drop", "pe-7s-drawer", "pe-7s-download", "pe-7s-display2", "pe-7s-display1", "pe-7s-diskette", "pe-7s-date", "pe-7s-cup", "pe-7s-culture", "pe-7s-crop", "pe-7s-credit", "pe-7s-copy-file", "pe-7s-config", "pe-7s-compass", "pe-7s-comment", "pe-7s-coffee", "pe-7s-cloud", "pe-7s-clock", "pe-7s-check", "pe-7s-chat", "pe-7s-cart", "pe-7s-camera", "pe-7s-call", "pe-7s-calculator", "pe-7s-browser", "pe-7s-box2", "pe-7s-box1", "pe-7s-bookmarks", "pe-7s-bicycle", "pe-7s-bell", "pe-7s-battery", "pe-7s-ball", "pe-7s-back", "pe-7s-attention", "pe-7s-anchor", "pe-7s-albums", "pe-7s-alarm", "pe-7s-airplay"]; //
// //
// // // // For dashboard's charts
// //
//
// Data for Pie Chart

var dataPie = {
  labels: ["40%", "20%", "40%"],
  series: [40, 20, 40]
};
var legendPie = {
  names: ["Open", "Bounce", "Unsubscribe"],
  types: ["info", "danger", "warning"]
}; // Data for Line Chart

var dataSales = {
  labels: ["9:00AM", "12:00AM", "3:00PM", "6:00PM", "9:00PM", "12:00PM", "3:00AM", "6:00AM"],
  series: [[287, 385, 490, 492, 554, 586, 698, 695], [67, 152, 143, 240, 287, 335, 435, 437], [23, 113, 67, 108, 190, 239, 307, 308]]
};
var optionsSales = {
  low: 0,
  high: 800,
  showArea: false,
  height: "245px",
  axisX: {
    showGrid: false
  },
  lineSmooth: true,
  showLine: true,
  showPoint: true,
  fullWidth: true,
  chartPadding: {
    right: 50
  }
};
var responsiveSales = [["screen and (max-width: 640px)", {
  axisX: {
    labelInterpolationFnc: function (value) {
      return value[0];
    }
  }
}]];
var legendSales = {
  names: ["Open", "Click", "Click Second Time"],
  types: ["info", "danger", "warning"]
}; // Data for Bar Chart

var dataBar = {
  labels: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895], [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]]
};
var optionsBar = {
  seriesBarDistance: 10,
  axisX: {
    showGrid: false
  },
  height: "245px"
};
var responsiveBar = [["screen and (max-width: 640px)", {
  seriesBarDistance: 5,
  axisX: {
    labelInterpolationFnc: function (value) {
      return value[0];
    }
  }
}]];
var legendBar = {
  names: ["Tesla Model S", "BMW 5 Series"],
  types: ["info", "danger"]
};
module.exports = {
  style,
  // For notifications (App container and Notifications view)
  thArray,
  tdArray,
  // For tables (TableList view)
  iconsArray,
  // For icons (Icons view)
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar // For charts (Dashboard view)

};

/***/ }),

/***/ "./src/views/Dashboard.jsx":
/*!*********************************!*\
  !*** ./src/views/Dashboard.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartist */ "./node_modules/react-chartist/dist/index.js");
/* harmony import */ var react_chartist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var components_Card_Card_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Card/Card.jsx */ "./src/components/Card/Card.jsx");
/* harmony import */ var components_StatsCard_StatsCard_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/StatsCard/StatsCard.jsx */ "./src/components/StatsCard/StatsCard.jsx");
/* harmony import */ var components_Tasks_Tasks_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Tasks/Tasks.jsx */ "./src/components/Tasks/Tasks.jsx");
/* harmony import */ var variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! variables/Variables.jsx */ "./src/variables/Variables.jsx");
/* harmony import */ var variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/jeffreychow/Documents/GitHub/light-bootstrap-dashboard-react-master/src/views/Dashboard.jsx";

/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/








class Dashboard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  createLegend(json) {
    var legend = [];

    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: type,
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }));
      legend.push(" ");
      legend.push(json["names"][i]);
    }

    return legend;
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      fluid: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: 3,
      sm: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_StatsCard_StatsCard_jsx__WEBPACK_IMPORTED_MODULE_4__["StatsCard"], {
      bigIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-server text-warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }),
      statsText: "Capacity",
      statsValue: "105GB",
      statsIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-refresh",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }),
      statsIconText: "Updated now",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: 3,
      sm: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_StatsCard_StatsCard_jsx__WEBPACK_IMPORTED_MODULE_4__["StatsCard"], {
      bigIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-wallet text-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }),
      statsText: "Revenue",
      statsValue: "$1,345",
      statsIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-calendar-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }),
      statsIconText: "Last day",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: 3,
      sm: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_StatsCard_StatsCard_jsx__WEBPACK_IMPORTED_MODULE_4__["StatsCard"], {
      bigIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-graph1 text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }),
      statsText: "Errors",
      statsValue: "23",
      statsIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-clock-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }),
      statsIconText: "In the last hour",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: 3,
      sm: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_StatsCard_StatsCard_jsx__WEBPACK_IMPORTED_MODULE_4__["StatsCard"], {
      bigIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-twitter text-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }),
      statsText: "Followers",
      statsValue: "+45",
      statsIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-refresh",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }),
      statsIconText: "Updated now",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      md: 8,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Card_Card_jsx__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      statsIcon: "fa fa-history",
      id: "chartHours",
      title: "Users Behavior",
      category: "24 Hours performance",
      stats: "Updated 3 minutes ago",
      content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ct-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartist__WEBPACK_IMPORTED_MODULE_1___default.a, {
        data: variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_6__["dataSales"],
        type: "Line",
        options: variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_6__["optionsSales"],
        responsiveOptions: variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_6__["responsiveSales"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      })),
      legend: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "legend",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, this.createLegend(variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_6__["legendSales"])),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      md: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Card_Card_jsx__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      statsIcon: "fa fa-clock-o",
      title: "Email Statistics",
      category: "Last Campaign Performance",
      stats: "Campaign sent 2 days ago",
      content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "chartPreferences",
        className: "ct-chart ct-perfect-fourth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartist__WEBPACK_IMPORTED_MODULE_1___default.a, {
        data: variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_6__["dataPie"],
        type: "Pie",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      })),
      legend: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "legend",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, this.createLegend(variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_6__["legendPie"])),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      md: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Card_Card_jsx__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      id: "chartActivity",
      title: "2014 Sales",
      category: "All products including Taxes",
      stats: "Data information certified",
      statsIcon: "fa fa-check",
      content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ct-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartist__WEBPACK_IMPORTED_MODULE_1___default.a, {
        data: variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_6__["dataBar"],
        type: "Bar",
        options: variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_6__["optionsBar"],
        responsiveOptions: variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_6__["responsiveBar"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      })),
      legend: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "legend",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, this.createLegend(variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_6__["legendBar"])),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      md: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Card_Card_jsx__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      title: "Tasks",
      category: "Backend development",
      stats: "Updated 3 minutes ago",
      statsIcon: "fa fa-history",
      content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "table-full-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Tasks_Tasks_jsx__WEBPACK_IMPORTED_MODULE_5__["Tasks"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }))),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./src/views/Icons.jsx":
/*!*****************************!*\
  !*** ./src/views/Icons.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var components_Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Card/Card */ "./src/components/Card/Card.jsx");
/* harmony import */ var variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! variables/Variables.jsx */ "./src/variables/Variables.jsx");
/* harmony import */ var variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/jeffreychow/Documents/GitHub/light-bootstrap-dashboard-react-master/src/views/Icons.jsx";

/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





class Icons extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      fluid: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Card_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "202 Awesome Stroke Icons",
      ctAllIcons: true,
      category: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Handcrafted by our friends from", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "http://themes-pixeden.com/font-demos/7-stroke/index.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Pixeden")),
      content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_3__["iconsArray"].map((prop, key) => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          lg: 2,
          md: 3,
          sm: 4,
          xs: 6,
          className: "font-icon-list",
          key: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "font-icon-detail",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: prop,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          defaultValue: prop,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        })));
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Icons);

/***/ }),

/***/ "./src/views/Maps.jsx":
/*!****************************!*\
  !*** ./src/views/Maps.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_jeffreychow_Documents_GitHub_light_bootstrap_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-maps */ "./node_modules/react-google-maps/lib/index.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/jeffreychow/Documents/GitHub/light-bootstrap-dashboard-react-master/src/views/Maps.jsx";

/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
 // react components used to create a google map


const CustomMap = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["withScriptjs"])(Object(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["withGoogleMap"])(props => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMap"], {
  defaultZoom: 13,
  defaultCenter: {
    lat: 40.748817,
    lng: -73.985428
  },
  defaultOptions: {
    scrollwheel: false,
    zoomControl: true
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
  position: {
    lat: 40.748817,
    lng: -73.985428
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}))));

function Maps(_ref) {
  let prop = Object(_Users_jeffreychow_Documents_GitHub_light_bootstrap_dashboard_react_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _ref);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CustomMap, {
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE",
    loadingElement: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        height: "100%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }),
    containerElement: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        height: "100vh"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }),
    mapElement: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        height: "100%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Maps);

/***/ }),

/***/ "./src/views/Notifications.jsx":
/*!*************************************!*\
  !*** ./src/views/Notifications.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var components_CustomButton_CustomButton_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/CustomButton/CustomButton.jsx */ "./src/components/CustomButton/CustomButton.jsx");
var _jsxFileName = "/Users/jeffreychow/Documents/GitHub/light-bootstrap-dashboard-react-master/src/views/Notifications.jsx";

/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




class Notifications extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      fluid: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Notifications"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Handcrafted by", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://github.com/igorprado",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Igor Prado"), ". Please checkout the", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "http://igorprado.com/react-notification-system/",
      rel: "noopener noreferrer",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "full documentation."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Notifications Style"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
      bsStyle: "info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "This is a plain notification")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
      bsStyle: "info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      "aria-hidden": "true",
      className: "close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "\u2715"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "This is a notification with close button.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
      bsStyle: "info",
      className: "alert-with-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      "aria-hidden": "true",
      className: "close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "\u2715"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      "data-notify": "icon",
      className: "pe-7s-bell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      "data-notify": "message",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "This is a notification with close button and icon.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
      bsStyle: "info",
      className: "alert-with-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      "aria-hidden": "true",
      className: "close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "\u2715"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      "data-notify": "icon",
      className: "pe-7s-bell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      "data-notify": "message",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "Notification states"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
      bsStyle: "info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      "aria-hidden": "true",
      className: "close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "\u2715"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, " Info - "), " This is a regular notification made with bsStyle=\"info\"")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
      bsStyle: "success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      "aria-hidden": "true",
      className: "close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, "\u2715"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, " Success - "), " This is a regular notification made with bsStyle=\"success\"")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
      bsStyle: "warning",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      "aria-hidden": "true",
      className: "close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, "\u2715"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, " Warning - "), " This is a regular notification made with bsStyle=\"warning\"")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
      bsStyle: "danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      "aria-hidden": "true",
      className: "close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "\u2715"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, " Danger - "), " This is a regular notification made with bsStyle=\"danger\"")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "places-buttons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: 6,
      mdOffset: 3,
      className: "text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, "Notifications Places", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, "Click to view notifications")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: 2,
      mdOffset: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButton_CustomButton_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      bsStyle: "default",
      block: true,
      onClick: () => this.props.handleClick("tl"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, "Top Left")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: 2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButton_CustomButton_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      bsStyle: "default",
      block: true,
      onClick: () => this.props.handleClick("tc"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, "Top Center")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: 2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButton_CustomButton_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      bsStyle: "default",
      block: true,
      onClick: () => this.props.handleClick("tr"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, "Top Right"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: 2,
      mdOffset: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButton_CustomButton_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      bsStyle: "default",
      block: true,
      onClick: () => this.props.handleClick("bl"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, "Bottom Left")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: 2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButton_CustomButton_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      bsStyle: "default",
      block: true,
      onClick: () => this.props.handleClick("bc"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, "Bottom Center")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: 2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButton_CustomButton_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      bsStyle: "default",
      block: true,
      onClick: () => this.props.handleClick("br"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, "Bottom Right"))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Notifications);

/***/ }),

/***/ "./src/views/TableList.jsx":
/*!*********************************!*\
  !*** ./src/views/TableList.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var components_Card_Card_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Card/Card.jsx */ "./src/components/Card/Card.jsx");
/* harmony import */ var variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! variables/Variables.jsx */ "./src/variables/Variables.jsx");
/* harmony import */ var variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/jeffreychow/Documents/GitHub/light-bootstrap-dashboard-react-master/src/views/TableList.jsx";

/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





class TableList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      fluid: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Card_Card_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Striped Table with Hover",
      category: "Here is a subtitle for this table",
      ctTableFullWidth: true,
      ctTableResponsive: true,
      content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
        striped: true,
        hover: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_3__["thArray"].map((prop, key) => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          key: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, prop);
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_3__["tdArray"].map((prop, key) => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, prop.map((prop, key) => {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
            key: key,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          }, prop);
        }));
      }))),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Card_Card_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      plain: true,
      title: "Striped Table with Hover",
      category: "Here is a subtitle for this table",
      ctTableFullWidth: true,
      ctTableResponsive: true,
      content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
        hover: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_3__["thArray"].map((prop, key) => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          key: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, prop);
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, variables_Variables_jsx__WEBPACK_IMPORTED_MODULE_3__["tdArray"].map((prop, key) => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, prop.map((prop, key) => {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
            key: key,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          }, prop);
        }));
      }))),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TableList);

/***/ }),

/***/ "./src/views/Typography.jsx":
/*!**********************************!*\
  !*** ./src/views/Typography.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var components_Card_Card_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Card/Card.jsx */ "./src/components/Card/Card.jsx");
var _jsxFileName = "/Users/jeffreychow/Documents/GitHub/light-bootstrap-dashboard-react-master/src/views/Typography.jsx";

/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




class Typography extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      fluid: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Card_Card_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Light Bootstrap Table Heading",
      category: "Created using Roboto Font Family",
      content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "typo-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Header 1"), "Light Bootstrap Table Heading", " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "typo-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Header 2"), "Light Bootstrap Table Heading")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "typo-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Header 3"), "Light Bootstrap Table Heading")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "typo-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Header 4"), "Light Bootstrap Table Heading")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "typo-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Header 5"), "Light Bootstrap Table Heading")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "typo-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Header 6"), "Light Bootstrap Table Heading")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "typo-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Paragraph"), "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "typo-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Quote"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("blockquote", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Steve Jobs, CEO Apple"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "typo-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Muted Text"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "typo-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Coloured Text"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Text Primary - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "Text Info - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Text Success - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Text Warning - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Text Danger - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "typo-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Small Tag"), "Header with small subtitle ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "\".small\" is a tag for the headers"), " "))),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Typography);

/***/ }),

/***/ "./src/views/Upgrade.jsx":
/*!*******************************!*\
  !*** ./src/views/Upgrade.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var components_Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Card/Card */ "./src/components/Card/Card.jsx");
/* harmony import */ var components_CustomButton_CustomButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/CustomButton/CustomButton */ "./src/components/CustomButton/CustomButton.jsx");
var _jsxFileName = "/Users/jeffreychow/Documents/GitHub/light-bootstrap-dashboard-react-master/src/views/Upgrade.jsx";

/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





class Icons extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      fluid: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: 8,
      mdOffset: 2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Card_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      hCenter: true,
      title: "Light Bootstrap Dashboard PRO React",
      category: "Are you looking for more components? Please check our Premium Version of Light Bootstrap Dashboard React.",
      ctTableResponsive: true,
      ctTableFullWidth: true,
      ctTableUpgrade: true,
      content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Free"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "PRO"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Components"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "30"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "60")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Plugins"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "13")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Example Pages"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "24")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Login/Register/Lock Pages"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-times text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-check text-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Premium Support"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-times text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-check text-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Free"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Just $49")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButton_CustomButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        href: "#",
        round: true,
        fill: true,
        disabled: true,
        bsStyle: "default",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Current Version")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButton_CustomButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        target: "_blank",
        href: "http://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react/?ref=lbdr-upgrade-page",
        round: true,
        fill: true,
        bsStyle: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Upgrade to PRO"))))),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Icons);

/***/ }),

/***/ "./src/views/UserProfile.jsx":
/*!***********************************!*\
  !*** ./src/views/UserProfile.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var components_Card_Card_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Card/Card.jsx */ "./src/components/Card/Card.jsx");
/* harmony import */ var components_FormInputs_FormInputs_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/FormInputs/FormInputs.jsx */ "./src/components/FormInputs/FormInputs.jsx");
/* harmony import */ var components_UserCard_UserCard_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UserCard/UserCard.jsx */ "./src/components/UserCard/UserCard.jsx");
/* harmony import */ var components_CustomButton_CustomButton_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/CustomButton/CustomButton.jsx */ "./src/components/CustomButton/CustomButton.jsx");
/* harmony import */ var assets_img_faces_face_3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/img/faces/face-3.jpg */ "./src/assets/img/faces/face-3.jpg");
/* harmony import */ var assets_img_faces_face_3_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_img_faces_face_3_jpg__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/jeffreychow/Documents/GitHub/light-bootstrap-dashboard-react-master/src/views/UserProfile.jsx";

/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/








class UserProfile extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      fluid: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: 8,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Card_Card_jsx__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      title: "Edit Profile",
      content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_FormInputs_FormInputs_jsx__WEBPACK_IMPORTED_MODULE_3__["FormInputs"], {
        ncols: ["col-md-5", "col-md-3", "col-md-4"],
        properties: [{
          label: "Company (disabled)",
          type: "text",
          bsClass: "form-control",
          placeholder: "Company",
          defaultValue: "Creative Code Inc.",
          disabled: true
        }, {
          label: "Username",
          type: "text",
          bsClass: "form-control",
          placeholder: "Username",
          defaultValue: "michael23"
        }, {
          label: "Email address",
          type: "email",
          bsClass: "form-control",
          placeholder: "Email"
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_FormInputs_FormInputs_jsx__WEBPACK_IMPORTED_MODULE_3__["FormInputs"], {
        ncols: ["col-md-6", "col-md-6"],
        properties: [{
          label: "First name",
          type: "text",
          bsClass: "form-control",
          placeholder: "First name",
          defaultValue: "Mike"
        }, {
          label: "Last name",
          type: "text",
          bsClass: "form-control",
          placeholder: "Last name",
          defaultValue: "Andrew"
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_FormInputs_FormInputs_jsx__WEBPACK_IMPORTED_MODULE_3__["FormInputs"], {
        ncols: ["col-md-12"],
        properties: [{
          label: "Adress",
          type: "text",
          bsClass: "form-control",
          placeholder: "Home Adress",
          defaultValue: "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_FormInputs_FormInputs_jsx__WEBPACK_IMPORTED_MODULE_3__["FormInputs"], {
        ncols: ["col-md-4", "col-md-4", "col-md-4"],
        properties: [{
          label: "City",
          type: "text",
          bsClass: "form-control",
          placeholder: "City",
          defaultValue: "Mike"
        }, {
          label: "Country",
          type: "text",
          bsClass: "form-control",
          placeholder: "Country",
          defaultValue: "Andrew"
        }, {
          label: "Postal Code",
          type: "number",
          bsClass: "form-control",
          placeholder: "ZIP Code"
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        controlId: "formControlsTextarea",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ControlLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "About Me"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
        rows: "5",
        componentClass: "textarea",
        bsClass: "form-control",
        placeholder: "Here can be your description",
        defaultValue: "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButton_CustomButton_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        bsStyle: "info",
        pullRight: true,
        fill: true,
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "Update Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UserCard_UserCard_jsx__WEBPACK_IMPORTED_MODULE_4__["UserCard"], {
      bgImage: "https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400",
      avatar: assets_img_faces_face_3_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
      name: "Mike Andrew",
      userName: "michael24",
      description: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "\"Lamborghini Mercy", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }), "Your chick she so thirsty", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }), "I'm in that two seat Lambo\""),
      socials: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButton_CustomButton_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        simple: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-facebook-square",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButton_CustomButton_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        simple: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButton_CustomButton_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        simple: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-google-plus-square",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }))),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/jeffreychow/Documents/GitHub/light-bootstrap-dashboard-react-master/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/jeffreychow/Documents/GitHub/light-bootstrap-dashboard-react-master/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map