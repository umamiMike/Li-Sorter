chrome.browserAction.onClicked.addListener(function(tab) {
console.log("Pressed");
chrome.tabs.executeScript({
  file:"contentScript.js"
});

});
