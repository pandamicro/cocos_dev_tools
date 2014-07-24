function PipeDevtool() {
    var me = this;
    me.tryTimes = 0;
    me.TRYS = 10;
    me.timeout = 10000;

    me.checkMessage = function () {
        me.tryTimes++;
        var script = 'pipePage.flush()';
        me.inject(script, function (messages) {
            if (!messages || messages.length === 0) {
                return;
            }
            for (var i = 0;i < messages.length; i++) {
                me.onMessage(messages[i]);
            }
        });
    };

    me.init = function() {
        var intervalId = setInterval(function(){
            me.checkMessage();
            if (me.tryTimes >= me.TRYS) {
               // clearInterval(intervalId);
            }
        },100);
       var script = '//#injector.min.js#';
       me.inject(script);
    };

    me.send = function(message, callback) {
        var messageSerial = JSON.stringify(message);
        var script = 'pipePage.onMessage(' + messageSerial + ')';
        me.inject(script, function(v){ callback && callback(v) });
    };

    me.onMessage = function(message) {
        //console.log('receive :', message);
    };

    me.inject = function(script, callback) {
        script = script.replace('\'', '\\\'');
        /*jshint evil:true */
        //we need eval to inject script to page,ignore jshint warning
        chrome.devtools.inspectedWindow.eval(script, callback);
    };
}