browser.pageAction.onClicked.addListener(function(info, tab) {
    browser.tabs.executeScript({
      file: "main.js"
    });
});