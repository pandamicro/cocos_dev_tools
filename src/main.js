console.log('in main.js');
var output = document.getElementById('msg');

output.innerHTML = 'this is a test';

var pipe = new PipeDevtool();
pipe.init();
pipe.send({"msg": 'hello world from devtool'});

pipe.onMessage = function (message) {
    output.innerHTML += '<br>' + JSON.stringify(message);
};