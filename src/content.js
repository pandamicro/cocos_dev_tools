console.log('in content.js');
/*
var script = document.createElement('script');
script.innerHTML = 'console.log("begin inject"); \
//console.log(cc.director); \
console.log("end inject");';
document.body.appendChild(script);
*/

var port = chrome.runtime.connect();
var message = "Im Alive";
console.log('send message', message);
port.postMessage(message);


window.addEventListener("message", function(event) {
    if (event.source != window)
        return;

    console.log("Message Forward: ", event.data);
    port.postMessage(event.data);
}, false);
