// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// The function below is executed in the context of the inspected page.
/*
var page_getProperties = function() {
  var data = window.jQuery && $0 ? jQuery.data($0) : {};
  // Make a shallow copy with a null prototype, so that sidebar does not
  // expose prototype.
  var props = Object.getOwnPropertyNames(data);
  var copy = { __proto__: null };
  for (var i = 0; i < props.length; ++i)
    copy[props[i]] = data[props[i]];
  return copy;
}

chrome.devtools.panels.elements.createSidebarPane(
    "jQuery Properties",
    function(sidebar) {
  function updateElementProperties() {
    sidebar.setExpression("(" + page_getProperties.toString() + ")()");
  }
  updateElementProperties();
  chrome.devtools.panels.elements.onSelectionChanged.addListener(
      updateElementProperties);
});
*/
console.log('in devtools.js');
// console.log(cc.director);

chrome.devtools.panels.create("Cocos Elements",
    "",
    "main.html",
    function(panel) {
      // code invoked on panel creation
    }
);

// chrome.devtools.inspectedWindow.eval('console.log("execute from devtools.js");var port = chrome.runtime.connect();\
  // window.addEventListener("message", function(event) {console.log("Message Forward: ", event.data);port.postMessage(event.data);}, false);');
// chrome.tab.executeScript({file:"content.js"});
/*
var backgroundPageConnection = chrome.runtime.connect({
    name: "devtools-page"
});

backgroundPageConnection.onMessage.addListener(function (message) {
    // Handle responses from the background page, if any
    console.log('from background page', message);
});
*/
console.log('send message');
//Relay the tab ID to the background page
chrome.runtime.sendMessage({
    tabId: chrome.devtools.inspectedWindow.tabId,
    scriptToInject: "content.js"
});

// chrome.runtime.sendMessage(chrome.devtools.inspectedWindow);
// console.log('send message over');