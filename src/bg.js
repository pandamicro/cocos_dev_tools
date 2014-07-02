// Background page -- background.js
// 
// 
// chrome.windows.create(
      // {url: "headers.html?" + tabId, type: "popup", width: 800, height: 600});
/*
console.log('background executing');
chrome.runtime.onConnect.addListener(function(devToolsConnection) {
    //console.log('callback', devToolsConnection);
    // assign the listener function to a variable so we can remove it later
    var devToolsListener = function(message, sender, sendResponse) {
        // Inject a content script into the identified tab
        console.log("in on Connect", message);
        console.log(devToolsConnection);
        devToolsConnection.postMessage("fixed message");
        //chrome.tabs.executeScript(message.tabId,
        //    { file: message.scriptToInject });
    };
    // add the listener
    console.log('add listener');
    devToolsConnection.onMessage.addListener(devToolsListener);

    devToolsConnection.onDisconnect.addListener(function() {
        console.log('remove listener');
         devToolsConnection.onMessage.removeListener(devToolsListener);
    });

    devToolsConnection.postMessage("some message to dev tools");
});
*/
/*
chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        console.log('global onMessage', message, sender);

        // chrome.tabs.executeScript(message.tabId,
            // { file: message.scriptToInject });
    }
    );
*/

var connections = {};

chrome.runtime.onConnect.addListener(function (port) {

    var extensionListener = function (message, sender, sendResponse) {

        // The original connection event doesn't include the tab ID of the
        // DevTools page, so we need to send it explicitly.
        if (message.name == "init") {
            console.log('init port', message);
          connections[message.tabId] = port;
          return;
        }

        console.log('other message', message);
        if (message.tabId in connections) {
            connections[message.tabId].postMessage(message.content);
        }
    // other message handling
    }

    // Listen to messages sent from the DevTools page
    port.onMessage.addListener(extensionListener);

    port.onDisconnect.addListener(function(port) {
        port.onMessage.removeListener(extensionListener);

        var tabs = Object.keys(connections);
        for (var i=0, len=tabs.length; i < len; i++) {
          if (connections[tabs[i]] == port) {
            delete connections[tabs[i]]
            break;
          }
        }
    });
});

// Receive message from content script and relay to the devTools page for the
// current tab
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // Messages from content scripts should have sender.tab set
    console.log('receive', request);
    if (sender.tab) {
      var tabId = sender.tab.id;
      if (tabId in connections) {
        connections[tabId].postMessage(request);
      } else {
        console.log("Tab not found in connection list.");
      }
    } else {
      console.log("sender.tab not defined.");
    }
    return true;
});