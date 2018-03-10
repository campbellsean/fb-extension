webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const $ = __webpack_require__(0);
$(function () {
    const queryInfo = {
        active: true,
        currentWindow: true
    };
    chrome.tabs.query(queryInfo, function (tabs) {
        $("#timespent").text(chrome.extension.getBackgroundPage().localStorage.getItem("currentTime"));
    });
    $('#reset').click(() => {
        chrome.extension.getBackgroundPage().localStorage.setItem("currentTimeNum", "0");
    });
});


/***/ })
],[1]);