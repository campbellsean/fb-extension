import * as moment from 'moment';
import * as $ from 'jquery';


$(function() {
  const queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    $('#timetoday').text(moment().format('YYYY-MM-DD HH:mm:ss'));
    $("#timespent").text(chrome.extension.getBackgroundPage().localStorage.getItem("currentTime"));
  });

  $('#reset').click(()=>{
    chrome.extension.getBackgroundPage().localStorage.setItem("currentTimeNum", "0");
  });

});
