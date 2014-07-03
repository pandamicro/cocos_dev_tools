(function() {
    var me = {};
    me.messagePool = [];

    me.send = function (message) {
        me.messagePool.push(message);
    };

    me.onMessage = function (message) {
        console.log('receive :', message);
    };

    me.flush = function () {
        var temp = me.messagePool;
        me.messagePool = [];
        return temp;
    };

    window.pipePage = me;
})();