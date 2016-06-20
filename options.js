// Saves options to chrome.storage
function save_options() {
  var bugrakerUrl = document.getElementById('bugrakerUrl').value;
  chrome.storage.sync.set({
    bugrakerUrl: bugrakerUrl
  }, function() {
      alert("設定成功!");
  });
}

function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    bugrakerUrl: ''
  }, function(items) {
    document.getElementById('bugrakerUrl').value = items.bugrakerUrl;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);

