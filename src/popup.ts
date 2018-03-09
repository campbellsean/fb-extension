import * as moment from 'moment';
import * as $ from 'jquery';

let count = 0;

$(function() {
  const queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    // Today
    $('#timetoday').text(moment().format('YYYY-MM-DD HH:mm:ss'));
    // Month
    $('#timemonth').text(moment().format('YYYY-MM-DD HH:mm:ss'));
  });

  // could maybe do something here
  chrome.browserAction.setBadgeText({text: '' + count});
  $('#countUp').click(()=>{
    chrome.browserAction.setBadgeText({text: '' + count++});
  });

  $('#eliminateFeed').click(()=>{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        feed: '#4b2e83' // lets try and make the feed purple first
      },
      function(msg) {
        console.log("result message:", msg);
        console.log("clicky");
      });
    });
  });

});
