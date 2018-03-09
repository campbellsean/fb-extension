
import removeFeed from "./facebook";

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.feed) {
        console.log("Getting rid of the Facebook newsfeed");
        removeFeed();
        sendResponse("Disabled the feed");
    }
});