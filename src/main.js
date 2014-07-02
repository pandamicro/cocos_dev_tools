console.log('in main.js');
var output = document.getElementById('msg');

output.innerHTML = 'this is a test';

pipeDevtool.init();
pipeDevtool.send({"msg":'hello world from devtool'});

pipeDevtool.onMessage = function(message) {
    output.innerHTML += '<br>' + JSON.stringify(message);
}