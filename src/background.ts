// FormatDuration adapted from: https://github.com/google/page-timer
// Help for new day timing from: https://stackoverflow.com/questions/35908846/how-to-detect-app-launched-first-time-in-a-day

let state = {
    currentTime: 0
}

var firstTime = new Date().setHours(0, 0, 0, 0);
if (window.localStorage.getItem('firstLaunch') == null) {
    
    // alert("At first time");
    window.localStorage.setItem('firstLaunch', firstTime.toString());

} else {
    // alert("secondTime "+secondTime);

    // only use storage if this is the second time on the chrome
    state.currentTime = parseInt(localStorage.getItem("currentTimeNum"));

    var storedTime = parseInt(window.localStorage.getItem('firstLaunch'));
    var secondTime = new Date().setHours(0, 0, 0, 0)
    if (secondTime > storedTime) {
        window.localStorage.setItem('firstLaunch', secondTime.toString());
    }
}

// Current Time
localStorage.setItem("currentTimeNum", state.currentTime.toString());
localStorage.setItem("currentTime", FormatDuration(state.currentTime));


window.setInterval(function () {
    chrome.tabs.getSelected(null, function (tab) {
        var tablink = tab.url;
        state.currentTime = parseInt(localStorage.getItem("currentTimeNum"));
        
        // make sure the .com works
        if (tablink.includes("facebook.com")) {
            state.currentTime += 1000;
        }
        // Current Time
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