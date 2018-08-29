var port = chrome.runtime.connect();
console.log("Content script loaded");
chrome.runtime.onMessage.addListener(
  function(request, sender) {
    console.log("Contentscript has received a message from from background script: '" + request.message + "'");
 });

