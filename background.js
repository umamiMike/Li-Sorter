var setSortable = function(){
  console.log("bawls");
    $('ul').sortable();
    $('ol').sortable();

}
chrome.browserAction.onClicked.addListener(function(tab) {
console.log("PRessed");
chrome.tabs.executeScript({
  file:"contentScript.js"
});

});
