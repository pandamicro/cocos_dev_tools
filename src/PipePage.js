(function (global, factory) {
    if (typeof exports === "object" && exports) {
        factory(exports); // CommonJS
    } else if (typeof define === "function" && define.amd) {
        define(['exports'], factory); // AMD
    } else {
        factory(global.pipePage = {}); // <script>
    }
}(this, function (me) {
    me.messagePool = [];

    me.send = function(message) {
        me.messagePool.push(message);
    };

    me.onMessage = function(message) {
        console.log('receive :',message);
    };

    me.flush = function() {
        var temp = me.messagePool;
        me.messagePool = [];
        return temp;
    };

}));