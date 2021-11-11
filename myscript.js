const alarm_id = 'alarm_001';

function setAlarm(event) {
  let minutes = parseFloat(event.target.value);
  chrome.browserAction.setBadgeText({text: 'ON'});
  chrome.alarms.create({delayInMinutes: minutes});
  chrome.storage.sync.set({minutes: minutes});
  window.close();
}
function clearAlarm() {
  chrome.browserAction.setBadgeText({text: ''});
  chrome.alarms.clearAll();
  window.close();
}

document.getElementById('id_Set').onclick = () => {
  let dt = new Date();
  let min = document.getElementById('id_Sec').value;
  dt.setMinutes(dt.getMinutes() + parseInt(min));
  chrome.alarms.create(alarm_id, {when: dt.getTime()});
};
document.getElementById('id_Clear').onclick = () => {
  chrome.alarms.clear(alarm_id);
};