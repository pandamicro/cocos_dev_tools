console.log('in main.js');
var output = document.getElementById('msg');

output.innerHTML = 'this is a test';
/*
var backgroundPageConnection = chrome.runtime.connect({
    name: "devtools-page"
});

backgroundPageConnection.onMessage.addListener(function (message) {
    // Handle responses from the background page, if any
    console.log('from main page', message);
    output.innerHTML += '<br>' + message;
});
*/

var backgroundPageConnection = chrome.runtime.connect({
    name: "panel"
});

backgroundPageConnection.postMessage({
    name: 'init',

    tabId: chrome.devtools.inspectedWindow.tabId,
    win : chrome.devtools.inspectedWindow
});

backgroundPageConnection.onMessage.addListener(function (message) {
    // Handle responses from the background page, if any
    console.log('from main page', message);
    output.innerHTML += '<br>' + message;
});

var tabId = chrome.devtools.inspectedWindow.tabId;
chrome.devtools.inspectedWindow.eval('console.log("'+tabId+'")');
chrome.devtools.inspectedWindow.eval('document.body.style.background = "red"');
