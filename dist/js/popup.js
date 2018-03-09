webpackJsonp([0],{

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const moment = __webpack_require__(0);
const $ = __webpack_require__(1);
$(function () {
    const queryInfo = {
        active: true,
        currentWindow: true
    };
    chrome.tabs.query(queryInfo, function (tabs) {
        $('#timetoday').text(moment().format('YYYY-MM-DD HH:mm:ss'));
        $("#timespent").text(chrome.extension.getBackgroundPage().localStorage.getItem("currentTime"));
    });
    $('#reset').click(() => {
        chrome.extension.getBackgroundPage().localStorage.setItem("currentTimeNum", "0");
    });
});


/***/ })

},[2]);