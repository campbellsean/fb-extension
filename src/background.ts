// FormatDuration adapted from: https://github.com/google/page-timer

let state = {
    currentTime: 0
}
localStorage.setItem("currentTimeNum", state.currentTime.toString());
localStorage.setItem("currentTime", FormatDuration(state.currentTime));

window.setInterval(function () {
    chrome.tabs.getSelected(null, function (tab) {
        var tablink = tab.url;
        state.currentTime = parseInt(localStorage.getItem("currentTimeNum"));
        if (tablink.includes("facebook")) {
            state.currentTime += 1000;
        }
        chrome.browserAction.setBadgeText({ text: '' + FormatDuration(state.currentTime) });
        localStorage.setItem("currentTimeNum", state.currentTime.toString());
        localStorage.setItem("currentTime", FormatDuration(state.currentTime));
    });
}, 1000);


function FormatDuration(d) {
    if (d < 0) {
        return "?";
    } else if (d === 0) {
        return "";
    }
    var divisor = d < 3600000 ? [60000, 1000] : [3600000, 60000];
    function pad(x) {
        return x < 10 ? "0" + x : x;
    }
    return Math.floor(d / divisor[0]) + ":" + pad(Math.floor((d % divisor[0]) / divisor[1]));
}