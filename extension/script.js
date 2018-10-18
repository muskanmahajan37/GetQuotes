chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.insertCSS(null, {file: "styles.css"});
  chrome.tabs.executeScript({
    code: 'document.body.webkitRequestFullscreen()'
 });
});