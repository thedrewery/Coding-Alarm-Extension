chrome.alarms.onAlarm.addListener((alarm) => {
  //alert
  chrome.windows.create({
    width : 500,
    height : 200,
    type : 'popup',
    url : 'alert.html'
  });
});