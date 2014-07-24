(function() {
    window.PipePage = function(){
        var me = this;
        me.messagePool = [];

        me.send = function (message) {
            me.messagePool.push(message);
            //console.log('send :', message);
        };

        me.onMessage = function (message) {
            //console.log('receive :', message);
        };

        me.flush = function () {
            var temp = me.messagePool;
            me.messagePool = [];
            return temp;
        };
    };
})();