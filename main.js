/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style-about.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style-about.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: #FFF4C9;
    color: #333;
    height: 100vh;

  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }



.about{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
    'contact' 'timing';
    gap: 10px;
    margin-top: 15px;
}

.About,.timing{
    font-family: 'Georgia', serif;
    font-size: 1.2em;
    color: #333;
    line-height: 1.6;
    margin: 0 auto;
    width:100% ;
    padding: 5px;
    background-color: #C7E78B;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}




.About{
    grid-area: 'contact';
    display: flex;
    flex-direction: column;
    gap: 50px;

}

.timing{
    grid-area: 'timing';
    display: flex;
    flex-direction: column;
    gap: 50px;
    max-height: 200px;
    align-items: center;
}


.timing h1,.timing h5{
    flex: 1;
    overflow: auto;
    justify-self: center;
    align-self:center;

}

.timing h5,.About h5{
    margin-bottom: 50px;
}`, "",{"version":3,"sources":["webpack://./src/style-about.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;EACxB;EACA;IACE,SAAS;EACX;EACA;IACE,gBAAgB;IAChB,mCAAmC;IACnC,yBAAyB;IACzB,WAAW;IACX,aAAa;;EAEf;EACA;IACE,cAAc;IACd,eAAe;EACjB;EACA;IACE,aAAa;EACf;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,kBAAkB;EACpB;;;;AAIF;IACI,aAAa;IACb,8BAA8B;IAC9B,wBAAwB;IACxB;sBACkB;IAClB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;IAC7B,gBAAgB;IAChB,WAAW;IACX,gBAAgB;IAChB,cAAc;IACd,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,mBAAmB;IACnB,wCAAwC;AAC5C;;;;;AAKA;IACI,oBAAoB;IACpB,aAAa;IACb,sBAAsB;IACtB,SAAS;;AAEb;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,iBAAiB;IACjB,mBAAmB;AACvB;;;AAGA;IACI,OAAO;IACP,cAAc;IACd,oBAAoB;IACpB,iBAAiB;;AAErB;;AAEA;IACI,mBAAmB;AACvB","sourcesContent":["*, *::before, *::after {\n    box-sizing: border-box;\n  }\n  * {\n    margin: 0;\n  }\n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n    background-color: #FFF4C9;\n    color: #333;\n    height: 100vh;\n\n  }\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n  input, button, textarea, select {\n    font: inherit;\n  }\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  #root, #__next {\n    isolation: isolate;\n  }\n\n\n\n.about{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto;\n    grid-template-areas: \n    'contact' 'timing';\n    gap: 10px;\n    margin-top: 15px;\n}\n\n.About,.timing{\n    font-family: 'Georgia', serif;\n    font-size: 1.2em;\n    color: #333;\n    line-height: 1.6;\n    margin: 0 auto;\n    width:100% ;\n    padding: 5px;\n    background-color: #C7E78B;\n    border-radius: 10px;\n    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);\n}\n\n\n\n\n.About{\n    grid-area: 'contact';\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n\n}\n\n.timing{\n    grid-area: 'timing';\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n    max-height: 200px;\n    align-items: center;\n}\n\n\n.timing h1,.timing h5{\n    flex: 1;\n    overflow: auto;\n    justify-self: center;\n    align-self:center;\n\n}\n\n.timing h5,.About h5{\n    margin-bottom: 50px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style-menu.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style-menu.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: #FFF4C9;
    color: #333;
    height: 100vh;

  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }


.home{
    padding: 10px;
}

.section{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(3,1fr);
    grid-template-areas: 
    'image image'
    'image image'
    'image image';
    width: 100%;
    gap: 10px;
}

.grid-item{
    grid-area: 'image';
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 6fr 1fr;
    grid-template-areas: 
    "align align"
    "price price";
    box-shadow: rgba(0, 0, 0, 0.05) -1px 0px 20px 13px;
}
.image{
    grid-area: 'Image';
    width: 200px;
    height: 300px;
    object-fit: contain;
}

.detail{
    grid-area: 'detail';
}

.price{
    grid-area: price;
}

.title{
    font-family:'Honk', sans-serif;
    font-size:2.5rem;
    text-align:center;
    line-height: 0.8;
    margin-left: auto;
    margin-right: auto;
}


/* .description{
    font-family: 'Nabla', system-ui;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings:
      "EDPT" 100,
      "EHLT" 12;
    background-color: black;
    border-radius: 10px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
} */



.price{
    font-family: 'Nabla', system-ui;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings:
      "EDPT" 100,
      "EHLT" 12;
    background-color: black;
    border-radius: 10px;
    width: 60%;
    height: 70%;
    margin-left: auto;
    margin-right: auto;
    align-content: center;
    margin-top: 10px;

}
/* .detail{
    font-family: "Honk", system-ui;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings:
      "MORF" 45,
      "SHLN" 50;
  } */


  .align{
    grid-area: 'align';
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 90px;
  }
`, "",{"version":3,"sources":["webpack://./src/style-menu.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;EACxB;EACA;IACE,SAAS;EACX;EACA;IACE,gBAAgB;IAChB,mCAAmC;IACnC,yBAAyB;IACzB,WAAW;IACX,aAAa;;EAEf;EACA;IACE,cAAc;IACd,eAAe;EACjB;EACA;IACE,aAAa;EACf;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,kBAAkB;EACpB;;;AAGF;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,iCAAiC;IACjC;;;iBAGa;IACb,WAAW;IACX,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B;;iBAEa;IACb,kDAAkD;AACtD;AACA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,8BAA8B;IAC9B,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;AACtB;;;AAGA;;;;;;;;;;;;;GAaG;;;;AAIH;IACI,+BAA+B;IAC/B,yBAAyB;IACzB,gBAAgB;IAChB,kBAAkB;IAClB;;eAEW;IACX,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;IACrB,gBAAgB;;AAEpB;AACA;;;;;;;;KAQK;;;EAGH;IACE,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,SAAS;EACX","sourcesContent":["*, *::before, *::after {\n    box-sizing: border-box;\n  }\n  * {\n    margin: 0;\n  }\n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n    background-color: #FFF4C9;\n    color: #333;\n    height: 100vh;\n\n  }\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n  input, button, textarea, select {\n    font: inherit;\n  }\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  #root, #__next {\n    isolation: isolate;\n  }\n\n\n.home{\n    padding: 10px;\n}\n\n.section{\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-template-rows: repeat(3,1fr);\n    grid-template-areas: \n    'image image'\n    'image image'\n    'image image';\n    width: 100%;\n    gap: 10px;\n}\n\n.grid-item{\n    grid-area: 'image';\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 6fr 1fr;\n    grid-template-areas: \n    \"align align\"\n    \"price price\";\n    box-shadow: rgba(0, 0, 0, 0.05) -1px 0px 20px 13px;\n}\n.image{\n    grid-area: 'Image';\n    width: 200px;\n    height: 300px;\n    object-fit: contain;\n}\n\n.detail{\n    grid-area: 'detail';\n}\n\n.price{\n    grid-area: price;\n}\n\n.title{\n    font-family:'Honk', sans-serif;\n    font-size:2.5rem;\n    text-align:center;\n    line-height: 0.8;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n\n/* .description{\n    font-family: 'Nabla', system-ui;\n    font-optical-sizing: auto;\n    font-weight: 400;\n    font-style: normal;\n    font-variation-settings:\n      \"EDPT\" 100,\n      \"EHLT\" 12;\n    background-color: black;\n    border-radius: 10px;\n    width: 80%;\n    margin-left: auto;\n    margin-right: auto;\n} */\n\n\n\n.price{\n    font-family: 'Nabla', system-ui;\n    font-optical-sizing: auto;\n    font-weight: 400;\n    font-style: normal;\n    font-variation-settings:\n      \"EDPT\" 100,\n      \"EHLT\" 12;\n    background-color: black;\n    border-radius: 10px;\n    width: 60%;\n    height: 70%;\n    margin-left: auto;\n    margin-right: auto;\n    align-content: center;\n    margin-top: 10px;\n\n}\n/* .detail{\n    font-family: \"Honk\", system-ui;\n    font-optical-sizing: auto;\n    font-weight: 400;\n    font-style: normal;\n    font-variation-settings:\n      \"MORF\" 45,\n      \"SHLN\" 50;\n  } */\n\n\n  .align{\n    grid-area: 'align';\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 90px;\n  }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assest/WhatsAppImage2024-06-12at01.34.54_a1cf90d7.jpg */ "./src/assest/WhatsAppImage2024-06-12at01.34.54_a1cf90d7.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background-color: #FFF4C9;
  color: #333;
  height: 100vh;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root, #__next {
  isolation: isolate;
}




@font-face {
  font-family: 'Times New Roman', Times, serif;
  src: url();
  font-size: 20px;
}

body {
  padding: 0px; /* Soft Sage Green */
}

nav{
  display: flex;
  background-color: #C7E78B;
  min-height: 80px;
  align-items: center;
  justify-content: space-around;
  font-weight: bolder;
  font-size: 30px;
}

button{
  all:unset;
  border: none;
  background-color: none;
  font-size: 70px;
  font-weight: bolder;
}


#content{
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-self: center;
  min-height: 80%;
  max-width: 100%;
}

.home{
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: #81AE64;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);  
  padding: 20px;  
  filter: drop-shadow(0 30px 10px rgba(0,0,0,0.125));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  text-align: center;
  width: 80%;
  gap:5px ;

}

.heading{
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  width: 100%;
  background-color: #C7E78B;
}


.momImage{
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 300px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  background-color: #C7E78B;
}

.intro{
  font-family: 'Georgia', serif;
  font-size: 1.2em;
  color: #333;
  line-height: 1.6;
  margin: 0 auto;
  width: 100%;
  padding: 5px;
  background-color: #C7E78B;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}

.intro::first-letter {
  font-size: 2em;
  color: #9b59b6;
}

.intro::before {
  content: open-quote;
  font-size: 2em;
  color: #9b59b6;
}

.intro::after {
  content: close-quote;
  font-size: 2em;
  color: #9b59b6;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;AACA;EACE,SAAS;AACX;AACA;EACE,gBAAgB;EAChB,mCAAmC;EACnC,yBAAyB;EACzB,WAAW;EACX,aAAa;AACf;AACA;EACE,cAAc;EACd,eAAe;AACjB;AACA;EACE,aAAa;AACf;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,kBAAkB;AACpB;;;;;AAKA;EACE,4CAA4C;EAC5C,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,YAAY,EAAE,oBAAoB;AACpC;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,gBAAgB;EAChB,mBAAmB;EACnB,6BAA6B;EAC7B,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,YAAY;EACZ,sBAAsB;EACtB,eAAe;EACf,mBAAmB;AACrB;;;AAGA;EACE,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,oBAAoB;EACpB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,0CAA0C;EAC1C,kDAAkD;EAClD,yBAAyB;EACzB,mBAAmB;EACnB,4CAA4C;EAC5C,aAAa;EACb,kDAAkD;EAClD,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;EAClB,UAAU;EACV,QAAQ;;AAEV;;AAEA;EACE,mBAAmB;EACnB,wCAAwC;EACxC,WAAW;EACX,yBAAyB;AAC3B;;;AAGA;EACE,yDAA8E;EAC9E,2BAA2B;EAC3B,wBAAwB;EACxB,4BAA4B;EAC5B,aAAa;EACb,WAAW;EACX,mBAAmB;EACnB,wCAAwC;EACxC,yBAAyB;AAC3B;;AAEA;EACE,6BAA6B;EAC7B,gBAAgB;EAChB,WAAW;EACX,gBAAgB;EAChB,cAAc;EACd,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,mBAAmB;EACnB,wCAAwC;AAC1C;;AAEA;EACE,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,oBAAoB;EACpB,cAAc;EACd,cAAc;AAChB","sourcesContent":["*, *::before, *::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  background-color: #FFF4C9;\n  color: #333;\n  height: 100vh;\n}\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\ninput, button, textarea, select {\n  font: inherit;\n}\np, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n}\n#root, #__next {\n  isolation: isolate;\n}\n\n\n\n\n@font-face {\n  font-family: 'Times New Roman', Times, serif;\n  src: url();\n  font-size: 20px;\n}\n\nbody {\n  padding: 0px; /* Soft Sage Green */\n}\n\nnav{\n  display: flex;\n  background-color: #C7E78B;\n  min-height: 80px;\n  align-items: center;\n  justify-content: space-around;\n  font-weight: bolder;\n  font-size: 30px;\n}\n\nbutton{\n  all:unset;\n  border: none;\n  background-color: none;\n  font-size: 70px;\n  font-weight: bolder;\n}\n\n\n#content{\n  display: flex;\n  margin-top: 20px;\n  align-items: center;\n  justify-content: center;\n  align-self: center;\n  justify-self: center;\n  min-height: 80%;\n  max-width: 100%;\n}\n\n.home{\n  backdrop-filter: blur(16px) saturate(180%);\n  -webkit-backdrop-filter: blur(16px) saturate(180%);\n  background-color: #81AE64;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.125);  \n  padding: 20px;  \n  filter: drop-shadow(0 30px 10px rgba(0,0,0,0.125));\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content:center;\n  text-align: center;\n  width: 80%;\n  gap:5px ;\n\n}\n\n.heading{\n  border-radius: 10px;\n  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);\n  width: 100%;\n  background-color: #C7E78B;\n}\n\n\n.momImage{\n  background-image: url(./assest/WhatsAppImage2024-06-12at01.34.54_a1cf90d7.jpg);\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  height: 300px;\n  width: 100%;\n  border-radius: 10px;\n  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);\n  background-color: #C7E78B;\n}\n\n.intro{\n  font-family: 'Georgia', serif;\n  font-size: 1.2em;\n  color: #333;\n  line-height: 1.6;\n  margin: 0 auto;\n  width: 100%;\n  padding: 5px;\n  background-color: #C7E78B;\n  border-radius: 10px;\n  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);\n}\n\n.intro::first-letter {\n  font-size: 2em;\n  color: #9b59b6;\n}\n\n.intro::before {\n  content: open-quote;\n  font-size: 2em;\n  color: #9b59b6;\n}\n\n.intro::after {\n  content: close-quote;\n  font-size: 2em;\n  color: #9b59b6;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style-about.css":
/*!*****************************!*\
  !*** ./src/style-about.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style-about.css */ "./node_modules/css-loader/dist/cjs.js!./src/style-about.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_about_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_about_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style-menu.css":
/*!****************************!*\
  !*** ./src/style-menu.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style-menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/style-menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ about)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_about_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-about.css */ "./src/style-about.css");




function about(){
    const home = document.createElement('div');
    const heading = document.createElement('h1');
    const para = document.createElement('div');
    const timing = document.createElement('div')
    const About = document.createElement('div');
    const timing_1 = document.createElement('h2');
    const timing_2 = document.createElement('h5');
    const About_1 = document.createElement('h2');
    const About_2 = document.createElement('h5');




    para.classList.add('about');
    para.appendChild(timing);
    timing.appendChild(timing_1);
    timing.appendChild(timing_2);
    About.appendChild(About_1);
    About.appendChild(About_2);
    para.appendChild(About);




    timing.classList.add('timing');
    About.classList.add('About');
    home.classList.add('home');    
    heading.classList.add('heading');



    timing_1.textContent="Timings";
    timing_2.textContent="24/7:) BUT DON'T BE CRUEL"

    About_1.textContent = "Contact Us";
    About_2.textContent = "94543039**"

    heading.textContent = 'About Us';
    //About.textContent = "MOM's Kitchen is more than just a restaurant; it's a heartfelt tribute to the timeless art of home cooking. We pride ourselves on the simplicity and authenticity of our offerings, where every dish is infused with the love and passion reminiscent of a mother's touch. Though our menu may be small, each item is crafted to perfection, promising an unforgettable culinary experience that feels like a warm hug from mom. At MOM's Kitchen, we aim to rekindle cherished memories and create new ones with every bite. Come and savor the essence of home, where the greatest hands, love, and passion come together on your plate";



    home.appendChild(heading);
    home.appendChild(para);

    return home;

}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


function home(){
    const home = document.createElement('div');
    const heading = document.createElement('h1');
    const image = document.createElement('div');
    const para = document.createElement('p');



    home.classList.add('home');
    image.classList.add('momImage');
    para.classList.add('intro');
    heading.classList.add('heading');

    

    
    heading.textContent = "MOM's Kitchen";
    para.textContent=`Welcome to "Mom's Kitchen", where love and culinary expertise create an unforgettable dining experience. Our menu, though not extensive,  is crafted with care and dedication. Each bite is a tribute to a mother's love, aiming to evoke the warmth of home-cooked meals. At "Mom's Kitchen", we serve not just food, but a slice of home and a  dash of nostalgia. Welcome to a dining experience that's truly out of this world.`;



    home.appendChild(heading);
    home.appendChild(image);
    home.appendChild(para);

    return home;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_menu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-menu.css */ "./src/style-menu.css");
/* harmony import */ var _assest_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assest/1.jpg */ "./src/assest/1.jpg");
/* harmony import */ var _assest_2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assest/2.jpg */ "./src/assest/2.jpg");
/* harmony import */ var _assest_3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assest/3.jpg */ "./src/assest/3.jpg");
/* harmony import */ var _assest_4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assest/4.jpg */ "./src/assest/4.jpg");
/* harmony import */ var _assest_5_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assest/5.jpg */ "./src/assest/5.jpg");
/* harmony import */ var _assest_6_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assest/6.jpg */ "./src/assest/6.jpg");











function menu(){
    const home = document.createElement('div');
    const heading = document.createElement('h1');
    const section = document.createElement('div');






    home.classList.add('home');
    heading.classList.add('heading');
    section.classList.add('section');


    



    home.classList.add('home');
    heading.classList.add('heading');
    section.classList.add('section');
    
    


    heading.textContent = 'MENU';




    home.appendChild(heading);
    home.appendChild(section);


    const bgImages = [
        _assest_1_jpg__WEBPACK_IMPORTED_MODULE_2__,_assest_2_jpg__WEBPACK_IMPORTED_MODULE_3__,_assest_3_jpg__WEBPACK_IMPORTED_MODULE_4__,_assest_4_jpg__WEBPACK_IMPORTED_MODULE_5__,_assest_5_jpg__WEBPACK_IMPORTED_MODULE_6__,_assest_6_jpg__WEBPACK_IMPORTED_MODULE_7__
    ];

    const titles = [
        "DOSA",'BREAD OMELETTE','CHOLE BHATURE','MONGODE','ALOO PYAAZ PAKODI','CHOLE SAMOSA'
    ];


    // for (let i = 0; i < 6; i++) {
    //     // Create a new div element
    //     const gridItem = document.createElement('div');
    //     const img = document.createElement('div');
    //     const detail = document.createElement('div');

    //     img.classList.add('image');
    //     detail.classList.add('detail');
    //     // Add a class to the div
    //     gridItem.classList.add('grid-item');

    //     gridItem.appendChild(img);
    //     gridItem.appendChild(detail);



    //     // Set the background image for the grid item
    //     img.style.backgroundImage = bgImages[i];

    //     // Add content to the div (optional)

    //     // Append the new div to the grid container
    //     section.appendChild(gridItem);
    // }

    bgImages.forEach((src,index) => {
        // Create a new div element
        const gridItem = document.createElement('div');
        const img = document.createElement('img');
        const detail = document.createElement('div');
        const title = document.createElement('h1');
        const price = document.createElement('div');
        const align = document.createElement('div');
        //const description = document.createElement('div');

        img.classList.add('image');
        detail.classList.add('detail');
        title.classList.add('title');
        align.classList.add('align');
        // Add a class to the div
        gridItem.classList.add('grid-item');
        price.classList.add('price');
        //description.classList.add('description');
        align.appendChild(img);
        align.appendChild(detail);

        detail.appendChild(title);
        //detail.appendChild(description);
        // gridItem.appendChild(img);
        // gridItem.appendChild(detail);
        gridItem.appendChild(align);
        gridItem.appendChild(price);
        
    
        console.log(src);
        img.src=src;

        //description.textContent="batter of rice"
        title.textContent = titles[index];
        price.textContent = "Price : JUST ASK NICELY";
        // img.style.backgroundImage = `url(${src})`;

        // console.log(`Image ${index + 1} background:`, img.style.backgroundImage);
        // Append the div to the container
        section.appendChild(gridItem);
    });




    return home;

}

/***/ }),

/***/ "./src/assest/1.jpg":
/*!**************************!*\
  !*** ./src/assest/1.jpg ***!
  \**************************/
/***/ ((module) => {

module.exports = "asset/7307121092f9b1b9d549.jpg";

/***/ }),

/***/ "./src/assest/2.jpg":
/*!**************************!*\
  !*** ./src/assest/2.jpg ***!
  \**************************/
/***/ ((module) => {

module.exports = "asset/2a7336ee512027bb97ef.jpg";

/***/ }),

/***/ "./src/assest/3.jpg":
/*!**************************!*\
  !*** ./src/assest/3.jpg ***!
  \**************************/
/***/ ((module) => {

module.exports = "asset/30be49dd6b67e416d733.jpg";

/***/ }),

/***/ "./src/assest/4.jpg":
/*!**************************!*\
  !*** ./src/assest/4.jpg ***!
  \**************************/
/***/ ((module) => {

module.exports = "asset/5d300404b2205af5229b.jpg";

/***/ }),

/***/ "./src/assest/5.jpg":
/*!**************************!*\
  !*** ./src/assest/5.jpg ***!
  \**************************/
/***/ ((module) => {

module.exports = "asset/6505b629c7f6ee0f248e.jpg";

/***/ }),

/***/ "./src/assest/6.jpg":
/*!**************************!*\
  !*** ./src/assest/6.jpg ***!
  \**************************/
/***/ ((module) => {

module.exports = "asset/f38e871049d0429d7ad6.jpg";

/***/ }),

/***/ "./src/assest/WhatsAppImage2024-06-12at01.34.54_a1cf90d7.jpg":
/*!*******************************************************************!*\
  !*** ./src/assest/WhatsAppImage2024-06-12at01.34.54_a1cf90d7.jpg ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "asset/252e05fa848a67a3eb68.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
console.log('running successfully!!!!!!!');





function pageLoad(){
    const content = document.querySelector('#content');
    const home = document.querySelector('#home');
    const menu = document.querySelector('#menu');
    const about = document.querySelector('#about');


    content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])());

    home.addEventListener('click',()=>{
        content.removeChild(content.lastChild);
        content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
    })

    menu.addEventListener('click',()=>{
        content.removeChild(content.lastChild);
        content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
    })


    about.addEventListener('click',()=>{
        content.removeChild(content.lastChild);
        content.appendChild((0,_about_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
    })
}

pageLoad();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxzQkFBc0IsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFh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O0FBQ0E7QUFDQSw0QkFBNEIsb0RBQUk7QUFDaEMsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsNEJBQTRCLG9EQUFJO0FBQ2hDLEtBQUs7OztBQUdMO0FBQ0E7QUFDQSw0QkFBNEIscURBQUs7QUFDakMsS0FBSztBQUNMOztBQUVBLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUtYWJvdXQuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS1tZW51LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUtYWJvdXQuY3NzPzQyMzgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLW1lbnUuY3NzPzAwMjciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgKiB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIGJvZHkge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjRDOTtcbiAgICBjb2xvcjogIzMzMztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gIH1cbiAgaW1nLCBwaWN0dXJlLCB2aWRlbywgY2FudmFzLCBzdmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuICBpbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0IHtcbiAgICBmb250OiBpbmhlcml0O1xuICB9XG4gIHAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIH1cbiAgI3Jvb3QsICNfX25leHQge1xuICAgIGlzb2xhdGlvbjogaXNvbGF0ZTtcbiAgfVxuXG5cblxuLmFib3V0e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAnY29udGFjdCcgJ3RpbWluZyc7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5BYm91dCwudGltaW5ne1xuICAgIGZvbnQtZmFtaWx5OiAnR2VvcmdpYScsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDoxMDAlIDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M3RTc4QjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG59XG5cblxuXG5cbi5BYm91dHtcbiAgICBncmlkLWFyZWE6ICdjb250YWN0JztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA1MHB4O1xuXG59XG5cbi50aW1pbmd7XG4gICAgZ3JpZC1hcmVhOiAndGltaW5nJztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA1MHB4O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLnRpbWluZyBoMSwudGltaW5nIGg1e1xuICAgIGZsZXg6IDE7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjpjZW50ZXI7XG5cbn1cblxuLnRpbWluZyBoNSwuQWJvdXQgaDV7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS1hYm91dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1DQUFtQztJQUNuQyx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGFBQWE7O0VBRWY7RUFDQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCOzs7O0FBSUY7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHdCQUF3QjtJQUN4QjtzQkFDa0I7SUFDbEIsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHdDQUF3QztBQUM1Qzs7Ozs7QUFLQTtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7O0FBRWI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxPQUFPO0lBQ1AsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcbiAgKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gIGJvZHkge1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjRDOTtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxuICB9XFxuICBpbWcsIHBpY3R1cmUsIHZpZGVvLCBjYW52YXMsIHN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuICBpbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0IHtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gIH1cXG4gIHAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgfVxcbiAgI3Jvb3QsICNfX25leHQge1xcbiAgICBpc29sYXRpb246IGlzb2xhdGU7XFxuICB9XFxuXFxuXFxuXFxuLmFib3V0e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICdjb250YWN0JyAndGltaW5nJztcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4uQWJvdXQsLnRpbWluZ3tcXG4gICAgZm9udC1mYW1pbHk6ICdHZW9yZ2lhJywgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgICBsaW5lLWhlaWdodDogMS42O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6MTAwJSA7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M3RTc4QjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcXG59XFxuXFxuXFxuXFxuXFxuLkFib3V0e1xcbiAgICBncmlkLWFyZWE6ICdjb250YWN0JztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1MHB4O1xcblxcbn1cXG5cXG4udGltaW5ne1xcbiAgICBncmlkLWFyZWE6ICd0aW1pbmcnO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4udGltaW5nIGgxLC50aW1pbmcgaDV7XFxuICAgIGZsZXg6IDE7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjpjZW50ZXI7XFxuXFxufVxcblxcbi50aW1pbmcgaDUsLkFib3V0IGg1e1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgKiB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIGJvZHkge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjRDOTtcbiAgICBjb2xvcjogIzMzMztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gIH1cbiAgaW1nLCBwaWN0dXJlLCB2aWRlbywgY2FudmFzLCBzdmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuICBpbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0IHtcbiAgICBmb250OiBpbmhlcml0O1xuICB9XG4gIHAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIH1cbiAgI3Jvb3QsICNfX25leHQge1xuICAgIGlzb2xhdGlvbjogaXNvbGF0ZTtcbiAgfVxuXG5cbi5ob21le1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zZWN0aW9ue1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAnaW1hZ2UgaW1hZ2UnXG4gICAgJ2ltYWdlIGltYWdlJ1xuICAgICdpbWFnZSBpbWFnZSc7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uZ3JpZC1pdGVte1xuICAgIGdyaWQtYXJlYTogJ2ltYWdlJztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDZmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgXCJhbGlnbiBhbGlnblwiXG4gICAgXCJwcmljZSBwcmljZVwiO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgLTFweCAwcHggMjBweCAxM3B4O1xufVxuLmltYWdle1xuICAgIGdyaWQtYXJlYTogJ0ltYWdlJztcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uZGV0YWlse1xuICAgIGdyaWQtYXJlYTogJ2RldGFpbCc7XG59XG5cbi5wcmljZXtcbiAgICBncmlkLWFyZWE6IHByaWNlO1xufVxuXG4udGl0bGV7XG4gICAgZm9udC1mYW1pbHk6J0hvbmsnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZToyLjVyZW07XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDAuODtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cblxuLyogLmRlc2NyaXB0aW9ue1xuICAgIGZvbnQtZmFtaWx5OiAnTmFibGEnLCBzeXN0ZW0tdWk7XG4gICAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcbiAgICAgIFwiRURQVFwiIDEwMCxcbiAgICAgIFwiRUhMVFwiIDEyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59ICovXG5cblxuXG4ucHJpY2V7XG4gICAgZm9udC1mYW1pbHk6ICdOYWJsYScsIHN5c3RlbS11aTtcbiAgICBmb250LW9wdGljYWwtc2l6aW5nOiBhdXRvO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxuICAgICAgXCJFRFBUXCIgMTAwLFxuICAgICAgXCJFSExUXCIgMTI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogNzAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcblxufVxuLyogLmRldGFpbHtcbiAgICBmb250LWZhbWlseTogXCJIb25rXCIsIHN5c3RlbS11aTtcbiAgICBmb250LW9wdGljYWwtc2l6aW5nOiBhdXRvO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxuICAgICAgXCJNT1JGXCIgNDUsXG4gICAgICBcIlNITE5cIiA1MDtcbiAgfSAqL1xuXG5cbiAgLmFsaWdue1xuICAgIGdyaWQtYXJlYTogJ2FsaWduJztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDkwcHg7XG4gIH1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLW1lbnUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixtQ0FBbUM7SUFDbkMseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxhQUFhOztFQUVmO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjs7O0FBR0Y7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakM7OztpQkFHYTtJQUNiLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0I7O2lCQUVhO0lBQ2Isa0RBQWtEO0FBQ3REO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7R0FhRzs7OztBQUlIO0lBQ0ksK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCOztlQUVXO0lBQ1gsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGdCQUFnQjs7QUFFcEI7QUFDQTs7Ozs7Ozs7S0FRSzs7O0VBR0g7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsU0FBUztFQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcbiAgKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gIGJvZHkge1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjRDOTtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxuICB9XFxuICBpbWcsIHBpY3R1cmUsIHZpZGVvLCBjYW52YXMsIHN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuICBpbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0IHtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gIH1cXG4gIHAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgfVxcbiAgI3Jvb3QsICNfX25leHQge1xcbiAgICBpc29sYXRpb246IGlzb2xhdGU7XFxuICB9XFxuXFxuXFxuLmhvbWV7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5zZWN0aW9ue1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICdpbWFnZSBpbWFnZSdcXG4gICAgJ2ltYWdlIGltYWdlJ1xcbiAgICAnaW1hZ2UgaW1hZ2UnO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZ3JpZC1pdGVte1xcbiAgICBncmlkLWFyZWE6ICdpbWFnZSc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcImFsaWduIGFsaWduXFxcIlxcbiAgICBcXFwicHJpY2UgcHJpY2VcXFwiO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIC0xcHggMHB4IDIwcHggMTNweDtcXG59XFxuLmltYWdle1xcbiAgICBncmlkLWFyZWE6ICdJbWFnZSc7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuLmRldGFpbHtcXG4gICAgZ3JpZC1hcmVhOiAnZGV0YWlsJztcXG59XFxuXFxuLnByaWNle1xcbiAgICBncmlkLWFyZWE6IHByaWNlO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIGZvbnQtZmFtaWx5OidIb25rJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOjIuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAwLjg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcblxcbi8qIC5kZXNjcmlwdGlvbntcXG4gICAgZm9udC1mYW1pbHk6ICdOYWJsYScsIHN5c3RlbS11aTtcXG4gICAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICAgICBcXFwiRURQVFxcXCIgMTAwLFxcbiAgICAgIFxcXCJFSExUXFxcIiAxMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufSAqL1xcblxcblxcblxcbi5wcmljZXtcXG4gICAgZm9udC1mYW1pbHk6ICdOYWJsYScsIHN5c3RlbS11aTtcXG4gICAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICAgICBcXFwiRURQVFxcXCIgMTAwLFxcbiAgICAgIFxcXCJFSExUXFxcIiAxMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuXFxufVxcbi8qIC5kZXRhaWx7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSG9ua1xcXCIsIHN5c3RlbS11aTtcXG4gICAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICAgICBcXFwiTU9SRlxcXCIgNDUsXFxuICAgICAgXFxcIlNITE5cXFwiIDUwO1xcbiAgfSAqL1xcblxcblxcbiAgLmFsaWdue1xcbiAgICBncmlkLWFyZWE6ICdhbGlnbic7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOTBweDtcXG4gIH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXN0L1doYXRzQXBwSW1hZ2UyMDI0LTA2LTEyYXQwMS4zNC41NF9hMWNmOTBkNy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuKiB7XG4gIG1hcmdpbjogMDtcbn1cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMS41O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjRDOTtcbiAgY29sb3I6ICMzMzM7XG4gIGhlaWdodDogMTAwdmg7XG59XG5pbWcsIHBpY3R1cmUsIHZpZGVvLCBjYW52YXMsIHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5pbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0IHtcbiAgZm9udDogaW5oZXJpdDtcbn1cbnAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuI3Jvb3QsICNfX25leHQge1xuICBpc29sYXRpb246IGlzb2xhdGU7XG59XG5cblxuXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgc3JjOiB1cmwoKTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5ib2R5IHtcbiAgcGFkZGluZzogMHB4OyAvKiBTb2Z0IFNhZ2UgR3JlZW4gKi9cbn1cblxubmF2e1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzdFNzhCO1xuICBtaW4taGVpZ2h0OiA4MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5idXR0b257XG4gIGFsbDp1bnNldDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xuICBmb250LXNpemU6IDcwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cblxuI2NvbnRlbnR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA4MCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmhvbWV7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KSBzYXR1cmF0ZSgxODAlKTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCkgc2F0dXJhdGUoMTgwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MUFFNjQ7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMjUpOyAgXG4gIHBhZGRpbmc6IDIwcHg7ICBcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDMwcHggMTBweCByZ2JhKDAsMCwwLDAuMTI1KSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgZ2FwOjVweCA7XG5cbn1cblxuLmhlYWRpbmd7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzdFNzhCO1xufVxuXG5cbi5tb21JbWFnZXtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDN0U3OEI7XG59XG5cbi5pbnRyb3tcbiAgZm9udC1mYW1pbHk6ICdHZW9yZ2lhJywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGNvbG9yOiAjMzMzO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M3RTc4QjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbn1cblxuLmludHJvOjpmaXJzdC1sZXR0ZXIge1xuICBmb250LXNpemU6IDJlbTtcbiAgY29sb3I6ICM5YjU5YjY7XG59XG5cbi5pbnRybzo6YmVmb3JlIHtcbiAgY29udGVudDogb3Blbi1xdW90ZTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGNvbG9yOiAjOWI1OWI2O1xufVxuXG4uaW50cm86OmFmdGVyIHtcbiAgY29udGVudDogY2xvc2UtcXVvdGU7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogIzliNTliNjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1DQUFtQztFQUNuQyx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7Ozs7O0FBS0E7RUFDRSw0Q0FBNEM7RUFDNUMsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZLEVBQUUsb0JBQW9CO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsa0RBQWtEO0VBQ2xELHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsNENBQTRDO0VBQzVDLGFBQWE7RUFDYixrREFBa0Q7RUFDbEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTs7QUFFVjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7O0FBR0E7RUFDRSx5REFBOEU7RUFDOUUsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuKiB7XFxuICBtYXJnaW46IDA7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjRDOTtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuaW1nLCBwaWN0dXJlLCB2aWRlbywgY2FudmFzLCBzdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbmlucHV0LCBidXR0b24sIHRleHRhcmVhLCBzZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxucCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG4jcm9vdCwgI19fbmV4dCB7XFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblxcblxcblxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICBzcmM6IHVybCgpO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDBweDsgLyogU29mdCBTYWdlIEdyZWVuICovXFxufVxcblxcbm5hdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzdFNzhCO1xcbiAgbWluLWhlaWdodDogODBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbmJ1dHRvbntcXG4gIGFsbDp1bnNldDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxuICBmb250LXNpemU6IDcwcHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG5cXG4jY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiA4MCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ob21le1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpIHNhdHVyYXRlKDE4MCUpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCkgc2F0dXJhdGUoMTgwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFBRTY0O1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMjUpOyAgXFxuICBwYWRkaW5nOiAyMHB4OyAgXFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMzBweCAxMHB4IHJnYmEoMCwwLDAsMC4xMjUpKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogODAlO1xcbiAgZ2FwOjVweCA7XFxuXFxufVxcblxcbi5oZWFkaW5ne1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDN0U3OEI7XFxufVxcblxcblxcbi5tb21JbWFnZXtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2VzdC9XaGF0c0FwcEltYWdlMjAyNC0wNi0xMmF0MDEuMzQuNTRfYTFjZjkwZDcuanBnKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDN0U3OEI7XFxufVxcblxcbi5pbnRyb3tcXG4gIGZvbnQtZmFtaWx5OiAnR2VvcmdpYScsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzdFNzhCO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XFxufVxcblxcbi5pbnRybzo6Zmlyc3QtbGV0dGVyIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgY29sb3I6ICM5YjU5YjY7XFxufVxcblxcbi5pbnRybzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IG9wZW4tcXVvdGU7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGNvbG9yOiAjOWI1OWI2O1xcbn1cXG5cXG4uaW50cm86OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IGNsb3NlLXF1b3RlO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBjb2xvcjogIzliNTliNjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLWFib3V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLWFib3V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS1tZW51LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLW1lbnUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUtYWJvdXQuY3NzJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYm91dCgpe1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGltaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBBYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpbWluZ18xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCB0aW1pbmdfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3QgQWJvdXRfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgQWJvdXRfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG5cblxuXG5cbiAgICBwYXJhLmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XG4gICAgcGFyYS5hcHBlbmRDaGlsZCh0aW1pbmcpO1xuICAgIHRpbWluZy5hcHBlbmRDaGlsZCh0aW1pbmdfMSk7XG4gICAgdGltaW5nLmFwcGVuZENoaWxkKHRpbWluZ18yKTtcbiAgICBBYm91dC5hcHBlbmRDaGlsZChBYm91dF8xKTtcbiAgICBBYm91dC5hcHBlbmRDaGlsZChBYm91dF8yKTtcbiAgICBwYXJhLmFwcGVuZENoaWxkKEFib3V0KTtcblxuXG5cblxuICAgIHRpbWluZy5jbGFzc0xpc3QuYWRkKCd0aW1pbmcnKTtcbiAgICBBYm91dC5jbGFzc0xpc3QuYWRkKCdBYm91dCcpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpOyAgICBcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcblxuXG5cbiAgICB0aW1pbmdfMS50ZXh0Q29udGVudD1cIlRpbWluZ3NcIjtcbiAgICB0aW1pbmdfMi50ZXh0Q29udGVudD1cIjI0Lzc6KSBCVVQgRE9OJ1QgQkUgQ1JVRUxcIlxuXG4gICAgQWJvdXRfMS50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xuICAgIEFib3V0XzIudGV4dENvbnRlbnQgPSBcIjk0NTQzMDM5KipcIlxuXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdBYm91dCBVcyc7XG4gICAgLy9BYm91dC50ZXh0Q29udGVudCA9IFwiTU9NJ3MgS2l0Y2hlbiBpcyBtb3JlIHRoYW4ganVzdCBhIHJlc3RhdXJhbnQ7IGl0J3MgYSBoZWFydGZlbHQgdHJpYnV0ZSB0byB0aGUgdGltZWxlc3MgYXJ0IG9mIGhvbWUgY29va2luZy4gV2UgcHJpZGUgb3Vyc2VsdmVzIG9uIHRoZSBzaW1wbGljaXR5IGFuZCBhdXRoZW50aWNpdHkgb2Ygb3VyIG9mZmVyaW5ncywgd2hlcmUgZXZlcnkgZGlzaCBpcyBpbmZ1c2VkIHdpdGggdGhlIGxvdmUgYW5kIHBhc3Npb24gcmVtaW5pc2NlbnQgb2YgYSBtb3RoZXIncyB0b3VjaC4gVGhvdWdoIG91ciBtZW51IG1heSBiZSBzbWFsbCwgZWFjaCBpdGVtIGlzIGNyYWZ0ZWQgdG8gcGVyZmVjdGlvbiwgcHJvbWlzaW5nIGFuIHVuZm9yZ2V0dGFibGUgY3VsaW5hcnkgZXhwZXJpZW5jZSB0aGF0IGZlZWxzIGxpa2UgYSB3YXJtIGh1ZyBmcm9tIG1vbS4gQXQgTU9NJ3MgS2l0Y2hlbiwgd2UgYWltIHRvIHJla2luZGxlIGNoZXJpc2hlZCBtZW1vcmllcyBhbmQgY3JlYXRlIG5ldyBvbmVzIHdpdGggZXZlcnkgYml0ZS4gQ29tZSBhbmQgc2F2b3IgdGhlIGVzc2VuY2Ugb2YgaG9tZSwgd2hlcmUgdGhlIGdyZWF0ZXN0IGhhbmRzLCBsb3ZlLCBhbmQgcGFzc2lvbiBjb21lIHRvZ2V0aGVyIG9uIHlvdXIgcGxhdGVcIjtcblxuXG5cbiAgICBob21lLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQocGFyYSk7XG5cbiAgICByZXR1cm4gaG9tZTtcblxufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCl7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuXG5cbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdtb21JbWFnZScpO1xuICAgIHBhcmEuY2xhc3NMaXN0LmFkZCgnaW50cm8nKTtcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcblxuICAgIFxuXG4gICAgXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiTU9NJ3MgS2l0Y2hlblwiO1xuICAgIHBhcmEudGV4dENvbnRlbnQ9YFdlbGNvbWUgdG8gXCJNb20ncyBLaXRjaGVuXCIsIHdoZXJlIGxvdmUgYW5kIGN1bGluYXJ5IGV4cGVydGlzZSBjcmVhdGUgYW4gdW5mb3JnZXR0YWJsZSBkaW5pbmcgZXhwZXJpZW5jZS4gT3VyIG1lbnUsIHRob3VnaCBub3QgZXh0ZW5zaXZlLCAgaXMgY3JhZnRlZCB3aXRoIGNhcmUgYW5kIGRlZGljYXRpb24uIEVhY2ggYml0ZSBpcyBhIHRyaWJ1dGUgdG8gYSBtb3RoZXIncyBsb3ZlLCBhaW1pbmcgdG8gZXZva2UgdGhlIHdhcm10aCBvZiBob21lLWNvb2tlZCBtZWFscy4gQXQgXCJNb20ncyBLaXRjaGVuXCIsIHdlIHNlcnZlIG5vdCBqdXN0IGZvb2QsIGJ1dCBhIHNsaWNlIG9mIGhvbWUgYW5kIGEgIGRhc2ggb2Ygbm9zdGFsZ2lhLiBXZWxjb21lIHRvIGEgZGluaW5nIGV4cGVyaWVuY2UgdGhhdCdzIHRydWx5IG91dCBvZiB0aGlzIHdvcmxkLmA7XG5cblxuXG4gICAgaG9tZS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBob21lLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBob21lLmFwcGVuZENoaWxkKHBhcmEpO1xuXG4gICAgcmV0dXJuIGhvbWU7XG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUtbWVudS5jc3MnO1xuaW1wb3J0IEltYWdlMSBmcm9tICcuL2Fzc2VzdC8xLmpwZyc7XG5pbXBvcnQgSW1hZ2UyIGZyb20gJy4vYXNzZXN0LzIuanBnJztcbmltcG9ydCBJbWFnZTMgZnJvbSAnLi9hc3Nlc3QvMy5qcGcnO1xuaW1wb3J0IEltYWdlNCBmcm9tICcuL2Fzc2VzdC80LmpwZyc7XG5pbXBvcnQgSW1hZ2U1IGZyb20gJy4vYXNzZXN0LzUuanBnJztcbmltcG9ydCBJbWFnZTYgZnJvbSAnLi9hc3Nlc3QvNi5qcGcnO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpe1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblxuXG5cblxuXG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJyk7XG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uJyk7XG5cblxuICAgIFxuXG5cblxuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2VjdGlvbicpO1xuICAgIFxuICAgIFxuXG5cbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ01FTlUnO1xuXG5cblxuXG4gICAgaG9tZS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBob21lLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuXG5cbiAgICBjb25zdCBiZ0ltYWdlcyA9IFtcbiAgICAgICAgSW1hZ2UxLEltYWdlMixJbWFnZTMsSW1hZ2U0LEltYWdlNSxJbWFnZTZcbiAgICBdO1xuXG4gICAgY29uc3QgdGl0bGVzID0gW1xuICAgICAgICBcIkRPU0FcIiwnQlJFQUQgT01FTEVUVEUnLCdDSE9MRSBCSEFUVVJFJywnTU9OR09ERScsJ0FMT08gUFlBQVogUEFLT0RJJywnQ0hPTEUgU0FNT1NBJ1xuICAgIF07XG5cblxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgLy8gICAgIC8vIENyZWF0ZSBhIG5ldyBkaXYgZWxlbWVudFxuICAgIC8vICAgICBjb25zdCBncmlkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyAgICAgY29uc3QgZGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvLyAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2ltYWdlJyk7XG4gICAgLy8gICAgIGRldGFpbC5jbGFzc0xpc3QuYWRkKCdkZXRhaWwnKTtcbiAgICAvLyAgICAgLy8gQWRkIGEgY2xhc3MgdG8gdGhlIGRpdlxuICAgIC8vICAgICBncmlkSXRlbS5jbGFzc0xpc3QuYWRkKCdncmlkLWl0ZW0nKTtcblxuICAgIC8vICAgICBncmlkSXRlbS5hcHBlbmRDaGlsZChpbWcpO1xuICAgIC8vICAgICBncmlkSXRlbS5hcHBlbmRDaGlsZChkZXRhaWwpO1xuXG5cblxuICAgIC8vICAgICAvLyBTZXQgdGhlIGJhY2tncm91bmQgaW1hZ2UgZm9yIHRoZSBncmlkIGl0ZW1cbiAgICAvLyAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGJnSW1hZ2VzW2ldO1xuXG4gICAgLy8gICAgIC8vIEFkZCBjb250ZW50IHRvIHRoZSBkaXYgKG9wdGlvbmFsKVxuXG4gICAgLy8gICAgIC8vIEFwcGVuZCB0aGUgbmV3IGRpdiB0byB0aGUgZ3JpZCBjb250YWluZXJcbiAgICAvLyAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChncmlkSXRlbSk7XG4gICAgLy8gfVxuXG4gICAgYmdJbWFnZXMuZm9yRWFjaCgoc3JjLGluZGV4KSA9PiB7XG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBkaXYgZWxlbWVudFxuICAgICAgICBjb25zdCBncmlkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29uc3QgZGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgYWxpZ24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgLy9jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCdpbWFnZScpO1xuICAgICAgICBkZXRhaWwuY2xhc3NMaXN0LmFkZCgnZGV0YWlsJyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICAgIGFsaWduLmNsYXNzTGlzdC5hZGQoJ2FsaWduJyk7XG4gICAgICAgIC8vIEFkZCBhIGNsYXNzIHRvIHRoZSBkaXZcbiAgICAgICAgZ3JpZEl0ZW0uY2xhc3NMaXN0LmFkZCgnZ3JpZC1pdGVtJyk7XG4gICAgICAgIHByaWNlLmNsYXNzTGlzdC5hZGQoJ3ByaWNlJyk7XG4gICAgICAgIC8vZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgYWxpZ24uYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgYWxpZ24uYXBwZW5kQ2hpbGQoZGV0YWlsKTtcblxuICAgICAgICBkZXRhaWwuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICAvL2RldGFpbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIC8vIGdyaWRJdGVtLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIC8vIGdyaWRJdGVtLmFwcGVuZENoaWxkKGRldGFpbCk7XG4gICAgICAgIGdyaWRJdGVtLmFwcGVuZENoaWxkKGFsaWduKTtcbiAgICAgICAgZ3JpZEl0ZW0uYXBwZW5kQ2hpbGQocHJpY2UpO1xuICAgICAgICBcbiAgICBcbiAgICAgICAgY29uc29sZS5sb2coc3JjKTtcbiAgICAgICAgaW1nLnNyYz1zcmM7XG5cbiAgICAgICAgLy9kZXNjcmlwdGlvbi50ZXh0Q29udGVudD1cImJhdHRlciBvZiByaWNlXCJcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZXNbaW5kZXhdO1xuICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9IFwiUHJpY2UgOiBKVVNUIEFTSyBOSUNFTFlcIjtcbiAgICAgICAgLy8gaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtzcmN9KWA7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coYEltYWdlICR7aW5kZXggKyAxfSBiYWNrZ3JvdW5kOmAsIGltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UpO1xuICAgICAgICAvLyBBcHBlbmQgdGhlIGRpdiB0byB0aGUgY29udGFpbmVyXG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZ3JpZEl0ZW0pO1xuICAgIH0pO1xuXG5cblxuXG4gICAgcmV0dXJuIGhvbWU7XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJjb25zb2xlLmxvZygncnVubmluZyBzdWNjZXNzZnVsbHkhISEhISEhJyk7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBIb21lIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9hYm91dC5qcyc7XG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUuanMnO1xuXG5mdW5jdGlvbiBwYWdlTG9hZCgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpO1xuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fib3V0Jyk7XG5cblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoSG9tZSgpKTtcblxuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKEhvbWUoKSk7XG4gICAgfSlcblxuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKE1lbnUoKSk7XG4gICAgfSlcblxuXG4gICAgYWJvdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKEFib3V0KCkpO1xuICAgIH0pXG59XG5cbnBhZ2VMb2FkKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9